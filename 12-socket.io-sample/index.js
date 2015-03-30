var express	= require('express'),
      app 	= express(),
      server 	= require('http').createServer(app),
      io 		= require('socket.io')(server);

var users = 0;

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	users++
	socket.broadcast.emit('update-users', users);
	socket.emit('update-users', users);

	console.log('New client connected: Total ' + users);

	socket.on('send-message', function(data) {
		console.log('Message received: '+ data);
		socket.broadcast.emit('message-sent', data);
	});

	socket.on('disconnect', function() {
		socket.broadcast.emit('update-users', --users);
	});
});

server.listen(3000, function() {
	console.log('Server listening at: ' + 3000);
});
