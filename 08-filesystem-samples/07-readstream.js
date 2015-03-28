var fs = require('fs');

var stream = fs.createReadStream('/tmp/file_stream.txt');

stream.on('data', function(data) {
	console.log(data.toString());
});
