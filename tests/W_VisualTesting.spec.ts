import { test, expect } from '@playwright/test';

test('Visual Test',async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    
    // Compare Snapshot of the Page

    expect(await page.screenshot()).toMatchSnapshot("Homepage.png");

    // Compare Snapshot of the Element

    const Logo = page.locator("img[alt='Tricentis Demo Web Shop']");

    expect(await Logo.screenshot()).toMatchSnapshot("Logo.png");


})