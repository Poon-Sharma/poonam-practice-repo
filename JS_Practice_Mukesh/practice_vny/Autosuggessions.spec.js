import { test, expect } from "@playwright/test";


test("dialogs",async({page})=>
{

   await page.goto("https://www.google.com/")
    //1st identify the locator for parent frame
    await page.locator("//textarea[@class='gLFyf']").fill("ttd")

    //2nd identify the list of autosuggestive from dom
       let  suggestions  =  await page.locator("//div[@role='presentation']/ul/li")

       await page.waitForTimeout(5000)
               let count      =   await suggestions.count()

            console.log(count)

            for(let i=0;i<count;i++)
            {
                       let value  =   await suggestions.nth(i).innerText()
                       if(value.includes("ttd booking"))
                       {
                            await suggestions.nth(i).click()
                            break;
                       }
            }
                        
  


    
});
    
