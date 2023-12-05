// Write a program that takes two numbers as input and calculates their product.
var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your first no '));
let b= parseInt(readlineSync.question('enter your second no '));
let product= a*b
console.log("product of ",a," and ",b,"=",product)