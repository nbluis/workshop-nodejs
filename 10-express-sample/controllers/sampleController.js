var SampleController = function() {
	this.index = function(req, res) {
		res.render('index.html', {text: 'Hello World Controller!'});
	}
};

module.exports = new SampleController();
