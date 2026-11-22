import { BrowserUtils } from "../utils/BrowserUtils";

export class ProductPage extends BrowserUtils {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)

        this.product_text_locator = page.getByText('Products')
    }

    async getProductsText() {
      return await this.getText(this.product_text_locator)
    }
}