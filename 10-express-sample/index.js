var express = require('express'),
	engine 	= require('ejs'),
	app = express(),
	bodyParser = require('body-parser'),
	sampleController = require('./controllers/sampleController'),
	postsController = require('./controllers/postsController');

app.engine('html', engine.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: true})); 
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
	res.end('Hello World');
});

app.get('/template', function(req, res) {
	res.render('index.html', {text: 'Hello World'});
});

app.get('/controller', sampleController.index);

app.get('/posts', postsController.index);
app.get('/posts/add', postsController.add);
app.get('/posts/edit/:id', postsController.edit);
app.post('/posts/create', postsController.create);
app.post('/posts/update/:id', postsController.update);
app.get('/posts/delete/:id', postsController.delete);

app.listen(3000);
