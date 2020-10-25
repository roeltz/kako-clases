class Animal {

	constructor() {
		
	}

	eat(food) {

	}

	die() {
		console.log("*DEAD*");
	}

	makeSound() {
		throw new Error("Not implemented");
	}

	breath() {
		console.log("*inhales*");
	}
}

class Dog extends Animal {

	playDead() {
		console.log("*plays dead*");
	}

	makeSound() {
		console.log("Guau guau");
	}
}

class Cat extends Animal {

	constructor() {
		super();
		this.lives = 9;
	}

	eat() {

	}

	die() {
		this.lives--;

		if (this.lives === 0) {
			console.log("It's really dead");
		} else {
			console.log(this.lives, "lives left");
		}
	}

	lickItself() {
		console.log("*licks licks*");
	}

	makeSound() {
		console.log("Miau");
	}
}

let firulais = new Dog();
firulais.breath();
firulais.makeSound();
firulais.die();

let garfield = new Cat();
garfield.breath();
garfield.lickItself();
garfield.makeSound();
garfield.die();