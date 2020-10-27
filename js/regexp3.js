let data = {
	nombre: "Paulo",
	materia: "Programación",
	profesor: "Leonardo"
};

let template = `

	Hola, mi nombre es {{ nombre }},
	y estoy en la clase de {{ materia }} con el profesor {{ profesor }}
	y 2 + 2 = {{ 2 + 2 }} y {{ data.nombre.toUpperCase() }}

`;

let expr = /\{\{\s*((\w+)|([^}]+))\s*\}\}/gm;
//let textoFinal = template.replace(expr, "$$$1");
let textoFinal = template.replace(expr, (m, m1, mv, me) => {
	if (mv) {
		return data[mv];
	} else {
		return eval(me);
	}
});

console.log(textoFinal);
