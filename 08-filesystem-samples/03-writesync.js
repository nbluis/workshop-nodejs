var fs = require('fs');

var conteudo = new Buffer("Conteúdo do arquivo");

fs.writeFileSync('/tmp/file_sync.txt', conteudo);
