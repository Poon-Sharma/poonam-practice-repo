
import {test,expect} from "@playwright/test" 

test("E2E", async({page}) =>
{
    await page.goto("https://blazedemo.com/");

    await page.locator("//select[@name='fromPort']").selectOption("Boston")

    await page.locator("//select[@name='toPort']").selectOption("New York")

    await page.getByRole('button').click()

    await page.locator("//tbody/tr[5]/td[1]/input[1]").click()

    await expect(page).toHaveURL(/.*purchase/)

    await expect(page).toHaveTitle(/.*Purchase/)

    const airlineName = await page.getByText("Airline: United").allTextContents();
    expect(airlineName).toContain("Airline: United");

    
    const flightNumber = await page.getByText("Flight Number: UA954").allTextContents();
    expect(flightNumber).toContain("Flight Number: UA954");



    const Price = await page.getByText("Price: 400").allTextContents();
    expect(Price).toContain("Price: 400");


    const arbitraryFees = await page.getByText("Arbitrary Fees and Taxes: 514.76").allTextContents();
    expect(arbitraryFees).toContain("Arbitrary Fees and Taxes: 514.76");


    const totalCost = await page.getByText("Total Cost: 914.76").allTextContents();
    expect(totalCost).toContain("Total Cost: 914.76 ");

    await page.getByPlaceholder('First Last').fill("Plyawright JS")

    await page.getByRole('textbox',{name: 'Address'}).fill("Banglore")

    await page.getByLabel('City').fill("Karnataka")

    await page.getByPlaceholder('State').fill("South India")

    await page.getByLabel('Zip Code').fill("123456")

    await page.getByRole('combobox').selectOption("American Express")

    await page.getByPlaceholder("Credit Card Number").fill("Credit Card Number")

    await page.locator('[name="creditCardMonth"]').fill("11")

    await page.getByLabel('Year').fill("2025")

    await page.getByRole('textbox', { name: 'Name on Card'}).fill("Playwright By Microsoft")

    await page.getByRole('checkbox').click()

    await page.locator("//input[@value='Purchase Flight']").click()

    await expect(page).toHaveURL(/.*confirmation/)

    console.log(page.locator('tr').locator('td').nth(1).allInnerTexts)

    expect (page.locator('tr').locator('td').nth(1)).toContainText

}
)