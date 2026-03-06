import { test, expect, Page } from "@playwright/test";

test("Handle PopUps", async ({ browser }) => {

    const Context = await browser.newContext();
    const page = await Context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Multple PopUps

    await Promise.all([
        page.waitForEvent('popup'), 
        await page.locator("#PopUp").click()
    ]);

    const AllPopupWindows = Context.pages();        // Returns array of pages

    console.log("Number of Pages/Windows:", AllPopupWindows.length); //3

    console.log(AllPopupWindows[0].url());         // Returns url of main page/parent
    console.log(AllPopupWindows[1].url())          // https://www.selenium.dev/
    console.log(AllPopupWindows[2].url())          // https://playwright.dev/ 


    for (const POPUP of AllPopupWindows) {

        const Title = await POPUP.title();

        if (Title.includes('Playwright')) {

            await POPUP.locator('.getStarted_Sjon').click();

            await page.waitForTimeout(5000);

            await POPUP.close(); // This will close playwrigt popup window

        }

    }

    await page.waitForTimeout(5000);


})