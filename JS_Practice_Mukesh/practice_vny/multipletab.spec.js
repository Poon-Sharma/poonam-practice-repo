const { test, expect } = require('@playwright/test');
test.only("Window3", async ({ browser }) => {

                  let context  = await browser.newContext()//which will create a context
                   let page          =   await context.newPage()
                   let link = await page.locator("//a[text()='OrangeHRM, Inc']")

                   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

                  await page.evaluate(()=>
                {
                    window.scrollBy(0,850)
                })

                   let[newPage] = await Promise.all([(context.waitForEvent('page')),link.click()])
                   await page.bringToFront()
                   //3 pages page  newpage1 new page2
                   //await newPage1.bringToFront()
            })