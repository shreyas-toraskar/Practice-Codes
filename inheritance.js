//Inheritance

// Parent class
class Shape {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        console.log(`This shape is ${ this.color}`);
    }
}

// Child class 
class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }

    getArea() {
        const area = this.side ** 2;
        console.log(`The area of square is ${area}`);
    }
}

// Child class 
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        const area = Math.PI * Math.pow(this.radius, 2);
        console.log(`The area of circle is ${area}`);
    }
}

const mySquare = new Square('blue', 3);
mySquare.getColor(); // Output: This shape is blue.
mySquare.getArea();  // Output: The area of this square is 9.

const myCircle = new Circle('red', 5);
myCircle.getColor(); // Output: This shape is red.
myCircle.getArea();  // Output: The area of this circle is 78.54.