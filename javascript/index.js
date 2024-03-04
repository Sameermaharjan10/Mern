// function findMultiplication(input){

// for(let startingPoint = 1; startingPoint<11; startingPoint++){
//     let result = input * startingPoint
//     console.log(`${input} * ${startingPoint} = ${result}`);
// }

// }
// findMultiplication(5);
// findMultiplication(10);



function findMultiplication(filterObj){
    // let input = filterObj.input;
    // let startFrom = filterObj.startFrom;
    // let endAt = filterObj.endAt;

    //object destructuring
    let{input,startFrom,endAt} = filterObj;


    for(let startingPoint = startFrom; startingPoint<=endAt; startingPoint++){
        let result = input * startingPoint;
        console.log(`${input} *${startingPoint} =${result}`);

    }
}


findMultiplication({
    input:10,
    startFrom:5,
    endAt:10,

});
findMultiplication({
    input:15,
    startFrom:1,
    endAt:10,

});

let numbers = [1,2,3,4,5]
for (let i=0;i<5;i++){
numbers[i] = numbers[i] *2;
}
console.log(numbers);
//code here to double the elements of numbers

grereer