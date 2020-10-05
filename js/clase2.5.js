function Persona(nombre, edad) {
	let self = this;

	this.nombre = nombre;
	this.edad = edad;

	this.decirEdad = function() {
		return self.edad;
	};

	this.repetirFrase = function(frase) {
		return `Mi nombre es ${self.nombre} y la frase es: ${frase}`;
	};
}

let old = new Persona("Samuel", 17);
let dookie = new Persona("Paulo", 40);

let mensaje = old.repetirFrase.call(dookie, "Hola Mundo!");
//let mensaje = old.repetirFrase("Hola Mundo!");

let mensaje2 = old.repetirFrase.apply(dookie, ["Chao!"]);

console.log(mensaje);
console.log(mensaje2);