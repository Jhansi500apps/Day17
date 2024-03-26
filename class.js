// Defining class using es6
class Vehicle {
	constructor(name, maker, engine) {
		this.name = name;
		this.maker = maker;
		this.engine = engine;
	}
	getDetails() {
		return (`The name of the bike is ${this.name}.`)
	}
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());

// Defining class using function
function Vehicle1(name, maker, engine) {
	this.name = name,
		this.maker = maker,
		this.engine = engine
};

Vehicle1.prototype.getDetails = function () {
	console.log('The name of the bike is ' + this.name);
}

let bike12 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike22 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike12.name);
console.log(bike22.maker);
console.log(bike12.getDetails());
