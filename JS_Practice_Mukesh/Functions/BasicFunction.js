
// Funciton without perameter
function myfunc()
{
    console.log("hello");
    
}

myfunc()


//function with perameter
function myfunc1(name)
{
    console.log("hello",name);
    
}

myfunc1("Poonam")


// Hoisting: A function declaration define a named function using function keywork. It can be called before its defination appear in the code
// This works because of Hoisting. The whole funciton is avaialble throught its scope from the start.

function add(n1, n2)
{
    console.log("sum ", n1+n2);
    
}

add(10,20)  // 30
add(10,20,30)  // 10+20 = 30, third value wil be ignored
add(10) //  10 + no value = Nan


//method overloading: if 2 function have same name. in this case last defined function will be in use

// defaul arguments
function defarg(n1 =0, n2=0)
{
    console.log("sum", n1+n2);
    
}

defarg()  //0
defarg(10) // 10 + 0 
defarg(10, 20) // 30

// return value


export function funWithReturn(n1 =0, n2=0)  // export to use this function in other.js file
{
   let sum = n1+n2
   return sum
    
}

funWithReturn(1,2)
