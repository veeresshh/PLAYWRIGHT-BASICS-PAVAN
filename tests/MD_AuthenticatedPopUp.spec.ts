import { test, expect, Page } from "@playwright/test";

test("Authenticated Popup", async ({ browser }) => {

  const context = await browser.newContext({ httpCredentials: { username: 'admin', password: 'admin' } });


  const page = await context.newPage();


  //Approach 1: Directly Pass Login Along with Url

  await page.goto('http://admin:admin@the-internet.herokuapp.com/basic_auth');

  await page.waitForLoadState();                                     // Wait for Page Loaded Completely
  
  await expect(page.locator('text=Congratulations')).toBeVisible();

  await page.waitForTimeout(5000);



  //Approach 2: Pass the Login Along with Browser Context

  await page.goto('https://the-internet.herokuapp.com/basic_auth');

  await page.waitForLoadState();                                     // Wait For Page Loaded Completely

  await expect(page.locator('text=Congratulations')).toBeVisible();

  await page.waitForTimeout(5000);


})