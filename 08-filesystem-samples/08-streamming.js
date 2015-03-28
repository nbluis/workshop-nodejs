var http 	= require('http'),
	path 	= require('path');
	fs 		= require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
	var filePath = path.join(__dirname, 'music.mp3');
	var stat = fs.statSync(filePath);
	
	response.writeHead(200, {
		'Content-Type': 'audio/mpeg',
		'Content-Length': stat.size
	});
	
	var readStream = fs.createReadStream(filePath);
	
	readStream.on('data', function(chunk) {
		if (!response.write(chunk)) readStream.pause();
	});
	
	response.on('drain', function() {
		readStream.resume();
	});
	
	readStream.on('end', function() {
		response.end();
	});
});

server.listen(8888);
