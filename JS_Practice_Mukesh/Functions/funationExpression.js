// function expression : Store a function in a variable
const greet = function(name)
{
    return `hi, ${name}`
}

console.log(greet("Poonam"));


//callback function
//pass a function into another funciton

let num = [12,34,56,44,34,23]

let result = num.map(function(number)
{
    return number*2
})

console.log(result)