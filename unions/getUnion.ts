let id: string | number;
id = 5
console.log(id);
id = '52'
console.log(id);

type User = {
    id: string | number;
    name: string
}

type Admin = {
    userid: string | number;
    name: String
}

let afia: User | Admin = {id: 123, name: 'afia rahman'}
console.log(afia);
afia = {userid: 'A123', name: 'afia rahman mou'}
console.log(afia);

// union narrowing
function unionFunc(id: number | string){
    if(typeof id === 'number'){
        console.log(id.toFixed());        
    }
    else{
        console.log(id.toLowerCase());        
    }
}

// unionFunc(65.5543)
unionFunc('Hi Bye')

// strict variable val
let seatAllotment: 'aisle' | 'middle' | 'window' = 'aisle'
// seatAllotment = 'lot'
seatAllotment = 'middle'

// union type in object
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };

function area(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

const myCircle: Shape = { kind: "circle", radius: 10 };
const mySquare: Shape = { kind: "square", sideLength: 5 };

console.log(area(myCircle)); // Output: 314.159...
console.log(area(mySquare)); // Output: 25

let mixArr: (string | number)[] = [1, 2, 'koli']
console.log(mixArr);