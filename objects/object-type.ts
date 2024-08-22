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

// type alias
type Course = {
    title: string;
    duration: number;
    price: number;
}

function addCourse(crs: Course): Course{
    return {title: '', duration: 5, price: 99.45}
}

console.log(addCourse({title: '', duration: 5, price: 99.45}));


export {}