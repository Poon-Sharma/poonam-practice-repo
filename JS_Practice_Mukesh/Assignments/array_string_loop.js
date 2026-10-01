//test tool Validation
let tools = ["Selenium" , "Playwright", "Cypress", "WebDriverIO"];
tool_lenght = tools.length;
let found = false;

for(i=0;i<=tool_lenght;i++)
{
    if(tools[i] == "Playwright")
    {
     found = true 
     console.log("Playwright is supported");
     break
     
    }
}

if(found == false)
{
    console.log("Playwright not found in supported tools");
    
}

//check API tags
let tag = "regression,smoke,api,sanity";
let my_aaray = tag.split(",");
//console.log(my_aaray);
array_length = my_aaray.length

for(i=0; i<=array_length ; i++)
{
if(my_aaray[i]=="smoke")
{
    console.log("Smoke test will be executed");
    
}

if(my_aaray[i]=="performance")
{
    console.log("Performance test found");
    
}
}

//Validate Email Formate
let email = "mukesh@test.com"
if (email.includes("@") && email.endsWith(".com")) 
    {
  console.log("Email is valid");
    }
