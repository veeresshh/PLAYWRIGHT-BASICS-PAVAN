import { test, expect } from '@playwright/test'


test('Screenshots Demo', async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/")

  const Timestamp: number = Date.now();

  //Page Screenshot

  await page.screenshot({path:'Screenshots/'+'Homepage'+Timestamp+'.png'})

  //Full Page Screenshot

  await page.screenshot({path:'Screenshots/'+'Fullpage'+Timestamp+'.png', fullPage:true})

  //Element Screenshot

  const Logo=page.locator("img[alt='Tricentis Demo Web Shop']");
  Logo.screenshot({path:'Screenshots/'+'Logo'+Timestamp+'.png'})

  await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'Screenshots/'+'Logo'+Timestamp+'.png'})

  await page.locator('.product-grid.home-page-product-grid').screenshot({ path: 'Screenshots/' + 'FeaturedProducts' + Timestamp + '.png' })

})

test.only('Screenshots From Config', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123q'); //password incorrect
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

})