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
function area(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return Math.pow(shape.sideLength, 2);
    }
}
var myCircle = { kind: "circle", radius: 10 };
var mySquare = { kind: "square", sideLength: 5 };
console.log(area(myCircle)); // Output: 314.159...
console.log(area(mySquare)); // Output: 25
var mixArr = [1, 2, 'koli'];
console.log(mixArr);
