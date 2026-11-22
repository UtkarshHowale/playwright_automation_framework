export class BrowserUtils {

    constructor(page) {
        this.page = page;
    }

    /** @param {import('@playwright/test').Page} page */
    async navigateTo(url) {
        await this.page.goto(url)
    }

    /**@param {import('@playwright/test').Locator} locator */
    async fill(locator, text) {
        await locator.fill(text)
    }

    /**@param {import('@playwright/test').Locator} locator */
    async click(locator) {
        await locator.click()
    }

    /**@param {import('@playwright/test').Locator} locator */
    async getText(locator) {
       return await locator.textContent()
    }
}