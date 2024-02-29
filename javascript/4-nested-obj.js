// array

let courses = ["mern","marketing","python"];
let detailedCourses = [
    {
        name:"mern",
        duration:3

    },
    {
        name:"python",
        duration:2.5,
    },
    {
        name:"marketing",
        duration:2,
    },
];



// code to change marketing to digital marketing
detailedCourses[2].name = "digital marketing"
console.log(detailedCourses[2]);
console.log(detailedCourses[1].name);


let colors = [
    {
        name:"red",
        rgb:"rgb(232,9,0)",
        hex:"abc",
    },
    {
        name:"green",
        rgb:"rgb(132,9,0)",
        hex:"def",
    },
    {
        name:"blue",
        rgb:"rgb(289,9,1)",
        hex:"fdf",  // change this to correct value
    },
];

colors[2].hex = "ghi"
console.log(colors);


let user = {  //nested object (obj inside obj)
    name:"ram",
    age:20,
    address:{
        permanent:{
            district:"jhapa",
            ward:-2, //change this to 10
            province:1
        },
        temp:{
            district:"ktm",
            ward:13,
            province:3
        }
        },
}
user.address.permanent.ward = 10
console.log(user.address.permanent.ward);
console.log(user);

