
// let dbUsers = {
//     username:"ram",
//     password:"1234567",
//     isActivated: true,
// }

// let inputPassword = "1234567"
// let inputUsername ="ram"
//ram can login
//username ko pani pratice gara

// if (dbUsers.password == inputPassword){
//     if(dbUsers.username == inputUsername){
// console.log(`${dbUsers.username} can login`);
// }else{
//     console.log("cannot login");
// }
// }else{
//     console.log(`${dbUsers.username} cannot login`);
// }


// if(dbUsers.username == inputUsername && dbUsers.password == inputPassword && dbUsers.isActivated){
//     console.log("can login");
// }else{
//     console.log("cannot login");
// }

/*logical operators
    And - each and every condition must be true
    Or - any one of the condition can be true
    Not

*/

let student1 ={
    name:"ram",
    hasPaid:true,
    hasScholorship:false,
    fullAttendence:false,
};





if((student1.hasPaid || student1.hasScholorship) && student1.fullAttendence){  // and operator lai priopity vayo so bracket haleko
    //true || false && false
    //true ||false
    //true   - so using bracket 
    console.log(`${student1.name} can give exam`);
}else{
    console.log(`${student1.name} can't give exam`);
}