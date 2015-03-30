var express = require('express'),
	engine 	= require('ejs'),
	app = express();

app.engine('html', engine.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
	res.end('Hello World');
});

app.get('/template', function(req, res) {
	res.render('index.html', {text: 'Hello World'});
});

app.listen(3000);
