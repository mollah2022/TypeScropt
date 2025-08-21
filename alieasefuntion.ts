// aita regular niyome er akta function
const myFun = (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
    sex: string;
  }
) => {
  console.log(id);
  console.log(userInfo);
};

myFun(20, {
  name: "Sajib",
  age: 22,
  sex: "Male",
});
// ami jodi aliease use kori tahole aro sundor hobe

type userId = number | string;
type userInfo = {
  name: string;
  age: number;
  sex: string;
};

const myFun1 = (id: userId, userInfo: userInfo) => {
  console.log(id);
  console.log(userInfo);
  console.log(
    `This is ${userInfo.name}.My user id is ${id} and I am ${userInfo.age} year old..`
  );
};

myFun1(20, {
  name: "Sajib",
  age: 22,
  sex: "Male",
});
// ami userId jaigai sudu id likhe parbo abr userainfo jaigai je kono name dite parbo kinto obejct modde mane userInfo modde name jaigai name age jaigai age abr sex jaigai sex dite hobe na hole error khabe karon object vitore variable chnage kora jabe na

type userID = number | string;
type UserInfor = {
  Name: string;
  Location: string;
  CellNum: string;
  Age: number;
  Sex: string;
};

const userHandler = (id: userID, userinFo: UserInfor) => {
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
