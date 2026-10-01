import{test, expect} from "@playwright/test"
import { assert } from "console";

test("new_user" , async({page}) =>

{

    const uniquename = `PS_user1_${Date.now()}`;

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.locator('button:has-text("Login")').click();

    await page.waitForURL(/.*dashboard/); 

    await expect(page).toHaveURL(/.*dashboard/);

    await page.getByText('Admin', { exact: true }).click();

    await page.waitForURL(/.*admin/);

    await page.getByRole('button' , {name: ' Add '}).click();

    await page.waitForURL(/.*saveSystemUser/);

    await page.getByText('-- Select --').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();

    await page.getByPlaceholder('Type for hints...').fill('And');

    await page.waitForSelector(".oxd-autocomplete-option");

    await page.locator(".oxd-autocomplete-option").getByText("Peter Mac Anderson").click();

    await page.getByText('-- Select --').click();
    await page.getByRole('option', { name: 'Enabled' }).click();

    await page.getByRole('textbox').nth(2).fill(uniquename)

    await page.getByRole('textbox').nth(3).fill(uniquename)

    await page.getByRole('textbox').nth(4).fill(uniquename)

    await page.getByRole('button', { name: 'Save' }).click()

    await page.waitForURL(/.*viewSystemUsers/);
    await page.waitForLoadState('load');

  
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(uniquename);
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator("(//div[@class='oxd-table-cell oxd-padding-cell'])[2]")).toContainText(uniquename);


    await page.locator('i.oxd-icon.bi-trash').first().click();
    await expect(page.getByRole('document')).toBeVisible();

    await page.getByRole('button', { name: 'Yes, Delete' }).click();

    await page.waitForLoadState('load');

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(uniquename);
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator("(//div[@class='oxd-table-cell oxd-padding-cell'])[2]")).not.toContainText(uniquename);

    await page.locator(".o_eY3O").allTextContents()
    
});