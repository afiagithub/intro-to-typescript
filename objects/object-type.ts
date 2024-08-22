function createUser({name: string, age: number}){
    return 'Added'
}

// if the function return an object
function addUser():{name: string, age: number}{
    return {name: 'Yash', age: 25}
}

let newUser = {name: 'Akash', age: 21}

console.log(createUser(newUser));
console.log(addUser());


export {}