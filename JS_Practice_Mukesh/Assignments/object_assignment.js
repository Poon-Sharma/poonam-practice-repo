let apiResponse = {
    "status" : 200,
    "message" : "Success",
    data :
    {
users:
[
    {id:1, name:"Ramesh", isQA:true},
    {id:2, name:"Suresh", isQA:false},
    {id:3, name:"Dinesh", isQA:true},
    

]
    }
}
count=0
console.log("Name of all users who are QA: ")
apiResponse.data.users.forEach(user => {
  if (user.isQA) {
    console.log(user.name);
    count +=1
  }
})

console.log("Total users who is QA", count);

apiResponse.data.users.push( {id:4, name:"Mahesh", isQA:true})

console.log(apiResponse.data);
let Userlength = apiResponse.data.users.length

console.log("Total number of user are: ", Userlength);




