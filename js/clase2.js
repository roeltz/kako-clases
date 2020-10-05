const fs = require("fs");

function suma(a, b) {
	return a + b;
}

function guardarLog(mensaje) {
	fs.appendFile("log.txt", `[${new Date()}]: ${mensaje}\n`, function(err){
		if (err) {
			console.error("Hubo un error guardando el log:", err);
		}
	});
}

guardarLog("Programa iniciado");

let resultado = suma(5, 10);

guardarLog(`El resultado de la suma es ${resultado}`);