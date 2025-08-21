class Car {
  public brand: string;
  private price: number;
  protected year: number;

  constructor(brand: string, price: number, year: number) {
    this.brand = brand;
    this.price = price;
    this.year = year;
  }

  public getDetails(): string {
    return `${this.brand} (${this.year})`;
  }

  private secretPrice(): number {
    return this.price;
  }
}

const car1 = new Car("Toyota", 20000, 2022);
console.log(car1.brand);
console.log(car1.getDetails());
// console.log(car1.price);

class Student {
  public name: string;
  private cgpa: number;
  protected id: number;

  constructor(name: string, cgpa: number, id: number) {
    this.name = name;
    this.cgpa = cgpa;
    this.id = id;
  }

  public getInfo(): string {
    return `Name: ${this.name}, CGPA: ${this.cgpa}`;
  }
}

const s1 = new Student("Sajib", 3.75, 101);
console.log(s1.name);
console.log(s1.getInfo());
// console.log(s1.cgpa);

class Employee {
  public name: string;
  protected salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }

  public getManagerInfo(): string {
    return `${this.name} manages ${this.department} with salary ${this.salary}`;
  }
}

const m1 = new Manager("Ria", 50000, "HR");
console.log(m1.getManagerInfo());
// console.log(m1.salary);
