import { BrowserUtils } from "../utils/BrowserUtils";
import { ProductPage } from "./ProductPage";


export class LoginPage extends BrowserUtils {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {

        super(page)

        this.username_locator = page.locator('#user-name');
        this.password_locator = page.locator('#password');
        this.login_button_locator = page.locator('#login-button');

    }

    async loginToApplication(username, password) {

        await this.fill(this.username_locator, username)
        await this.fill(this.password_locator, password)
        await this.click(this.login_button_locator)
        return new ProductPage(this.page)
    }

}