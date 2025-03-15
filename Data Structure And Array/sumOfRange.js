//console.log(sum(range(1, 10)));

/* Write a range function that takes two arguments, start and end, and
 returns an array containing all the numbers from start up to and in
cluding end. */

/* function range (start, end){
    let rangeArray = [];
    for (let i = start; i <= end; i++){
        rangeArray.push(i);
    }
        return rangeArray;
}

console.log(range(1, 10));

function sum(rangeArray){
    let sum = 0;
    for (let i = 0; i < rangeArray.length; i++){
        sum += rangeArray[i];
    }
    return sum;
} 
 */


function range (start, end){

    let rangeArray = [];
    
    for (let i = start; i <= end; i++){
            rangeArray.push(i);
        }
            return rangeArray;
}

let sum = 0;
let rangeArray = range(1, 10);

rangeArray.forEach((number) => {

    sum += number;
    return sum;

});

console.log(sum);