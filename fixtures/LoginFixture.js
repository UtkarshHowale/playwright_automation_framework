import { test as base, expect } from '@playwright/test'
import { LoginPage } from "../pages/LoginPage"
import { Environment } from '../Environment'

/**
 * @typedef {Object} MyFixtures
 * @property {import('@playwright/test').Page} loginPage
 */

/** @type {import('@playwright/test').TestType<MyFixtures, {}>} */
export const test = base.extend({

    loginPage: async ({ page }, use) => {

        const login = new LoginPage(page)

        await page.goto(Environment.getBaseURL())

        await login.loginToApplication(Environment.getUsername(), Environment.getPassword())

        await use(page)

    }

})

export { expect }