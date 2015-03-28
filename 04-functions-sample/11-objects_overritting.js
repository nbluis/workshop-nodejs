function Animal() {
  this.comer = function() {console.log('Comi!');}
}

function Cachorro() {
  Animal.apply(this);
  this.comer = function() {console.log('O cachorro comeu');}
}

new Cachorro().comer();
