// 1. object creation with class
// 2. Normal object creation

// Object is dynamic collecyion of key - value pair

let emp = 
{
    id:101,
    "name" : "poonam",
    "phone" :[12344,3456,4536],
    "skills" : ["manual", "python", "playwright"],
    "address" : {
        "apartment" : "liferepbulic",
        "city" : "Pune",
        "pin" : 34567

    }
}

// here emp is object 
console.log(emp);
console.log(emp.skills);
console.log(emp.name);
console.log(emp.address.city);
console.log(emp.address);
console.log(emp.phone[1]);


emp.id = 202  // update object
emp.company = "Globant India" // add properties to object

console.log(emp);

//remove key permanantly . We can not delete the object but can delete the property of the object

delete emp.name
console.log(emp);







