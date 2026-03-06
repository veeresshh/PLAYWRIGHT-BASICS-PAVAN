
import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeAll('Open Application', async ({ browser }) => {

    page = await browser.newPage();

    await page.goto("https://www.demoblaze.com/index.html")

})


test.afterAll('Close Application', async () => {
    await page.close();
});


test.beforeEach('Login', async () => {

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();
    await page.waitForTimeout(2000);
})


test.afterEach('Logout', async () => {

    await page.locator('#logout2').click();
})


test.describe('Group', async () => {


    test('Find Number Of Products', async () => {

        const Products = page.locator('#tbodyid .hrefch');
        const Count = await Products.count();
        console.log('Number of products:', Count);
        await expect(Products).toHaveCount(9);

    });


    test('Add Product to Cart', async () => {

        await page.locator("text='Samsung galaxy s6'").click();

        // Handle Alert Before the Click

        page.on('dialog', async (dialog) => {

            expect(dialog.message()).toContain('Product added');
            await dialog.accept();
        });

        await page.locator('.btn.btn-success.btn-lg').click();
        
    });

})


