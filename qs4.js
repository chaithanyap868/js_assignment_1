// Implement a program that calculates the area of a rectangle using user-provided length and width.
var readlineSync = require('readline-sync');

let length= parseInt(readlineSync.question('enter the length '));
let width= parseInt(readlineSync.question('enter the width '));
let area=length*width
console.log("are of rectangcle is",area)