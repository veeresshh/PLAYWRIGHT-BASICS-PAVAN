import { test, expect } from "@playwright/test";


test("Verify page URL", async ({ page }) => {

   await page.goto("https://opensource-demo.orangehrmlive.com/");

   let URL: string = page.url();

   console.log("Url:", URL);

   await expect(page).toHaveURL(/login/);

})







