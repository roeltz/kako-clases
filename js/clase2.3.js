function raiz(indice) {
	return function(radicando) {
		return Math.pow(radicando, 1 / indice);
	};
}

let raizCuadrada = raiz(2);
let raizCubica = raiz(3);

console.log(raizCuadrada(9));
console.log(raizCubica(125));