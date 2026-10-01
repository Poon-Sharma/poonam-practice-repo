let arr = [15,25,35,78,45]

arrLength = arr.length
let sum =0
for(i=0;i<arrLength;i++)
{
    sum = sum+arr[i]
    console.log(sum)
}

console.log("Total Sum is",sum);

let average = (sum/arrLength)

console.log("The calculated Average is",average);


