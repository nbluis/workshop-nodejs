var events = require('events');

function Cachorro() {
	this.__proto__ = events.EventEmitter.prototype;

	var passos = 0;

	this.andar = function() {
		this.emit('comecar a andar');
		passos++;
		this.emit('parar de andar');
	}
}

var cachorro = new Cachorro();

cachorro.on('comecar a andar', function() {
	console.log('Olha, ele vai andar');
});

cachorro.on('parar de andar', function() {
	console.log('Olha, ele parou');
});

setInterval(function() {
	cachorro.andar();
}, 1000);
