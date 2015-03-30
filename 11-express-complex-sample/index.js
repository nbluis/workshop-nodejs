var express = require('express'),
	engine 	= require('ejs'),
	app = express(),
	bodyParser = require('body-parser'),
	helpers = require('./helpers'),
	postsController = require('./controllers/postsController');

app.locals = helpers;
app.engine('html', engine.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: true})); 
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', postsController.index);
app.get('/add', postsController.add);
app.get('/edit/:id', postsController.edit);
app.post('/create', postsController.create);
app.post('/update/:id', postsController.update);
app.get('/delete/:id', postsController.delete);

app.listen(3000);
