// Write a program that takes user input for their name and prints a personalized greeting
var readlineSync = require('readline-sync');
let name= readlineSync.question('enter your name');
console.log("hey ",name," how are you!!!!")