var person = "Sam"
let greeting = "Hi"
let age = 20


console.log(greeting, person);

// variable decleration and initialization
let course
course = "mern"
course = "web"
let title = course
console.log("course", course);
console.log("title", title);

var color = "white"
var color = "red"

let size ="small"
//let size ="medium" // cannot redeclare variable already created using let
size = "med"
size ="big"
console.log(size);

const PI = 3.145

let isVerified = true
let subtotal = 100
let vat = 0.785
let grandtotal = subtotal + vat
console.log(grandtotal);

let count; // undefined
console.log(count);




/*Data types
primitive data types
1.text string
2.number 
    -integer // whole number
    -float // double // decimal
3.boolean 
    -true
    -false
4. undefined // javascript only
5.null // empty

non-primitive (collections)
 Array
    -collection of multiple values
 syntax
    let<variableName>=[<element>,<element>,.....]

*/

let data = null

let topic1= "html"
let topic2 = "css"
let topic3 = "js"
topic3 = "javascript"
console.log("topic3",topic3);

let topic4 = "react"

// let topics ="html, css, js, react"
/*
Array
   - elements
    -collection of multiple values(elements)
    -usually it is collection of similar data types
    -always starts with 0th index
 syntax
    let<variableName>=[<element>,<element>,.....]

*/
let topics =["html","css","js","react"]
console.log(topics)

let ages = [10,20,"thirty"]
// let ages = [0th, 1st, 2nd]

//change "thirty" by 30



console.log("2nd index:prev:",ages[2]);
console.log(ages);

ages[2]=30
console.log("2nd index:after:",ages[2]);

console.log(ages);

let users = ["ram", "sita", "gita"]
// we need each users phone,address,age
// object in javascript

