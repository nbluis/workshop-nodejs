var http = require('http');

var url = 'http://www.google.com.br/';

http.get(url, function(req) {
	var body = '';
	req.setEncoding('utf8');

	req.on('data', function(data) {
		body += data;
	});

	req.on('end', function() {
		console.log(body);
	});
}).on('error', function(e) {
	console.error(e);
});
