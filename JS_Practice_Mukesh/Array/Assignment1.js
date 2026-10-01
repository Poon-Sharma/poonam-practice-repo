//Test Tool Validation

let Automation_tool = ["Selenium", "Playwright", "Cypress", "WebDriverIO"]

let array_length = Automation_tool.length;
console.log(array_length);

let found = false;

for (let i = 0; i < array_length; i++) {
   if (Automation_tool[i] === "Playwright") {
      console.log("Playwright is supported");
      found = true;
      break;
   }
}

if (!found) {
   console.log("Playwright not found in supported tools");
}


//Check API Tags

let myString="regression,smoke,api.sanity"
console.log(myString.split(","))

