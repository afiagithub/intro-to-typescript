"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// parameter type annotation
function addition(num1, num2) {
    return num1 + num2;
}
// parameter type annotation (return type is inferred) (object is returned)
function getObj(userName, email, allowed) {
    return {
        name: userName,
        email: email,
        allowed: allowed
    };
}
// parameter type annotation for arrow func
var newAddition = function (num1, num2) {
    return num1 * num2;
};
// no parameter type annotation for higher order func (TS understands on its own)
// By specifying return type, we make sure nothing other than string is returned
var nameList = ['kamal', 'jamal', 'lotif'];
var showName = nameList.map(function (n) {
    return "name is ".concat(n);
});
// void use case 
function showError(errMsg) {
    console.log(errMsg);
}
// never use case
function handleErr(errMsg) {
    throw new Error(errMsg);
}
console.log(addition(5, 8));
// addition(5, '8')
console.log(getObj('afia', 'rahman@email.com', true));
console.log(newAddition(5, 5));
console.log(showName);
console.log(showError('404 not found'));
console.log(handleErr('404 not found'));
