//Generic মানে Flexible Type।
// Generic ব্যবহার করলে, তুমি code একবার লিখে বিভিন্ন data type এর জন্য reuse করতে পারবে।

//Without Generics (Problem)
function identityNumber(value: number): number {
  return value;
}

function identityString(value: string): string {
  return value;
}

console.log(identityNumber(100));
console.log(identityString("Sajib"));

//With Generics (Solution ✅)
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(100);
let str = identity<string>("Hello Sajib");

console.log(num); // 100
console.log(str); // Hello Sajib
//এখানে <T> হলো Generic Type Variable। তুমি চাইলে number/string/object সব pass করতে পারবে।
//Generic with Arrays
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let numbers = getFirstElement<number>([10, 20, 30]);
let names = getFirstElement<string>(["Sajib", "Ria", "Rony"]);

console.log(numbers); // 10
console.log(names); // Sajib
//Generic Interface
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  data: { id: 1, name: "Sajib" },
};

const stringResponse: ApiResponse<string> = {
  status: 200,
  data: "Success",
};
//Generic Class
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello Sajib");

console.log(numberBox.getContent()); // 123
console.log(stringBox.getContent()); // Hello Sajib
// Generic Constraint (extends দিয়ে সীমাবদ্ধ করা)
// 👉 কখনও চাই যে generic type এ কিছু property অবশ্যই থাকতে হবে।
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("Hello"); // ✅ string এ length আছে
logLength([1, 2, 3]); // ✅ array তেও length আছে
// logLength(123); ❌ Error (number এ length নাই)

// Summary (Generic দিয়ে কী কী করা যায়?)

// Function reusable করা ✅

// Array, Object, Class এর জন্য flexible type বানানো ✅

// Interface flexible করা ✅

// Constraint দিয়ে সীমাবদ্ধ করা ✅
