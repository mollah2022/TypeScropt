class Car {
    constructor(brand, price, year) {
        this.brand = brand;
        this.price = price;
        this.year = year;
    }
    getDetails() {
        return `${this.brand} (${this.year})`;
    }
    secretPrice() {
        return this.price;
    }
}
const car1 = new Car("Toyota", 20000, 2022);
console.log(car1.brand);
console.log(car1.getDetails());
// console.log(car1.price);
class Student {
    constructor(name, cgpa, id) {
        this.name = name;
        this.cgpa = cgpa;
        this.id = id;
    }
    getInfo() {
        return `Name: ${this.name}, CGPA: ${this.cgpa}`;
    }
}
const s1 = new Student("Sajib", 3.75, 101);
console.log(s1.name);
console.log(s1.getInfo());
// console.log(s1.cgpa);
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    getManagerInfo() {
        return `${this.name} manages ${this.department} with salary ${this.salary}`;
    }
}
const m1 = new Manager("Ria", 50000, "HR");
console.log(m1.getManagerInfo());
export {};
// console.log(m1.salary);
//# sourceMappingURL=accessModifier.js.map