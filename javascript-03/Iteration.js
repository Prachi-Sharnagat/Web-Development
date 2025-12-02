// for loop

const { MdDownloadForOffline } = require("react-icons/md");

for(let index = 0 ;index <= 10; index++){
    console.log(index);
}

// for(let index = 0 ;index <= 10; index++){

//     for(let i = 0 ;i <= 10; i++){
//     console.log(i);
// }

//     console.log(index);
// }

const Myarray = ['prachi',  'shubhman', 'manohar'];

for(let index = 0; index <= Myarray.length; index++){
    const element = Myarray[index]
    console.log(element)
}


for(let index = 0; index <= 10; index++){
   if(index == 5){
    console.log("5 is detected")
    break;
   }
    console.log(`value of i is ${index} ` )
}

for(let index = 0; index <= 10; index++){
   if(index == 5){
    console.log("5 is detected")
    continue;
   }
    console.log(`value of i is ${index} ` )
}

//? while loop 
let index = 0 
while(index<=10){
    console.log(index);
    index = index + 9;
} // if this will run then index already will become 18

while(index < Myarray.length){
  console.log(Myarray[index]);
  index = index + 1;
}

let score = 10;
do {
console.log(score);
score ++;
}while(score <= 10);


// for of loops
const arr = [1,2,34,44,21]

for(const i of arr)

for(const num of arr){
    console.log(num)
}

const greetings = "hello worlds"
for(const greet of greetings){
    console.log(`each word of ${greet}`)
}

// maps are know for their unque values 
const map = new Map(); // it is a object which stores key–value pairs, just like a dictionary.
map.set('IN', 'india'); // key or value
map.set('USA',"UNITED STATE OF AMERICA");
map.set('Fr', "france");

console.log(map);

// array show
for(const key of map){
    console.log(key);
}

for(const [key,value] of map){
    console.log(key, ":-" , value);
}
//? it is not iteration in this syntax
// const MyObj = {
//    'Game1' : "Gta",
//    'Game2' : "chess"
// }

// for ( const [key,value] of MyObj){
//     console.log(key, ":-" , value);
    
// }