import {test as setup, expect} from "@playwright/test"
import userData from "../../test-data/login.json"
export const authfile = "D:\\Playwright_test\\.auth\\user.json"
setup("Login", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //await page.pause();
    await expect(page.getByRole('heading', { name: 'We Make Your Shopping Simple' })).toHaveText("We Make Your Shopping Simple");
    await page.getByRole('textbox', { name: 'email@example.com' }).fill(userData.useremail)
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill(userData.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")
    await page.context().storageState({path : authfile})
})