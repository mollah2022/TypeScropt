// Enum (Enumeration) হলো কিছু fixed value কে একটা নাম দিয়ে group করা।
// এটা মূলত constant values manage করার জন্য ব্যবহার হয়।

//Basic Number Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;

console.log(move); // 1
console.log(Direction.Left); // 3
//এখানে Up = 1 থেকে শুরু হয়েছে, তারপর Down = 2, Left = 3, Right = 4 auto assign হয়ে গেছে।
//String Enum
enum Roles {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function checkRole(role: Roles) {
  if (role === Roles.Admin) {
    console.log("Welcome Admin, full access!");
  } else if (role === Roles.User) {
    console.log("Welcome User, limited access.");
  } else {
    console.log("Guest access only.");
  }
}

checkRole(Roles.Admin); // Welcome Admin, full access!
checkRole(Roles.Guest); // Guest access only.
//Heterogeneous Enum (string + number)
enum Mixed {
  No = 0,
  Yes = "YES",
}

console.log(Mixed.No); // 0
console.log(Mixed.Yes); // YES
//Enum ব্যবহার Object এর মতো
enum Status {
  Pending,
  InProgress,
  Completed,
}

let taskStatus: Status = Status.Pending;

if (taskStatus === Status.Pending) {
  console.log("Task is still pending...");
}
//Reverse Mapping (Number Enum এ)
enum Color {
  Red = 1,
  Green,
  Blue,
}

console.log(Color.Red); // 1
console.log(Color[2]); // Green

// Summary (Enum এর কাজ)

// Fixed constant values define করা যায় ✅

// Code readable হয় (magic number / string avoid করা যায়) ✅

// Number Enum → auto increment হয় ✅

// String Enum → readable values পাওয়া যায় ✅

// Reverse mapping (number enum এ) করা যায় ✅

// 👉 চাইলে আমি একটা real-life mini project example (যেমন: Task Management system, যেখানে Status enum use হবে) বানিয়ে দিতে পারি।

// তুমি কি সেটা দেখতে চাও?
