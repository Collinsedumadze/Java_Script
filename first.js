console.log("hello world");

//A function to compute a factorial of a number

function factorial(f){
    if (f == 0){
        return 1;
    }else{
        return factorial(f-1) * f;
    }
}

console.log(factorial(5));