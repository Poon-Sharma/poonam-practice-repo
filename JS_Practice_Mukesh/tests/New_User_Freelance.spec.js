
import {test,expect} from "@playwright/test"

test("create New Uer", async({page}) =>
{
await page.goto("https://freelance-learn-automation.vercel.app/login")

await page.getByRole("link", {name: "New user? Signup"}).click();

await page.getByPlaceholder("Name").fill("Sudeepa Das", {delay : 200});

await page.getByPlaceholder("Email").fill("Sudeepa_1234@gmail.com", {delay : 200});

await page.getByTitle("Password must be atleast 6 characters").fill("Sudeepa_1234", {delay : 200});

await page.locator("#gender2").click()
await page.getByText("Java", { exact: true }).click()

})
