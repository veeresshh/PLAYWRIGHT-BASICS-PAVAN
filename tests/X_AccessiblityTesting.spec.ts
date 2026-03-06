/*
1) Playwright can be used to test your application for many types of accessibility issues.
Examples:
    Missing or Improper ALT Text for Images
    Poor Color Contrast
    Missing Form Labels
    Keyboard Navigation Issues

Every website should follow WCAG guidelines.
    - Web Content Accessibility Guidelines (WCAG) 

Install @axe-core/playwright: 
    npm install @axe-core/playwright

https://www.npmjs.com/package/@axe-core/playwright

*/

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; 


test("Accessibility Test", async({page},testInfo)=>{

 //await page.goto('https://demowebshop.tricentis.com/');
await page.goto('https://www.w3.org/');



//1) Scanning detect all types of WCAG violations.

const FirstAccessibilityScanResults = await new AxeBuilder({page}).analyze();
console.log(FirstAccessibilityScanResults);

expect(FirstAccessibilityScanResults.violations).toEqual([]);
expect(FirstAccessibilityScanResults.violations.length).toEqual(0);


//2) Scanning for few WCAG violations

const SecondAccessibilityScanResults=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();

await testInfo.attach('Second Accessibility Scan Results',{
                                                body: JSON.stringify(SecondAccessibilityScanResults,null,2),
                                                contentType:'application/json'
                                                });


//3) Scanning for fe WCAG violations with rules

const ThirdAccessibilityScanResults=await new AxeBuilder({page}).disableRules(['duplicate-id']).analyze();


await testInfo.attach('Third Accessibility Scan Results',{
                                                body: JSON.stringify(ThirdAccessibilityScanResults,null,2),
                                                contentType:'application/json'
                                                });

console.log("Number of violations:====>",ThirdAccessibilityScanResults.violations.length);

expect(ThirdAccessibilityScanResults.violations.length).toEqual(0);


})



