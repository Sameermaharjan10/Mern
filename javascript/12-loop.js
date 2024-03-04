
// let students = [
//     {
//         name:"ram",
//         hasPaid:false,
//         hasScholorship:true,
//     },

//     {
//         name:"hari",
//         hasPaid:false,
//         hasScholorship:false,
//     },

//     {
//         name:"shyam",
//         hasPaid:true,
//         hasScholorship:false,
//     },
// ]

// let users =["ram","hari","shyam"];
// for(let index = 0; index < 3; index++){
//     console.log(index);
//     console.log(users[index]);
// }


/*
loop
    -for(when we know number of iterations)
    -while
    -dowhile

*/
// for(startingPoint; condition; mutator){
// for (let count = 1; count<=5; count++){
//     console.log({count});
// }
// console.log("end of loop");


// let users = ["ram","hari","shyam"];
// for(let index = 0; index<3; index++){
//     console.log(index);
//     console.log(users[index]);
// }


// console.log(users[0]);


// let todos = [
//   {
//     title: "html",
//     status: true,
//   },
//   {
//     title: "react",
//     status: false,
//   },
//   {
//     title: "express",
//     status: false,
//   },
// ];

// for(let index=0; index<3; index++){
//     if(todos[index].status){
//         console.log(`${todos[index].title} is completed `);
//     }else{
//         console.log(`${todos[index].title} is pending `);
//     }
//     }



function findMultiplication(input){
    for(let startingPoint = 1; startingPoint < 11; startingPoint++){
      let result = input * startingPoint
      console.log(`${input} * ${startingPoint} = ${result}`);

    }
    }

findMultiplication(5);
findMultiplication(10);
findMultiplication(5);