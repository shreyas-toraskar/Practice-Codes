// Abstraction

class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class.");
        }
    }

    // Abstract method
    calculateArea() {
        throw new Error("Method 'calculateArea' must be implemented in the derived class.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const myCircle = new Circle(5);
console.log("Area of the circle:", myCircle.calculateArea().toFixed(2));