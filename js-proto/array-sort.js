function by(fn) {
	fn.thenBy = _thenBy;
	return fn;
}

function _thenBy(fn) {
	var self = this;
	return by(function(a, b){
		return self(a, b) || fn(a, b);
	});
}

let a = [
	{name: "Old", age: 22, points: 5},
	{name: "idookie", age: 26, points: 17},
	{name: "fox", age: 33, points: 16},
	{name: "roeltz", age: 33, points: 15},
];

a.sort(
	by((a, b) => a.age - b.age).thenBy((a, b) => a.points - b.points)
);

console.log(a);