// aita regular niyome er akta function
const myFun = (id, userInfo) => {
    console.log(id);
    console.log(userInfo);
};
myFun(20, {
    name: "Sajib",
    age: 22,
    sex: "Male",
});
const myFun1 = (id, userInfo) => {
    console.log(id);
    console.log(userInfo);
    console.log(`This is ${userInfo.name}.My user id is ${id} and I am ${userInfo.age} year old..`);
};
myFun1(20, {
    name: "Sajib",
    age: 22,
    sex: "Male",
});
const userHandler = (id, userinFo) => {
    console.log(id);
    console.log(userinFo);
};
userHandler(255, {
    name: "Sajib Ahmed",
    Location: "Mirpur",
    phoneNum: "01571467869",
    Age: 24,
    sex: "Male",
});
export {};
//# sourceMappingURL=alieasefuntion.js.map