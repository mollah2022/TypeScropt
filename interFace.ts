//Basic Example
interface Person {
  id: number;
  name: string;
  age: number;
}

const p1: Person = {
  id: 1,
  name: "Sajib",
  age: 22,
};

// ❌ ভুল (missing property)
const p2: Person = {
  id: 2,
  name: "Ria",
  // age নাই, তাই error দিবে
};

//Optional Properties (?)
interface Student {
  id: number;
  name: string;
  email?: string; // optional
}

const s1: Student = { id: 1, name: "Sajib" };
const s2: Student = { id: 2, name: "Ria", email: "ria@gmail.com" };
//Readonly Properties
interface Car {
  readonly model: string;
  brand: string;
}

const car1: Car = { model: "TeslaX", brand: "Tesla" };

car1.brand = "BMW"; // ✅ allowed
// car1.model = "Audi"; ❌ Error: readonly
//Interface for Function
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

console.log(add(5, 10)); // 15
console.log(multiply(5, 10)); // 50
//Interface with Class
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound() {
    console.log("Woof! Woof!");
  }
}

const d = new Dog("German Shepherd");
console.log(d.name); // German Shepherd
d.sound(); // Woof! Woof!
//Extending Interfaces
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

const admin1: Admin = {
  id: 1,
  name: "Sajib",
  role: "SuperAdmin",
};
