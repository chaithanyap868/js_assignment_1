var readlineSync = require('readline-sync');

let age = parseInt(readlineSync.question('Enter the age: '));

if (age < 0) {
    console.log("Invalid age. Please enter a valid age.");
} else if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior");
}
