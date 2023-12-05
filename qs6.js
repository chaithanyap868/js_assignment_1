// Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming passing grade is 60 or above).
var readlineSync = require('readline-sync');

let score1= parseInt(readlineSync.question('enter your score in sub1 '));
let score2= parseInt(readlineSync.question('enter your score in sub2 '));
let score3= parseInt(readlineSync.question('enter your score in sub3 '));
let score4= parseInt(readlineSync.question('enter your score in sub4 '));
let score5= parseInt(readlineSync.question('enter your score in sub5 '));
let score6= parseInt(readlineSync.question('enter your score in sub6 '));
let score7= parseInt(readlineSync.question('enter your score in sub7 '));
let score8= parseInt(readlineSync.question('enter your score in sub8 '));
let score9= parseInt(readlineSync.question('enter your score in sub9 '));
let score10= parseInt(readlineSync.question('enter your score in sub10 '));
let total=score1+score2+score3+score4+score5+score6+score7+score8+score9+score10
if (total>=60){
    console.log("hurray you are passed")
}
else{
    console.log("soryy you're failed")
}

