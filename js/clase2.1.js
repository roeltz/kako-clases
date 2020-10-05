let c = 5;

function a() {
	let c = 1;
	console.log("La variable C dentro de la función A es", c);
	
	function b() {
		let c = 10;
		console.log("La variable C dentro de la función B es", c);

		function d() {
			let c = 7656;
		}
	}

	b();
}

a();
