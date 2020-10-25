let a = [];

// Añadir cosas
a.push(1); // Añade al final
a.push(2); // Añade al final
a.push(3); // Añade al final
a.unshift(4); // Añade al inicio
a.unshift(5); // Añade al inicio
a.unshift(6); // Añade al inicio

a.push(7, 8, 9);
a.unshift(10, 11, 12);

console.log(a);

// Quitar cosas
let x = a.pop(); // Quitar último elemento
console.log(x, a);

let y = a.shift(); // Quitar primer elemento
console.log(y, a);

let z = a.splice(4, 2); // Quitar de posiciones arbitrarias
console.log(z, a);

let zz = a.splice(4, 2, 13, 14, 15, 16, 17, 18); // Reemplazar
console.log(zz, a);

// Sacar fragmentos
let m = a.slice(2, 6); // Desde indice a hasta indice b - 1
console.log(m);

let n = a.slice(5); // Desde indice hasta el final
console.log(n);

let o = a.slice(-3); // Desde el final
console.log(o);

// Buscar cosas
let a2 = [456, 768, 735, 123, 657, 287, 123, 787, 323, 123];
let pos = a2.indexOf(123, 4);
let posR = a2.lastIndexOf(123);
console.log(pos, posR);

let o1 = {name: "gato"};
let o2 = {name: "perro"};
let o3 = {name: "pez"};

let a3 = [o1, o2, o3];
let pos2 = a3.indexOf(o3); // Encontrado
let pos3 = a3.indexOf({name: "pez"}); // NO encontrado, no es la misma referencia, devuelve -1
console.log(pos2, pos3);

// Si algo existe en un arreglo
if (a3.indexOf(o3) !== -1) {
	// Hacer algo al respecto
}

// Lo mismo, pero en ES6
if (a3.includes(o3)) {

}

// Combinar arreglos
let b1 = [1, 2, 3];
let b2 = [4, 5, 6];
let c = b1.concat(b2);
console.log(c);

// Convertir arreglo en cadena
let d = [1, 2, 3, 4, 5, 6];
console.log(d.join("-"));

// Invertir un arreglo
let e = d.slice().reverse();
console.log(d, e);
