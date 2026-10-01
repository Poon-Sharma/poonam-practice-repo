
const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');

test("Verify_login", async ({page}) =>
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByPlaceholder("Enter Email").fill("admin@email.com",{delay:200})

    await page.getByPlaceholder("Enter Password").fill("admin@123")
    await page.getByText("Sign in").nth(1).click();

    
}
)