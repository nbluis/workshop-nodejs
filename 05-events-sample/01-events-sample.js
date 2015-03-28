var events 		   = require('events'),
	eventEmitter = new events.EventEmitter();

eventEmitter.on('meuevento', function(parametro) {
  console.log('Meu evento aconteceu!', parametro);
});

eventEmitter.emit('meuevento', 'Parâmetro');
