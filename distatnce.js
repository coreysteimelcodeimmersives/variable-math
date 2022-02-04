let x1 = 4;
let y1 = 7;
let x2 = 12;
let y2 = 19;

let xSum = (x2 - x1)**2;
// console.log(xSum);

let ySum = (y2-y1)**2;
// console.log(ySum);

let xySum = xSum + ySum;
// console.log(xySum);

let dist = Math.sqrt(xySum);
console.log("The distance between cartesian coordinates (" + x1 + "," + y1 + ")" + " and (" + x2 + "," + y2 + ") is " + dist + ".");

// in one line ...
// console.log("The distance between cartesian coordinates (" + x1 + "," + y1 + ")" + " and (" + x2 + "," + y2 + ") is " + Math.sqrt((x2 - x1)**2+(y2-y1)**2) + ".");
