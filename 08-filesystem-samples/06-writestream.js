var fs = require('fs');

var stream = fs.createWriteStream('/tmp/file_stream.txt');
stream.write('Stream content');
stream.end();
