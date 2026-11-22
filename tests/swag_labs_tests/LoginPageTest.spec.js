import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { invalidLogin } from '../../test-data/loginData'

test('Verify login functionality with invalid credentials', async({page}) =>{

    await page.goto('https://www.saucedemo.com/');

    const loginPage = new LoginPage(page)
    loginPage.loginToApplication(invalidLogin.username, invalidLogin.password)

    await expect(page.locator("//h3[@data-test='error']")).toBeVisible()

})