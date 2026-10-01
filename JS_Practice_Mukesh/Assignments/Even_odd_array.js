let even_array=[]
let odd_array =[]

for(i=1; i<=100; i++)
{
if(i%2 == 0)
{
    even_array.push(i)
}

if(i%2 != 0)
{
    odd_array.push(i)
}

}

console.log("even array is:", even_array);
console.log("odd array is:", odd_array);



