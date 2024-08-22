var id;
id = 5;
console.log(id);
id = '52';
console.log(id);
var afia = { id: 123, name: 'afia rahman' };
console.log(afia);
afia = { userid: 'A123', name: 'afia rahman mou' };
console.log(afia);
// union narrowing
function unionFunc(id) {
    if (typeof id === 'number') {
        console.log(id.toFixed());
    }
    else {
        console.log(id.toLowerCase());
    }
}
// unionFunc(65.5543)
unionFunc('Hi Bye');
// strict variable val
var seatAllotment = 'aisle';
// seatAllotment = 'lot'
seatAllotment = 'middle';
