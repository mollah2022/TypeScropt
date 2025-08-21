// Enum (Enumeration) হলো কিছু fixed value কে একটা নাম দিয়ে group করা।
// এটা মূলত constant values manage করার জন্য ব্যবহার হয়।
//Basic Number Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move); // 1
console.log(Direction.Left); // 3
//এখানে Up = 1 থেকে শুরু হয়েছে, তারপর Down = 2, Left = 3, Right = 4 auto assign হয়ে গেছে।
//String Enum
var Roles;
(function (Roles) {
    Roles["Admin"] = "ADMIN";
    Roles["User"] = "USER";
    Roles["Guest"] = "GUEST";
})(Roles || (Roles = {}));
function checkRole(role) {
    if (role === Roles.Admin) {
        console.log("Welcome Admin, full access!");
    }
    else if (role === Roles.User) {
        console.log("Welcome User, limited access.");
    }
    else {
        console.log("Guest access only.");
    }
}
checkRole(Roles.Admin); // Welcome Admin, full access!
checkRole(Roles.Guest); // Guest access only.
//Heterogeneous Enum (string + number)
var Mixed;
(function (Mixed) {
    Mixed[Mixed["No"] = 0] = "No";
    Mixed["Yes"] = "YES";
})(Mixed || (Mixed = {}));
console.log(Mixed.No); // 0
console.log(Mixed.Yes); // YES
//Enum ব্যবহার Object এর মতো
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
})(Status || (Status = {}));
let taskStatus = Status.Pending;
if (taskStatus === Status.Pending) {
    console.log("Task is still pending...");
}
//Reverse Mapping (Number Enum এ)
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // 1
console.log(Color[2]); // Green
export {};
// Summary (Enum এর কাজ)
// Fixed constant values define করা যায় ✅
// Code readable হয় (magic number / string avoid করা যায়) ✅
// Number Enum → auto increment হয় ✅
// String Enum → readable values পাওয়া যায় ✅
// Reverse mapping (number enum এ) করা যায় ✅
// 👉 চাইলে আমি একটা real-life mini project example (যেমন: Task Management system, যেখানে Status enum use হবে) বানিয়ে দিতে পারি।
// তুমি কি সেটা দেখতে চাও?
//# sourceMappingURL=Enum.js.map