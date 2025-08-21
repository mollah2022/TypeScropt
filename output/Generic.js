//Generic মানে Flexible Type।
// Generic ব্যবহার করলে, তুমি code একবার লিখে বিভিন্ন data type এর জন্য reuse করতে পারবে।
//Without Generics (Problem)
function identityNumber(value) {
    return value;
}
function identityString(value) {
    return value;
}
console.log(identityNumber(100));
console.log(identityString("Sajib"));
//With Generics (Solution ✅)
function identity(value) {
    return value;
}
let num = identity(100);
let str = identity("Hello Sajib");
console.log(num); // 100
console.log(str); // Hello Sajib
//এখানে <T> হলো Generic Type Variable। তুমি চাইলে number/string/object সব pass করতে পারবে।
//Generic with Arrays
function getFirstElement(arr) {
    return arr[0];
}
let numbers = getFirstElement([10, 20, 30]);
let names = getFirstElement(["Sajib", "Ria", "Rony"]);
console.log(numbers); // 10
console.log(names); // Sajib
const userResponse = {
    status: 200,
    data: { id: 1, name: "Sajib" },
};
const stringResponse = {
    status: 200,
    data: "Success",
};
//Generic Class
class Box {
    constructor(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
}
const numberBox = new Box(123);
const stringBox = new Box("Hello Sajib");
console.log(numberBox.getContent()); // 123
console.log(stringBox.getContent()); // Hello Sajib
function logLength(item) {
    console.log(item.length);
}
logLength("Hello"); // ✅ string এ length আছে
logLength([1, 2, 3]); // ✅ array তেও length আছে
export {};
// logLength(123); ❌ Error (number এ length নাই)
// Summary (Generic দিয়ে কী কী করা যায়?)
// Function reusable করা ✅
// Array, Object, Class এর জন্য flexible type বানানো ✅
// Interface flexible করা ✅
// Constraint দিয়ে সীমাবদ্ধ করা ✅
//# sourceMappingURL=Generic.js.map