var path = require('path');

console.log('Diretório atual', __dirname);
console.log('Arquivo atual', __filename);
console.log('Diretorio anterior', path.join(__dirname, '../'));
console.log('Caminho relativo', path.relative(__dirname, '/tmp'));
