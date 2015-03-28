function execute(callback) { 
	callback(); 
}

function build() {
  return function() { 
  	console.log('Hello World!'); 
  };
}

(function() {
  execute(build());
})();

