const { PiResize } = require("react-icons/pi")


function sayMyName(){
    // console.log("Prachi Sharnagat");
    console.log("P")
console.log("R")
console.log("C")
console.log("H")
console.log("I")
}

sayMyName()

function addTwoNumbers(a,b){ // here a and b are parameters
    console.log(a+b);
}

addTwoNumbers(8,9); // here 8 and 9 are argument (which will going to pass)
// string pass 3 + "4"
addTwoNumbers(3,"9");
addTwoNumbers(3,"a");
addTwoNumbers(3,null);

const result = addTwoNumbers(9,0);
console.log(result); // answer undefined because return nothing 

function loginUserMessage(username){
    if(username == undefined ){
        console.log("please enter a username");
        return;
    }
    return `${username} is just logged in`;
}

const Myname = loginUserMessage("prachi");
const notGiven = loginUserMessage();
console.log(notGiven);
console.log(Myname);

// if("") // empty string consider as false 
// if(undefined) // consider as false
// bbut always run true if(true) --> if(!undefined)

function alreadyGiven(username = "sharda"){
     return `${username} is just logged in`;
}

const whoLoggedIn = alreadyGiven("prachi ") // override and this will print
// output -> prachi is just logged in 
console.log(whoLoggedIn); 

function calculateCartPrize(...num1){
    return num1;
}

console.log(calculateCartPrize(200, 500, 400, 300)) // ans : [200,500,400, 300] -> array

function calculateCartPrize2(val1,  val2 , ...num1){
    return num1;
}

console.log(calculateCartPrize2(200, 500, 400, 300)) // ans : val1n -> 200 , val2 -> 500 other array 
const user = {
    username : "prachi",
    Prize : 2000
}

function  handleObject(anyobject){
    console.log(`username is ${anyobject.username} and prize is ${anyobject.Prize}`)
}

handleObject(user);

const array  = [200, 300, 400];

function returnSecondValue(value){
    return value[1];
}

console.log(returnSecondValue(array))
console.log(returnSecondValue([200, 300, 400]))

//? scope 

let a = 10;
const b = 80;
var c = 39; // scope out of {}

function one(){
   const username = "prachi";
    function two(){
        const website = "xyz"
        console.log(username); // this one can access outsider because it is in same scope
    }
    // console.log(website);
    two()
}

one();

if(true){
    const username = "prachu"
    if (username == "prachu"){
        const website = "youtuber";
        console.log(username + " " + website);
    }
    // console.log(wesbsite); // error
}

// console.log(username) // error

// ? expressions
const addTwo = function(num){
    return num + 2;
}

// addTwo(5);
console.log(addTwo(8))

// +++++++++++++++ intresting part +++++++++++++++++++++++

console.log(addTwoNum(10)); // even here i can access my function

function addTwoNum(num){
    return num + 2;
}

// console.log(addOneNum(9)); here we cant access expression

const addOneNum = function(num){
    return num + 1 ;
}

// arrow function and this 
const user2 = {
    username : "prachi",
    Prize : 200, 
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

user2.welcomeMessage();
user2.username = "shubhman";
user2.welcomeMessage()
// this refers to current context and refer to scope variables 
console.log(this); // its empty -> refers to empty obj

function thisRefers(){
    console.log(this); // gives so many node attribute and values
    let username = "prachi"
    console.log(this.username) // answer is undefined it works on obj only
}

thisRefers();

// const userFunction = function(){
//      console.log(this); // gives so many node attribute and values
//     let username = "prachi"
//     console.log(this.username) // again undefined 
// }

// userFunction();


// call back function
const userFunction =() => {
     console.log(this); // gives empty obj
    let username = "prachi"
    console.log(this.username) // again undefined 
}

userFunction();

//? arrow function
// const addTwoNum = (num1, num2) =>{
//     return num1 + num2 
// }

const addTwoNumAgain = (num1, num2) => (num1 + num2); // same: implicit return without return keyword in paranthesis
const returnobj = (num1, num2) => ({username:"prachi"}); // return obj

// immediately involked function expressions
// uses : 1. To avoid polluting the global scope
// 2. To execute code immediately

(function callImediately(){
    let secret = 420;
    console.log(`${secret} is secret`)
})();

// arrow funcction 
((name)=> {
    console.log(`hello ${name}`)
})("prachi"); // semicolon must for end 

(function hello(name) {
    // named iife
    console.log(`hello ${name}`)
})("prachi"); // semicolon must for end 