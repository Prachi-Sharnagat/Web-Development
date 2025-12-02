const MyNum = [1,2,3,4,5,6,7,8,9];
const value = MyNum.filter( (num)=> num > 5
)
// way 1  : 
// const value = MyNum.filter( (num)=> num > 5
// )
// way 2 : 
// const value = MyNum.filter( (num)=> (num > 5)
// )
// way 3 : 
// const value = MyNum.filter( (num)=> {
//     return num > 5}
// )

 //! filter returns value
console.log(value);
 
const book = [
  {
    "title": "The Great Gatsby",
    "genre": "Classic Literature",
    "edition": "3rd Edition",
    year : 1995
  },
  {
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "edition": "2nd Edition",
    year : 2000
  },
  {
    "title": "Clean Code",
    "genre": "Programming",
    "edition": "1st Edition",
       year : 1994
  },
   {
    "title": "The Alchemist",
    "genre": "Programming",
    "edition": "25th Anniversary Edition",
       year : 2008
  },
  {
    "title": "Deep Work",
    "genre": "Productivity",
    "edition": "2nd Edition"
  }
]

// const userBooks = book.filter((item)=> item.genre=='Programming'  )
const userBooks = book.filter((item)=> item.year > 1994 && item.genre == "Programming"  )
console.log(userBooks);

const num = [1,2,3, 4,5,6,7,8];
const num1 = num.map( (item)=> (item+ 10))
console.log(num1);

const num2 = num
            .map( (item)=> item*10) // [10,20,30,40,50,60,70,80]
            .map( (item)=> item+1) // [11,21. 31, 41, 51, 61 , 71 , 81]
            .filter( (item) => item > 30) // true or false type

            console.log(num2);

// reduce ;
const arr = [1,2,3,4,5];

const arrSum = arr.reduce((acc,value)=> acc+value,0);
console.log(arrSum);

const sum = arr.reduce( 
    function( acc , currVal){
        console.log(`acc : ${acc} ,curent value : ${currVal} `)
        return acc+currVal;
    },0
)

console.log(sum)

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    category: "Classic"
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 44.95,
    category: "Technology"
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 16.50,
    category: "Science Fiction"
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    price: 14.99,
    category: "Self-Help"
  },
  {
    id: 5,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 39.99,
    category: "Technology"
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    category: "Classic"
  }
];

const shoping = books.reduce((acc, val)=> acc+val.price,0)

console.log(shoping)