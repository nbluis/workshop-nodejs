var mysql  = require('mysql');

function createConnection() {
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  database: 'nodejs'
	});
	connection.connect();
	return connection;
}

var PostsController = function () {
	this.index = function(req, res) {
		var connection = createConnection();
		connection.query('select * from posts', function(err, result, fields) {
			connection.end();
			res.render('posts/list.html', {posts : result});
		});
	};

	this.add = function(req, res) {
		res.render('posts/form.html', {post:{name:'', content: ''}});
	};

	this.edit = function(req, res) {
		var connection = createConnection();
		connection.query(
			'select * from posts where id = ?', 
			[req.params.id],
			function(err, result, fields) {
				connection.end();
				res.render('posts/form.html', {post : result[0]});
			});
	};

	this.create = function(req, res) {
		var connection = createConnection();
		connection.query(
			'insert into posts(name, content, data) values(?, ?, now())', 
			[req.body.name, req.body.content],
			function(err, result, fields) {
				connection.end();
				res.redirect('/');
			});
	};

	this.update = function(req, res) {
		var connection = createConnection();
		connection.query(
			'update posts set name = ?, content = ? where id = ?', 
			[req.body.name, req.body.content, req.params.id],
			function(err, result, fields) {
				connection.end();
				res.redirect('/');
			});
	};

	this.delete = function(req, res) {
		var connection = createConnection();
		connection.query(
			'delete from posts where id = ?', 
			[req.params.id],
			function(err, result, fields) {
				connection.end();
				res.redirect('/');
			});
	};

};

module.exports = new PostsController();
