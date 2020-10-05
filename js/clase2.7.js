class Persona {

	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}

	decirEdad() {
		return this.edad;
	}

	repetirFrase(frase) {
		return `Mi nombre es ${this.nombre} y la frase es: ${frase}`;
	}

	saludar() {
		console.log(`Hola, mi nombre es ${this.nombre}`);
		console.log(`y tengo ${this.edad} años`);
	}
}

let old = new Persona("Samuel", 17);
let dookie = new Persona("Paulo", 40);

old.saludar.call(dookie);