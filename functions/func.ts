// parameter type annotation
function addition(num1: number, num2: number) {
    return num1 + num2
}

// parameter type annotation (return type is inferred) (object is returned)
function getObj(userName: string, email: string, allowed: boolean) {
    return {
        name: userName,
        email: email,
        allowed: allowed
    }
}

// parameter type annotation for arrow func
let newAddition = (num1: number, num2: number) => {
    return num1 * num2
}

// no parameter type annotation for higher order func (TS understands on its own)
// By specifying return type, we make sure nothing other than string is returned
let nameList = ['kamal', 'jamal', 'lotif'];
let showName = nameList.map((n): string => {
    return `name is ${n}`
})

// void use case 
function showError(errMsg: string): void {
    console.log(errMsg);

}

// never use case
function handleErr(errMsg: string): never {
    throw new Error(errMsg);
}

console.log(addition(5, 8));
// addition(5, '8')
console.log(getObj('afia', 'rahman@email.com', true));
console.log(newAddition(5, 5));
console.log(showName);
console.log(showError('404 not found'));
console.log(handleErr('404 not found'));

export { }