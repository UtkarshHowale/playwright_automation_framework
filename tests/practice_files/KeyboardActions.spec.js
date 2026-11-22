import { test, expect } from '@playwright/test'

test('Copy and Past The Value', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    const text = page.locator('#login_credentials').getByText('standard_user')

    await text.press('Control+A')
    await text.press('Control+C')

    const username = await page.locator('#user-name');
    username.click()
    username.press('Control+V')

    await page.waitForTimeout(2000)

})