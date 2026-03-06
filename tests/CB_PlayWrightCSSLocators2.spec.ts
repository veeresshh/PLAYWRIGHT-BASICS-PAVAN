import { test, expect, Locator } from '@playwright/test';

test('CSS Locators in Playwright', async ({ page }) => {
  
  // Launch the URL

  await page.goto('https://demowebshop.tricentis.com/');


  // Logo (CSS locator)

  const RelativeLogo: Locator = page.locator('img[alt="Tricentis Demo Web Shop"]');
  await expect(RelativeLogo).toBeVisible();


  // Products Containing "computer" in href attribute 

  let Products: Locator = page.locator('h2 > a[href*="computer"]');   //[href*="computer"] mimics XPath's contains().
  const productsCount: number = await Products.count();
  expect(productsCount).toBeGreaterThan(0);

  console.log("First Computer product: ", await Products.first().textContent());
  console.log("N-th Computer product: ", await Products.nth(1).textContent());

  let ProductTitles: string[] = await Products.allTextContents();
  console.log("All computer related product names:", ProductTitles);

  for (let PT of ProductTitles) {
    console.log(PT);
  }


  // Products Starting with "/build" in Href Attribute

  const BuildingProducts: Locator = page.locator('h2 > a[href^="/build"]');  //[href^="/build"] mimics XPath's starts-with().
  const count = await BuildingProducts.count();
  expect(count).toBeGreaterThan(0);


  // Register Link Using CSS Selector with Exact Text Match

  const RegisterLink: Locator = page.locator('a[href="/register"]');
  await expect(RegisterLink).toBeVisible();


  // Last Social Media Link (Google+) Using :Last-Child

  const GooglePlusLinkText: string = await page.locator('.follow-us ul li:last-child').innerText();
  expect(GooglePlusLinkText).toBe('Google+');


  // Second Social Media Link (Twitter) Using :nth-child(2)

  const TwitterText: string = await page.locator('.follow-us ul li:nth-child(2)').innerText();
  expect(TwitterText).toBe('Twitter');

});
