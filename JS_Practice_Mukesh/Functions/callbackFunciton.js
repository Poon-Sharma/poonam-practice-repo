// function which call back later
//pass function into another function

let num = [12,34,56,44,34,23]

let result = num.map(function(number)
{
    return number*2
})

console.log(result)

//conver above function as arrow function


let num2 = [12,34,56,44,34,23]

let result1 = num2.map((number1)=>
{
    return number1*2
})

console.log(result1)

// map is higher order funciton which recive callback funciton
