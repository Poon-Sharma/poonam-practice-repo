let arrm= ["a","b","c","d","e"];

let str = "sc"

let found = false

for(let i of arrm)
{
    if(i == str)
    {
        found = true

    }
}

if(found == true)
{
    console.log("MAtch");
    
}

else
{
    console.log("no match");
    
}