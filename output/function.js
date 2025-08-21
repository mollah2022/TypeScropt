const myFun = () => {
    console.log("Hello World");
};
myFun();
let myFunction;
myFunction = () => {
    console.log("Hello Banglades");
};
myFunction();
// upore ami bole diyechi je aita functin tai aitai value rakha jabe na aita function e hote hobe  aitai type script
// myFunction = 10;
const myHandler = (num1, num2, check) => {
    if (check === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
const value = myHandler(10, 20, "add");
console.log(value);
export {};
// akhn ami jodi num1 jaigai value deyar somai string dei taile error khabe aitai typescript ja js e chilo na
// const myHandler = (num1: number, num2: number, check: string) => {
//   if (check === "add") {
//     return num1 + num2;
//   } else {
//     return num1 - num2;
//   }
// };
// const value = myHandler("add", 20, 10);
// console.log(value);
//# sourceMappingURL=function.js.map