import {test,expect} from "@playwright/test"

test("Verify Page Title", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    expect(page).toHaveTitle("OrangeHRM");

    console.log("Title of the page is Orange HRM");
}
)


test("Verify Page URL", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    expect(page).toHaveURL(/.*orangehrmlive/)

    console.log("URL of the page contain orangehrmlive")
}
)


test("Login Validation ", async({page}) =>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin")

    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole('button', { name: 'Login' }).click()

    expect(page).toHaveURL(/.*dashboard/)

    console.log("URL of the page contains dashboard")
}
)
