/*
Keyboard methods:
insertText
down
press
type
up

await page.keyboard
*/

import { test, expect } from '@playwright/test';

test('Keyboard Actions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const Input = page.locator('#input1');

    //1) Fous on Input

    await Input.focus(); //await input1.click();

    //2) Provide the Text Input

    await page.keyboard.insertText("welcome");

    //3) Ctrl + A - Select the text from Input

    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');

    //4) Ctrl +C - Copy the text from Input 

    await page.keyboard.down('Control');
    await page.keyboard.press('C');
    await page.keyboard.up('Control');


    //5 Press TAB - 2 times

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');


    //6) Ctrl + V  - Pass the text in input

    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');


    //7) Press TAB - 2 times

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');


    //8) Ctrl+V - Pass the Text in Input 

    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');

    await page.waitForTimeout(5000);

})


test.only('Keyboard Actions - Simple Way', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const Input = page.locator('#input1');

    //1) Fous on Input

    await Input.focus(); //await input1.click();

    //2) Provide the Text Input

    await page.keyboard.insertText("welcome");

    //3) Ctrl + A - Select the text from Input

    await page.keyboard.press('Control+A');

    //4) Ctrl +C - Copy the text from Input

    await page.keyboard.press('Control+C');

    //5 Press TAB - 2 times

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');


    //6) Ctrl + V  - Pass the text in Input

    await page.keyboard.press('Control+V');


    //7) Press TAB - 2 times

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');


    //8) Ctrl+V - Pass the Text in Input

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

})