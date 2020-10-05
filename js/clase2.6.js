let suma = (a, b) => a + b;

let raiz = (indice) => (radicando) => Math.pow(radicando, 1 / indice);
let raizCuadrada = raiz(2);

function Persona(nombre, edad) {

	this.nombre = nombre;
	this.edad = edad;

	this.decirEdad = () => this.edad;

	this.repetirFrase = (frase) => `Mi nombre es ${this.nombre} y la frase es: ${frase}`;

	this.saludar = () => {
		console.log(`Hola, mi nombre es ${this.nombre}`);
		console.log(`y tengo ${this.edad} años`);
	};
}

console.log(suma(5, 10));
console.log(raizCuadrada(16));

let old = new Persona("Samuel", 17);
let dookie = new Persona("Paulo", 40);

console.log(old.repetirFrase.call(dookie, "Chao"));
old.saludar.call(dookie);