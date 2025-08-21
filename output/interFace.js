const p1 = {
    id: 1,
    name: "Sajib",
    age: 22,
};
// ❌ ভুল (missing property)
const p2 = {
    id: 2,
    name: "Ria",
    // age নাই, তাই error দিবে
};
const s1 = { id: 1, name: "Sajib" };
const s2 = { id: 2, name: "Ria", email: "ria@gmail.com" };
const car1 = { model: "TeslaX", brand: "Tesla" };
car1.brand = "BMW"; // ✅ allowed
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(add(5, 10)); // 15
console.log(multiply(5, 10)); // 50
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("Woof! Woof!");
    }
}
const d = new Dog("German Shepherd");
console.log(d.name); // German Shepherd
d.sound(); // Woof! Woof!
const admin1 = {
    id: 1,
    name: "Sajib",
    role: "SuperAdmin",
};
export {};
//# sourceMappingURL=interFace.js.map