let oldLog = console.log;

console.log = function(...args) {
	oldLog("Mira mamawebo:", ...args);
};


console.log("Hola");
console.log("Chao");