/*
All locators in Playwright by default work with elements in Shadow DOM. 
The exceptions are:
Locating by XPath does not pierce shadow roots.
*/

import { test, expect } from "@playwright/test";


test('First Shadow DOM', async ({ page }) => {

    await page.goto("https://books-pwakit.appspot.com/")

    await page.locator('#input').fill("Playwright automation");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);

    const BooksFound = await page.locator('h2.title').all();
    console.log("Books Found:", BooksFound.length)

    expect(BooksFound.length).toBe(20);

})



test.only('Second Shadow DOM', async ({ page }) => {

    await page.goto("https://shop.polymer-project.org/")

    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    await page.waitForTimeout(5000);

    const Productsfound = await page.locator('div.title').all();

    console.log("Number of products found:", Productsfound.length);

    expect(Productsfound.length).toBe(16);

    await page.waitForTimeout(3000);

})

