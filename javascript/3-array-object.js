// color = "red" //wrong syntax
let color = "red"; //declaration and initialization

let brand; //declaration
brand = "iphone"; //initialization
brand = "samsung"; // re-initialization

let course = "web";

// let course ="AI" // error: cannot redeclare using let

let price = 100;
price = 120;

let courses = null;
courses = "AI and ML";
console.log(courses);

let fruits = ["app", "kiwi", "avocado", "banana"];

//change this app to apple

console.log("0th index-prev", fruits[0]);

fruits[0] = "apple";
console.log("0th index-after", fruits[0]);

let projectorColor = "white";
let projetorBrand = "Samsung";
let projetorColor = "white";
let projetorPrice = "25000";
let projetorSize = "medium";
let projetorQuality = "normal";

/*
object which has key and value pair
 syntax:
 let<variableName> = {
    <key>:<value>
    <property>:<value>
    <attribute>:<value>
    <field>:<value>,
 }
 
 
 */

let projector = {
  color: "white",
  //   color: "black",
  //   Color: "white",
  brand: "Samsung", // change this to asus
  price: 25000,
  size: "medium",
  quality: "normal",
};
console.log("prev", projector.brand);

projector.brand = "asus";
console.log("after", projector.brand);

console.log("website-prev", projector.website);
projector.website = "https....";

console.log("website-after", projector.website);
console.log(projector);

let user1 = {
  name: "sita",
  age: 20,
}
let user2 = {
  name: "Ram",
  age: 21,
}
let user3 = {
  name: "Laxman",
  age: 21,
}

let users = [user1, user2, user3];
console.log(users);

// let brands = ["apple","samsung"]
let brands = [
  { 
    name: "apple",
     ceo: "abc",
     website: "https........." 
    },
  {
    name: "samsung",
    ceo: "xyz",
    website: "https........."//change this to samsung.com
  },
]
console.log(brands[1]);
brands[1].website = "samsung.com"
console.log(brands);
