const newObject = {
    name: "BMW-10",
    color: "Red",
    model: 2036,
    price: "500M",
};
console.log(newObject);
const carModel = {
    name: "AUDI",
    model: "AUDI-t77",
    price: "$906M",
    color: "white",
};
carModel.name = "BMW";
carModel.model = "BMW-T6";
carModel.price = "$807M";
carModel.color = "Black7";
console.log(carModel);
const keys = Object.keys(carModel);
console.log(keys);
const carModel1 = {
    name: ["AUDI", "BMW", "TOYOTA"],
    model: ["AUDI-t77", "BMW-x5", "TOYOTA-corolla"],
    price: ["$906M", "$700M", "$500M"],
    color: ["white", "black", "red"],
};
console.log(carModel1);
console.log(carModel1.name[0]); // AUDI
console.log(carModel1.model[1]); // BMW-x5
export {};
//# sourceMappingURL=objects.js.map