const countries = require("./countries.json");
const employees = require("./nomina.json");

//console.log(countries);

// Filter
let paisesQueEmpiezanPorA = countries.filter(pais => /^A/i.test(pais.name));
//console.log(paisesQueEmpiezanPorA);

let paisesQueTienenNombreCompuesto = countries.filter(pais => pais.name.split(/\s+/g).length > 1);
//console.log(paisesQueTienenNombreCompuesto);

// Ordenar sin alterar el original
//let copiaDePaises = new Array(...countries); // copia con spread
let copiaDePaises = countries.slice();
let paisesEnOrdenDesc = copiaDePaises.sort((a, b) => a.name < b.name ? -1 : 1);
//console.log(copiaDePaises);

// Ordenar alterando el original
let paisesEnOrdenDesc2 = countries.sort((a, b) => a.name < b.name ? -1 : 1);
//console.log(paisesEnOrdenDesc2);

// For each
for (let i = 0; i < countries.length; i++) {
	//console.log(">", countries[i].name);
}

for (let pais of countries) {
	//console.log("#", pais.name);
}

//countries.forEach((pais, i) => console.log(i, "+", pais.name));

// Mapear
//let nombresEnMinusculas = countries.map(pais => pais.name.toLocaleLowerCase());
//console.log(nombresEnMinusculas);

// Mapear como los cavernícolas
/*
let nombresEnMinusculas = [];
for (let i = 0; i < countries.length; i++) {
	let resultado = countries[i].name.toLocaleLowerCase();
	nombresEnMinusculas.push(resultado);
}

console.log(nombresEnMinusculas);
*/

// Reducir
let count = countries.reduce((acumulador, actual, i) => acumulador + 1, 0);
//console.log(count);

let totalSalario = employees.reduce((total, empleado, i) => total + empleado.sueldo, 0);
console.log(totalSalario);

// Reducir como los cavernícolas
/*
let totalSalario = 0;
for (let i = 0; i < employees.length; i++) {
	totalSalario += employees[i].sueldo;
}
console.log(totalSalario);
*/

