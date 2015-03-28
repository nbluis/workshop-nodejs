var fs = require('fs');

var data = fs.readFileSync('/tmp/file_sync.txt');

console.log(data.toString());
