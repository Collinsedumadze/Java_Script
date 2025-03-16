//console.log(sum(range(1, 10)));

/* Write a range function that takes two arguments, start and end, and
 returns an array containing all the numbers from start up to and in
cluding end. */


function range1 (start, end){
    let rangeArray = [];
    for (let i = start; i <= end; i++){
        rangeArray.push(i);
    }
        return rangeArray;
}

console.log(range1(1, 10));

function sum(rangeArray){
    let sum = 0;
    for (let i = 0; i < rangeArray.length; i++){
        sum += rangeArray[i];
    }
    return sum;
} 

console.log(sum(range1(1, 5)));



function range2 (start, end){

    let rangeofArray = [];
    
    for (let i = start; i <= end; i++){
            rangeofArray.push(i);
        }
            return rangeofArray;
}

let sumArray = 0;
let rangeofArray = range2(1, 10);

rangeofArray.forEach((number) => {

    sumArray += number;
    return sumArray;

});

console.log(sumArray);

// including a step argument to the range function

function range3 (start, end, step ){

    let rangeArray = [];
    
    for (let i = start; i <= end; i += step){

        if(step === undefined){
            step = 1;
        }
            rangeArray.push(i);
        }
            return rangeArray;
} 
console.log(range3(3, 10, 3));

function range3(start, end, step) {
    let rangeArray = [];

    // Default step to 1 if not provided
    if (step === undefined) {
        step = 1;
    }

    // Handle positive step (increasing)
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
    }
    // Handle negative step (decreasing)
    else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            rangeArray.push(i);
        }
    }

    return rangeArray;
}

console.log(range3(10, 3, -3)); // ➞ [10, 7, 4]
