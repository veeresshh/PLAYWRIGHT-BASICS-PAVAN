import { test, expect, Locator } from '@playwright/test';


// Using XPath


test('Handle Dynamic Elements using XPath', async ({ page }) => {
  
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  for (let i = 1; i <= 5; i++) {
   
    let button:Locator = page.locator('//button[text()="STOP" or text()="START"]'); // Locate the button with either 'STOP' or 'START' text
    
    await button.click();
    
    await page.waitForTimeout(2000);
  }
});


// Using Playwright Locator


test('Handle Dynamic Elements using PW Locators', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  
  for (let i = 1; i <= 5; i++) {
   
    const button = page.getByRole('button', { name: /START|STOP/ });

    await button.click();

    await page.waitForTimeout(2000);
  }
});


// Using CSS Locator


test('Handle Dynamic Elements using using CSS locator', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');


  for (let i = 1; i <= 5; i++) {
    
    const button = page.locator('button[name="start"], button[name="stop"]');

    await button.click();

    await page.waitForTimeout(2000);
  }
});