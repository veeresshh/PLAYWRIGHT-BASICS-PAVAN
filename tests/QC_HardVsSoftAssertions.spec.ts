/*By default, failed assertion will terminate test execution. 
Playwright also supports soft assertions 
failed soft assertions do not terminate test execution, but mark the test as failed. */

import { test, expect } from '@playwright/test';


test('Hard Vs Soft assertions', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  // Hard Assertions

  await expect(page).toHaveTitle('Demo Web Shop2'); //failed
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
  
  const FirstLogo= page.locator("img[alt='Tricentis Demo Web Shop']");
  await expect(FirstLogo).toBeVisible();


  // Soft Assertions

  await expect.soft(page).toHaveTitle('Demo Web Shop2'); //failed
  await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');

  const SecondLogo = page.locator("img[alt='Tricentis Demo Web Shop']");
  await expect.soft(SecondLogo).toBeVisible();

  await page.waitForTimeout(5000);


});


