import { test, expect } from '@playwright/test';

test('Handle Cookies Demo', async ({ browser }) => {

  const Context = await browser.newContext();
  const page = await Context.newPage();

  test.slow();

  // Add a cookie

  await Context.addCookies([{
    name: 'MyCookie',
    value: '123456',
    url: 'https://testautomationpractice.blogspot.com/'
  }]);                                                        // We Need to Pass Cookies in Array Format

  console.log('Cookie Added!');

  await page.waitForTimeout(5000);

  // 1) Open the URL

  await page.goto('https://testautomationpractice.blogspot.com/');


  // 2) Retrieve the cookie by name

  const AllCookiesAfterAdding = await Context.cookies();
  const RetrievedCookie = AllCookiesAfterAdding.find((c) => c.name === 'MyCookie');

  console.log('Retrieved Cookie Details:', RetrievedCookie);
  expect(RetrievedCookie).toBeDefined();  // To Check it is not Undefined
  expect(RetrievedCookie?.value).toBe('123456');

  // 3) Retrieve all cookies

  let AllCookies = await Context.cookies();
  console.log('Total Number of Cookies Created:', AllCookies.length);
  expect(AllCookies.length).toBeGreaterThan(0);

  console.log('Printing all the Cookies...');
  for (const cookie of AllCookies) {
    console.log(`${cookie.name} : ${cookie.value}`);
  }

  // 4) Delete specific cookie by clearing all cookies (as Playwright doesn’t support deleting single cookie directly)

  await Context.clearCookies();

  // Verify the number of cookies after deletion
  AllCookies = await Context.cookies();
  console.log('Number of cookies after deletion:', AllCookies.length);
  expect(AllCookies.length).toBe(0);

});
