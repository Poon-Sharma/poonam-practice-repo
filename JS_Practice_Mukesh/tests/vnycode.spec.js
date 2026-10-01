import { test, expect } from "@playwright/test";

test("dialogs",async({page})=>
{

   await page.goto("https://testautomationpractice.blogspot.com/");
   //step 1 in pw dialogs are dismissed automatically 

   //Step2-create a dialog before itself and then perform click
   page.on('dialog',async dialog=>
   {
            await expect(await dialog.type()).toContain('alert')
            await expect(await dialog.message()).toContain('I am an alert box!')
            await page.waitForTimeout(5000)
            await dialog.accept()

   }
   )
   await page.waitForTimeout(5000)
   await page.locator("//button[@id='alertBtn']").click();
  


    
});


import { test, expect } from "@playwright/test";

test("dialogs",async({page})=>
{

   await page.goto("https://testautomationpractice.blogspot.com/");
   //step 1 in pw dialogs are dismissed automatically 

   //Step2-create a dialog before itself and then perform click
   page.on('dialog',async dialog=>
   {
           await expect(await dialog.type()).toContain('confirm')
            await expect(await dialog.message()).toContain('Press a button!')
            await page.waitForTimeout(5000)
            await dialog.dismiss()

   }
   )
   await page.waitForTimeout(5000)
   await page.locator("//button[@id='confirmBtn']").click();
   await expect(await page.locator("//p[@id='demo']")).toContainText("You pressed Cancel!")
  


    
});


import { test, expect } from "@playwright/test";

test("dialogs",async({page})=>
{

   await page.goto("https://testautomationpractice.blogspot.com/");
   //step 1 in pw dialogs are dismissed automatically 

   //Step2-create a dialog before itself and then perform click
   page.on('dialog',async dialog=>
   {
         await expect(await dialog.type()).toContain('prompt')
            await expect(await dialog.message()).toContain('Please enter your name:')
            await expect(await dialog.defaultValue()).toContain("Harry Potter")//to capture the default value of alert
            await page.waitForTimeout(5000)
            await dialog.accept("vinay")
            

   }
   )
   await page.waitForTimeout(5000)
   await page.locator("//button[@id='promptBtn']").click();
   await expect(await page.locator("//p[@id='demo']")).toContainText("Hello vinay! How are you today?")
  


    
});