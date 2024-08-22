function createUser(_a) {
    var string = _a.name, number = _a.age;
    return 'Added';
}
// if the function takes an object and also return an object
function addUser() {
    return { name: 'Yash', age: 25 };
}
var newUser = { name: 'Akash', age: 21 };
console.log(createUser(newUser));
console.log(addUser());
