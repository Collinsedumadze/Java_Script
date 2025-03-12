// the ...(three dots help in fetching group of numbers even if u dont know the specific number)

function max(...numbers) {
    let maximumNumber = -Infinity;
    
   for (let maxNumber of numbers) {

    if (maxNumber > maximumNumber) 
        maximumNumber = maxNumber;     // i guess it has been redefined here
    }
    return maximumNumber;
}

    console.log(max(4, 1, 9,-2)); 

 
    let numbers = [5, 1, 7];
    console.log(max(...numbers));


     // Destructuring

    let {name} = {name: "Faraji", age: 23};
    console.log(name);