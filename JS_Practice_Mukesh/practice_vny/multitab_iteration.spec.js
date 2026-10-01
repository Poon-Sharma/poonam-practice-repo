const { test, expect } = require('@playwright/test');

test.only("Window3", async ({ browser })=>
{
               let context     =  await   browser.newContext()
                    let page         =       await context.newPage()
                    let link = await page.locator("(//div[@class='container'])[18]/div/div[2]/div/div[1]/div/ul/li")
                     await page.goto("https://orangehrm.com/")

                     await page.evaluate(()=>
                    {
                        window.scrollBy(0,10000)
                    })

                    let pages=[]
                    let links = await link.locator("a")
                        let count =        await links.count()
                        for(let i=0;i<count;i++)
                        {
                             let [newPage] = await Promise.all([
        context.waitForEvent('page'),
        links.nth(i).click({ modifiers: ['Control'] })
    ]);
    pages.push(newPage)
  
    if(pages.length>=5)
    {
  await pages[4].bringToFront()
    }
      
   }
                          
                    

})