let expr = /mundo/i;

//console.log(expr.test("Hola Mundo!"));

//console.log("Hola Mundo!".match(expr));

// Cuantificadores:
// ?: cero o uno
// *: cero o más
// +: uno o más
// N: {N}
// N, M: {N,M}, {N,}, {,M}

// Aserciones
// ^: Al inicio de la cadena
// $: Al final de la cadena
// \b: (boundary) Al inicio o al final de una palabra
// Lookahead (mirar pa'lante)
// (?=): Seguido de
// (?!): No seguido de
// Lookbehind (mirar pa'trás)
// (?<=): Antecedido por
// (?<!): No antecedido por

/*
let expr2 = /mund.*?\b/gi;
let texto = "Leonardo es el mejor profesor del mundo mundial, pero no mejor que el Sr Mund";

let m;
while (m = expr2.exec(texto)) {
	console.log(m);
}
*/

/*
let CV = /^([VE])-([0-9]{7,8})$/;
let CC = /^[0-9]{10}$/;

console.log("V-17587427".match(CV));
console.log("V-17587427".match(CC));
console.log("Mi cédula es 1034313289".match(CC));
*/

/*
let email = /^([A-Z0-9.]+)@[A-Z0-9]+((\.[A-Z0-9]+){2,3})$/i;
let a1 = "leorothe@gmail.b.a.c";

console.log(email.exec(a1));
*/

/*
let nombre1 = "Leonardo Rothe";
let nombre2 = "Jose Tagliafico";
let nombre3 = "Jose López";
let expr3 = /(\w+) (?!Rothe)/i;

console.log(expr3.exec(nombre1));
console.log(expr3.exec(nombre2));
console.log(expr3.exec(nombre3));
*/

let nombre1 = "Ambar Ballen";
let nombre2 = "Paulo Bellame";
let nombre3 = "Samuel Acevedo";
let expr4 = /(?<!Ambar) (\w+)/i;

console.log(expr4.exec(nombre1));
console.log(expr4.exec(nombre2));
console.log(expr4.exec(nombre3));