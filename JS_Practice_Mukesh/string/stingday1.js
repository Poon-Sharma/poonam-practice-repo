// stings are immutable
//string formating in typescript  ${} , in python it is f" {}"
// sting concatination 

let a=5 , b=10
let c=a+b
console.log(`sum is ${c}`)  // double quote or single qute can't use in concatination. it works only on backtick
console.log(`sum is c`)
let mystring = "PoonamSharma"
let mystring2 = "New_PoonamSharma"

/** method of string:
 *  string1.startsWith(string2)
 * string1.endWith(string2)
 * string1.includes(string2)
 * 
 */

console.log(mystring[0])  // indexing
console.log(`${mystring} + ${mystring2}`)
console.log(mystring + mystring2);


/**
 string.toUpperCase()
 string.toLowerCase()

 */
/** to trim or to remove the space from string
 * 
 trim() remove space from both side
 trimstart()  remove space of string from starts
 trimend()   remove space of string from end

 */



 /**
  Sliceing:

  str.slice(0,5)   slice  from 0th to 4th index
  */


  /**
   Split :

   spilt a string in multiple array

   example split a string on every space:

   
   */

   let mstr= "my name is poonam"
   let arr=mstr.split(" ")
   console.log(arr)
   console.log(arr[0]);
   console.log(arr[0][0]);


   let order="this is the orderid-35378"
   //to pring only order id
   let orderid=order.split("-")
   console.log(orderid[1])

   let olderoderid= orderid[1]
   let newoderid = 222222

   /**
    * replace:
    * str.replace(older , new)
    */

   olderoderid.replace(newoderid)

   console.log(order)


/* comparision in string: str1 === str2
*/
