import{test, expect} from "@playwright/test"
import { assert } from "node:console"
import path from "node:path"
import { text } from "node:stream/consumers"

test("Registration" , async({page}) =>

{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.locator('button:has-text("Login")').click();

    await page.waitForURL(/.*dashboard/); 

    await expect(page).toHaveURL(/.*dashboard/);

    await page.getByText('Recruitment', { exact: true }).click();

    await page.waitForURL(/.*recruitment/);

    await page.getByRole('button' , {name: ' Add '}).click();

    await page.waitForURL(/.*addCandidate/);

    await page.getByPlaceholder('First Name').fill("Ajay");

    await page.getByPlaceholder('Last Name').fill('shukla');

    await page.locator('.oxd-select-text').click(); // open dropdown
    await page.getByRole('option', { name: 'Senior QA Lead' }).click(); 

    await page.locator("input").nth(4).fill("Ajy_shkla@gmail.com");

    await page.locator("input").nth(5).fill("123456784");

    await page.locator('input[type="file"]').setInputFiles("C:/Users/anil1/My_First_VS/testdata/Sample_pdf.pdf");

    await page.locator("input").nth(7).fill("Playwright");

    await page.getByPlaceholder("yyyy-dd-mm").fill("2025-08-03");

    await page.getByRole("button", { name: "Save" }).click();

    await expect(page.locator('div.oxd-toast-icon-container')).toBeVisible();

    await expect(page.getByRole("button", { name: "Shortlist" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Reject" })).toBeVisible();

});



