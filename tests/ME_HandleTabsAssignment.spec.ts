import { test, expect, chromium } from "@playwright/test";

test('Handle Multiple Pages/Tabs', async () => {

    // Launch the browser

    const Browser = await chromium.launch();

    // Create a new context (a single browsing session)

    const Context = await Browser.newContext();

    // Create two pages

    const ParentPage = await Context.newPage();
    await ParentPage.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // Start waiting for new page before clicking. 

    // Should go parallely

    const [ChildPage] = await Promise.all([Context.waitForEvent('page'),ParentPage.locator("a:has-text('OrangeHRM, Inc')").click(),]);


    console.log(await ParentPage.title());           // OrangeHRM
    console.log(await ChildPage.title());            // Human Resources Management Software | OrangeHRM HR Software

    await expect(ParentPage).toHaveTitle('OrangeHRM')
    await expect(ChildPage).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software')


    await ParentPage.waitForTimeout(3000)
    await ChildPage.waitForTimeout(3000)

})