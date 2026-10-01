
const { test, expect } = require('@playwright/test');

test("InnerFrames",async({page})=>
{

    await page.goto("https://www.dezlearn.com/nested-iframes-example/")
    //1st identify the locator for parent frame
    let parentframe=await page.frameLocator("//iframe[@id='parent_iframe']")
    //navigate to child frame from parentframe
      let childFrame           = await parentframe.frameLocator("//iframe[@id='iframe1']")
      await childFrame.locator("//button[@id='u_5_6']").click()

        
});