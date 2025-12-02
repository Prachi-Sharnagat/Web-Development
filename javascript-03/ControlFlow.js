// javascript execution contest : how code ru actually in js

// execution context : 
// 1. global execution/ gloabal env context
// 2. function execution context
// 3. eval execution context

// memory //? creation phase   ()
// execution phase
// read from mdm / w3school  --> interveiw que ans from this 
let condition = true;
// here 2 is integer datatype  and "2" is a string  
// to avoid this we use strict check by ===
if (2 == "2") {
    let a = 10;
    let b = 10;
    c = a + b;
    console.log(c);
}
// this one is not executing
if (2 === "2") {
    let a = 30;
    let b = 10;
    c = a + b;
    console.log(c);
}

if (3 != 2) {
    let a = 30;
    let b = 10;
    c = a + b;
    console.log(c);
}
console.log("learning js")

if(condition) console.log("hello world "), console.log("learning if else");

const  userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard ){
    console.log("allow user to buy");
}

const userLoggedInGoogle = false;
const userLoggedInGmail = true;

if ( userLoggedInGoogle || userLoggedInGmail){
    console.log("yes, you are login")
}
const month = 1;
const monthName = "feb";
switch (month){
    case 1 :
    console.log("jan")
         break;

    case 2 :
    console.log("feb")
         break;
    default:
        console.log("default")
        break;
}
switch (monthName){
    case "jan" :
    console.log("jan")
         break;

    case "feb":
    console.log("feb")
         break;
    default:
        console.log("default")
        break;
}

// empty string is use to represent false value
// empty array is use to represent  true value

// falsy values : false , 0 , -0 , BigInt 0n , "" , null , undefined, NaN, 
// truthy value : true , [] , 1 , "0" -> string , 'false' -> again string ," " ->nothing but space consider in truthy value , {}, function(){} --> empty function is also truthy value
const userEmail = [];

if (userEmail.length == 0 ){
    console.log("array is empty")
}

const objEmpty = {}

if(Object.keys(objEmpty).length == 0){
    console.log("obj is empty")
}

// nullish coalescig operator (??): null undefined
let val1 ;
// val1 = null ?? 10;
// val1 = 15 ?? 10;
val1 = undefined ?? 12;
console.log(val1);

// terniary operator  
const iceTeaPrice = 100 ;
iceTeaPrice >= 80 ? console.log("it is greater then 80") : console.log("less than 80");

