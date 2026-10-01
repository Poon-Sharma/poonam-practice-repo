arr = [10,20,15,25,26,78,32,11,13]
let even = []
let odd = []

for(i of arr)
{
num = i%2
if(num == 0)
{
   even.push(i)
    
}

else
{
    odd.push(i)
}

}

console.log("even", even);
console.log("odd", odd);

