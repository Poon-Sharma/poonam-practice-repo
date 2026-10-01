// Index starts with 0

let arr = ["cat","dog","elephant","fish"];
console.log(arr[3])
console.log(arr[4]) // undefine error: if index out of range
console.log(arr[-1]) // undefine for incorrect index. -1 is not work here loke python


// it support muliple data type

let arr1 = ["name", 30, true, null, 0, 1]
console.log(arr1)


// create array inside array : nested array

let nestedArray = [
    ["std1",100,true],

    ["std2",200, false],

    ["std3",300, true]

]


console.log(nestedArray[2]);  // output : [ 'std3', 300, true ]
console.log(nestedArray[2][0]); // output: std3: first value of 2nd index array



// update the vlaue of index of array

let arr2 = ["name", 30, true, null, 0, 1];
console.log(arr2);  //[ 'name', 30, true, null, 0, 1 ]

arr2[1] = 40;
console.log(arr2);  //[ 'name', 40, true, null, 0, 1 ]

lengthis= arr2.length;

console.log(lengthis); //6

arr2.push("Tosca"); // add new value at end
console.log(arr2);


arr2.unshift("qtp"); // add value at first
console.log(arr2);


//delete operations: pop() : it remove from last
// shift() : it remove from fisrt


let arr3 = ["name", 30, true, null, 0, 1];
console.log(arr3);  //[ 'name', 30, true, null, 0, 1 ]

arr3.pop();
console.log(arr3);  //[ 'name', 30, true, null, 0 ]

arr3.shift();  
console.log(arr3);  //[ 30, true, null, 0 ]


let arr4 = ["name", 30, true, null, 0, 1];
arr4.indexOf[1] = 40;
console.log(arr4);  //[ 'name', 30, true, null, 0, 1 ]


arr5 = ["name", 30, true, null, 0, 1];
console.log(arr5);



//push , unshift : add first and last items in array   .... pop, shift : remove first and last item from array 

let arrm= ["a","b","c","d","e"];
console.log(arrm.slice(2))  //portion


















