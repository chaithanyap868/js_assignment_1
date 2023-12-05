// Implement a program that checks if a user's entered number is positive, negative, or zero.
var readlineSync = require('readline-sync');

let num= parseInt(readlineSync.question('enter the number '));
if (num> 0){
    console.log("enterd number is positive")
}
else{
    console.log("entered num is negetive")
}