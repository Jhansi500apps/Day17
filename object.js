// Defining object
let person = {
	first_name: 'Jhansi',
	last_name: 'Duggu',

	//method
	getFunction: function () {
		return (`The name of the person is ${person.first_name} ${person.last_name}`)
	},
	//object within object
	phone_number: {
		mobile: '12345',
		landline: '6789'
	}
}
console.log(person.getFunction());
console.log(person.phone_number.landline);
// Using a constructor
function person12(first_name, last_name) {
	this.first_name = first_name;
	this.last_name = last_name;
}
// Creating new instances of person object
let person1 = new person12('Jhansi', 'Duggu');
let person2 = new person12('Rahul', 'Reddy');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

// Object.create() example a
// simple object with some properties
const coder = {
	isStudying: false,
	printIntroduction: function () {
		console.log(`My name is ${this.name}. Am I 
			studying?: ${this.isStudying}.`)
	}
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Jhansi';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();
