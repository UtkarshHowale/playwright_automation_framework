import { test, expect } from '../../fixtures/LoginFixture.js';
import { ProductPage } from '../../pages/ProductPage.js';

test('Verify product text is present or not', async({loginPage}) => {

    const productPage = new ProductPage(loginPage)
    const productText = await productPage.getProductsText()
    expect(productText).toBe('Products')
})