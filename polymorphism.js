//Polymorphism
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}

function animalSound(animal) {
    animal.makeSound();
}


const animal = new Animal("animal");
const myDog = new Dog("");
const myCat = new Cat("");

animalSound(animal); // Output: Animal sound
animalSound(myDog);  // Output: Woof
animalSound(myCat);  // Output: Meow