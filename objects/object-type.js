"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, number = _a.age;
    return 'Added';
}
// if the function return an object
function addUser() {
    return { name: 'Yash', age: 25 };
}
var newUser = { name: 'Akash', age: 21 };
console.log(createUser(newUser));
console.log(addUser());
function addCourse(crs) {
    return { title: '', duration: 5, price: 99.45 };
}
console.log(addCourse({ title: '', duration: 5, price: 99.45 }));
var newPr = {
    // readonly is used when you don't want someone to change the value of that field.
    _id: ['1', '2'],
    name: 'milkvita',
    price: 45.50,
    quantity: 125
};
newPr.price = 47;
// newPr._id.push('6')
console.log(newPr);
