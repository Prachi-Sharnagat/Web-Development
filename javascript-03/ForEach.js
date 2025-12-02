// ? for in 
const myobj = {
    js : "javascript",
    cpp : "c++",
    py : "python"
}

for(const key in myobj){
    console.log(key);
}

for(const value in myobj){
    console.log(myobj[value]) // key + value
}

for(const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`);
}


// for of loops
const arr = [1,2,34,44,21]

//values
for(const num of arr){
    console.log(num)
}

// this gives key and for array kkeys are index
for(const num in arr){
    console.log(num + " " + arr[num]);
}

// maps : 
const map = new Map();
map.set('IN', "india");
map.set('usa', "united states of america");
map.set('fr', "france");

console.log(map);
// for(const value in map){
//     console.log(value);
// } //? this are not iteration even not throw error and nothing show

// for each !important
const coding = ["c", "cpp", "python", "ruby"];
coding.forEach(   function (){}) // for each is call bak fxn no name of fxn needed

coding.forEach( function (item){
    console.log(item);
});

// arow function can be use
coding.forEach( (item)=>{
    console.log(item)
})

function printMe(items){
    console.log(items)
}

coding.forEach(printMe);

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr)
})

const language = [
    {
        programmingLang : "javascript",
        fileName : "js"
    },
    {
        programmingLang : "java",
        fileName : "java"
    },
    {
        programmingLang : "python",
        fileName : "py"
    }
]

language.forEach( (item)=>{
// console.log(item) // object 
console.log(item.fileName)


})

// foreach return undefined

const value = 
language.forEach( (item)=>{
    console.log(item.fileName)
})

console.log(value);
// return --> undefined