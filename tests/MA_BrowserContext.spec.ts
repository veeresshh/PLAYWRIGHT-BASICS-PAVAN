import { test, expect, chromium, } from "@playwright/test";

// Browser ---> Context ----> Pages

// Browser ---> Chromium, Firefox, Webkit

// Contexts ---> We Can Have Multiple Contexts for Multiple Users/Apps for the Same Browser 

// Provide a way to Operate Multiple Independent Browser Sessions.

// Page ---> New Tab, Window, Popup


test("Browser context demo", async () => {


    const Browser = await chromium.launch();  // Create browser
    const Context = await Browser.newContext();  // create context

    // Creating 2 Pages

    const FirstPage = await Context.newPage();
    const SecondPage = await Context.newPage();

    console.log("No of pages created:", Context.pages().length); 

    await FirstPage.goto("https://playwright.dev/");
    await expect(FirstPage).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")

    await SecondPage.goto("https://www.selenium.dev/");
    await expect(SecondPage).toHaveTitle("Selenium");

    await FirstPage.waitForTimeout(5000);
    await SecondPage.waitForTimeout(5000);


})