// Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).
var readlineSync = require('readline-sync');
let age= parseInt(readlineSync.question('enter your age '));
if (age>=18){
    console.log("you are eligible for vote")
}
else{
    console.log("sorry! you are not")
}