interface People {
    name: string,
    age: number,
    greet: () => string,
}

// Classes give support to the inheritance and can implement interfaces
class Manager implements People {
    name: string;
    age: number;
    // Extra cheezain aa sakti hain class mein jo interface mein nahi hain
    // department: string = "Sales";
    // Kaam nahi aana chahiye

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        // this.department = department;
    }

    greet(): string {
        return `Hello, I am ${this.name}, the manager.`;
    }
}

let manager = new Manager("Prantor", 20);
console.log(manager.greet()); // Hello, I am Prantor, the manager.


class Shape {
    area(): void {
        console.log("This is the area of the shape");
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super(); // Call the constructor of the parent class Shape
        this.width = width;
        this.height = height;
    }
}

const r = new Rectangle(10, 20);
r.area() // This is the area of the shape

// Note: In the above code, when we do console.log(r.area()), the output will be:
// r.area() runs → prints "This is the area of the shape"
// Then console.log() tries to print the return value of r.area()
// Since area() returns nothing (undefined), it prints: undefined