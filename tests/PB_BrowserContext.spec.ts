import { test, expect, chromium } from '@playwright/test';


//browser-->context-->page

test('Browser Settings', async () => {

    const Browser = await chromium.launch({ headless: false });    // Runs in Headed Mode - We Can See UI

    //Const Browser=await chromium.launch({headless:true});        // Runs in Headedless Mode - We Can't See UI

    const Context = await Browser.newContext(
        {
            viewport: { width: 1200, height: 800 },
            locale: 'en-US',
            //proxy:{server:'http://myproxy.com:3245'}
            ignoreHTTPSErrors:true

        }
    );


    const page = await Context.newPage();

    //  Simulate Maximize the Page: Set Large Viewport Size - Alternate Way

    // await page.setViewportSize({ width: 1920, height: 1080 });      // Maximize the Page by Setting Size

    //Minimize the page : (Not Directly Supported)
    // Simulate minimize
    //await page.setViewportSize({ width: 1, height: 1 });

    await page.goto("https://self-signed.badssl.com/");

    console.log("Title of the Page:", await page.title());

    await page.waitForTimeout(7000);

})

