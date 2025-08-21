class Car {
    constructor(brand, model, year, color, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        console.log(`This is a${this.brand} and color is ${this.color}`);
    }
}
// object তৈরি
const car1 = new Car("Toyota", "Corolla", 2022, "White", 20000);
const car2 = new Car("Honda", "Civic", 2023, "Black", 25000);
console.log(car1);
console.log(car2);
export {};
//# sourceMappingURL=classTs.js.map