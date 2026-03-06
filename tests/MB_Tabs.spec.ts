import { test, expect, chromium } from "@playwright/test";

test("Handle Tabs", async () => {

    const Browser = await chromium.launch();         // Create Browser
    const Context = await Browser.newContext();      // Create Context

    // Creating 1 Page

    const ParentPage = await Context.newPage();

    await ParentPage.goto("https://testautomationpractice.blogspot.com/")

    // 2 Statements Should Go Parallely

    const [ChildPage] = await Promise.all([
        Context.waitForEvent('page'),
        ParentPage.locator("button:has-text('New Tab')").click()
    ]);  //VVIP ByHeart


    //Appraoch 1: Switch Between Pages and Get Titles ( Using Context)

    const Pages = Context.pages();                                          // Returns an array
    
    console.log("Number of pages created:", Pages.length)

    console.log("Title of the Parent page:", await Pages[0].title());
    console.log("Title of the Child page:",  await Pages[1].title());

    //Appraoch 2: Alternate

    console.log("Title of the Parent page:", await ParentPage.title());
    console.log("Title of the Child page:",  await ChildPage.title());

})