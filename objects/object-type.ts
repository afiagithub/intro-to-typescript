function createUser({ name: string, age: number }) {
    return 'Added'
}

// if the function return an object
function addUser(): { name: string, age: number } {
    return { name: 'Yash', age: 25 }
}

let newUser = { name: 'Akash', age: 21 }

console.log(createUser(newUser));
console.log(addUser());

// type alias
type Course = {
    title: string;
    duration: number;
    price: number;
}

function addCourse(crs: Course): Course {
    return { title: '', duration: 5, price: 99.45 }
}

console.log(addCourse({ title: '', duration: 5, price: 99.45 }));

type Product = {
    // readonly is used when you don't want someone to change the value of that field.
    readonly _id: string[];
    name: string;
    price: number;
    quantity: number
}

let newPr: Product = {
    // readonly is used when you don't want someone to change the value of that field.
    _id: ['1', '2'],
    name: 'milkvita',
    price: 45.50,
    quantity: 125
}

newPr.price = 47
/*We can push elements to read-only properties having type array; 
because arrays are not explicitly represented, but only by their memory address. 
So, technically we are not changing the memory address of array by pushing elements inside it, 
and READONLY still validates upon the address of the array. */
newPr._id.push('6')
console.log(newPr);

type transaction = {
    tran_id: string
}

type fullProduct = Product & transaction & {
    hasDiscount: boolean
}

export { }