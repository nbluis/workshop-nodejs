var fs = require('fs');

fs.readFile('/tmp/file.txt', function(error, data) {
	console.log(data.toString());
});
