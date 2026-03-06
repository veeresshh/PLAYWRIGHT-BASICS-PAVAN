/*
3 Ways to Create Trace file(.zip)
------------------------------
1) Using Playwright.config.ts
2) Using Command
             npx playwright test mytest.spec.ts --trace on
3) Code(programmitically)

     context.tracing.start({screenshots:true,snapshots:true});
     //Statements
      context.tracing.stop({path:'trace.zip'});

To View TraceFile ( 3 ways)
---------------------------
1) From html file--> click on trace.zip
2) Through command  - npx plawright show-trace trace.zip
3) Utility  -- > https://trace.playwright.dev/    ( drag and drop/upload trace.zip file)

*/




import { test, expect } from '@playwright/test';

test.only('Tracing Test', async ({ page, context }) => {

  context.tracing.start({ screenshots: true, snapshots: true });

  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

 context.tracing.stop({ path: 'trace.zip' });

});
