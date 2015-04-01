var express	= require('express'),
      app 	= express(),
      server 	= require('http').createServer(app),
      io 		= require('socket.io')(server);

var users = 0;

app.use(express.static(__dirname + '/public'));

var nomes = [];

io.on('connection', function (socket) {
	users++;
	var nome = socket.handshake.query.nome;
	nomes.push(nome);

	socket.broadcast.emit('adicionar-nome', {
		count: users,
		nome: nome
	});
	socket.emit('nomes', {
		count: users,
		nomes: nomes
	});

	socket.on('enviar-mensagem', function(data) {
		socket.broadcast.emit('recebeu-mensagem', data);
	});

	socket.on('disconnect', function() {
		users--;
		for (var i = nomes.length - 1; i >= 0; i--) {
			if(nomes[i]==nome){
				nomes.splice(i);
				break;
			}
		};
		socket.broadcast.emit('remover-nome', {
			count: users,
			nome: nome
		});

	});
});

var PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
	console.log('Server listening at: ' + PORT);
});
