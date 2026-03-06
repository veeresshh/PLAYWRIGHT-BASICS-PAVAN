import { test, expect } from "@playwright/test";

//Fixture - Global Variable  : page, browser

test("Verify Page Title", async ({ page }) => {


   await page.goto("https://opensource-demo.orangehrmlive.com/");

   let title: string = await page.title();

   console.log("Title : ", title);

   await expect(page).toHaveTitle("OrangeHRM");

})







