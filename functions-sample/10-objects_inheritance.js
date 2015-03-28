function Animal() {
  this.comer = function() {console.log('Comi!');}
}

function Cachorro() {
  Animal.apply(this);
}

new Cachorro().comer();

