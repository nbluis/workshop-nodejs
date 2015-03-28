function Animal() {
  this.comer = function() {
     console.log('Estou Comendo!');
  }; 
}
new Animal().comer();
