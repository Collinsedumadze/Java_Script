/* Define a recursive function isEven corresponding to this description.
 The function should accept a single parameter (a positive, whole num
ber) and return a Boolean. */


function isEven(param){
    if (param === 0){
        return true;
    } else if (param === 1){
        return false;
    }else if (param < 0){
        console.log("Please enter a positive number");
    }else{
        return isEven(param - 2);
    }

}

/*  Test it on 50 and 75. See how it behaves on-1. Why? Can you think
 of a way to fix this? */
 
console.log(isEven(50));

console.log(isEven(75));