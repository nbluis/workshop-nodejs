var fs = require('fs');

var conteudo = new Buffer("Conteúdo do arquivo");

fs.writeFile('/tmp/file.txt', conteudo, function(error) {
	if (error)
		console.err('Ocorreu um erro', error);
	else
		console.log('Arquivo criado com sucesso');
});
