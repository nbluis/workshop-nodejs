
function Animal() {
  var comeu = false;
  this.comer = function() {
     comeu = true;
  }; 
}

new Animal().comer();

