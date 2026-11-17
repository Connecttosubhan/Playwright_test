import {test, expect} from '@playwright/test'

test("Dashboard screen", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash')
    //hello
})