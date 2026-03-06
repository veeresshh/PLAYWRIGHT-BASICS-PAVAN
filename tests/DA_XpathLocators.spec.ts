import { test, expect, Locator } from '@playwright/test';


test('XPath Demo in Playwright', async ({ page }) => {

  // Launch the URL and maximize window

  await page.goto('https://demowebshop.tricentis.com/');


  // 1. Absolute XPath (Full XPath) - Not recomended

  const Logo: Locator = page.locator('//html/body/div[4]/div[1]/div[1]/div[1]/a/img');
  await expect(Logo).toBeVisible();  // Expect the logo to be visible


  // 2. Relative XPath (Partial XPath)

  const RelativeLogo: Locator = page.locator('//img[@alt="Tricentis Demo Web Shop"]');
  await expect(RelativeLogo).toBeVisible(); // Expect the logo to be visible


  // 3. XPath with contains() 

  let Products: Locator = page.locator('//h2//a[contains(@href,"computer")]'); // Matches with multipe elements

  const ProductsCount: number = await Products.count();   //Returns number of computer-related products 
  expect(ProductsCount).toBeGreaterThan(0);  // Expect the number of computer-related products to be greater than 0

  //console.log(await products.textContent()); //Error: strict mode violation: 
  console.log("First Computer product: ", await Products.first().textContent());
  console.log("N-th Computer product: ", await Products.nth(1).textContent());

  let ProductTitles: string[] = await Products.allTextContents();// getting all the matched products in to an array
  console.log("All computer related product names:", ProductTitles);

  for (let PT of ProductTitles)  // Printing product using loop
  {
    console.log(PT);
  }


  // 4. XPath with starts-with()

  const BuildingProducts: Locator = page.locator('//h2//a[starts-with(@href,"/build")]'); // Matches with multipe elements
  const Count = await BuildingProducts.count();
  expect(Count).toBeGreaterThan(0);  // Expect the number of build products to be greater than 0


  // 5. XPath with text()

  const RegisterLink: Locator = page.locator('//a[text()="Register"]');
  await expect(RegisterLink).toBeVisible(); // Expect the register link to be visible


  // 6. XPath with last()

  const GooglePlusLinkText: string = await page.locator('//div[@class="column follow-us"]//li[last()]').innerText();
  expect(GooglePlusLinkText).toBe('Google+');  // Expect the last social media link to be "Google+"


  // 7. XPath with position()
  
  const TwitterText: string = await page.locator('//div[@class="column follow-us"]//li[position()=2]').innerText();
  expect(TwitterText).toBe('Twitter'); // Expect the second social media link to be "Twitter"

});