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

// if (students[0].hasScholorship){
//     console.log(`${students[0].name} can give exam`);
// }elseif(students[0].hasPaid{
//     console.log();
// }else



// function checkStudentAvailability(student){
//     if (student.haspaid){
//         console.log(`${student.name} can give exam`);
//     }elseif(student.hasScholorship)
// }



// if (students[1].hasPaid==students[1].hasScholorship){
//     console.log(`${students[1].name} can give exam`);
// }else{
//     console.log();
// }
// if(students[2].hasPaid){
//     console.log(`${students[2].name} can give exam`);
// }else{
//     console.log();
// }



// ram can give exam
// hari cant give exam
// shyam can give exam


/* 
operators
    -arthemetic operators
      +
      -
      *
      / - division
      % - modulus -- returns remainder

    
*/

// function double(input){
//     return input*2
// }
// console.log(double(11));
// console.log(double(101));

// console.log(double(count++)); //double(100)
// console.log(double(++count)); //double(101)


let dbUsers = {
    username:"ram",
    password:"1234567"
}

let inputPassword = "1234567"
let inputUsername ="ram"
//ram can login
//username ko pani pratice gara

if (dbUsers.password == inputPassword){
console.log(`${dbUsers.username} can login`);
}else{
    console.log(`${dbUsers.username} cannot login`);
}
// console.log(`${dbUsers.password}==${inputPassword} `);