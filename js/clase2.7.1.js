function Persona(nombre, edad) {
	this.nombre = nombre;
	this.edad = edad;
}

Persona.prototype.decirEdad = function() {
	return this.edad;
};

Persona.prototype.repetirFrase = function(frase) {
	return `Mi nombre es ${this.nombre} y la frase es: ${frase}`;
};

Persona.prototype.saludar = function() {
	console.log(`Hola, mi nombre es ${this.nombre}`);
	console.log(`y tengo ${this.edad} años`);
}

let old = new Persona("Samuel", 17);
let dookie = new Persona("Paulo", 40);

old.saludar.call(dookie);