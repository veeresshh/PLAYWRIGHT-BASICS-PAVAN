// npm install -D allure-playwright
// npm install -g allure-commandline
// allure --version
// allure generate ./allure-results -o ./allure-report
// allure generate ./allure-results -o ./allure-report --clear
// allure open ./allure-report 

import { test, expect } from '@playwright/test';

test.beforeEach('Launching Application', async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/")

})

test('Verify Logo', async ({ page }) => {
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test('Verify Title', async ({ page }) => {
    expect(await page.title()).toContain("Demo Web Shop1");
});

test('Search Items', async ({ page }) => {
    await page.locator('#small-searchterms').fill("laptop");  // fill teh text in search box
    await page.locator("input[value='Search']").click();      // click on the button
    await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true });
});