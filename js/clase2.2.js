// Closure

function Persona(nombre) {

	if (typeof nombre !== "string" || !nombre) {
		throw new Error("Nombre de persona inválido");
	}
	
	this.obtenerNombre = function() {
		return nombre;
	};

	this.saludar = function() {
		console.log(`Hola, mi nombre es ${nombre}`);
	};
}

let old = new Persona("Samuel");
let dookie = new Persona("Paulo");
let visitante = new Persona();

old.saludar();
dookie.saludar();
visitante.saludar();