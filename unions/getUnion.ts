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