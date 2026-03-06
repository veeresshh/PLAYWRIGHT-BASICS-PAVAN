import { test, expect } from '@playwright/test';

test('Mouse hover', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const MouseHover = page.locator('.dropbtn');
    await MouseHover.hover();

    const Laptops = page.locator('.dropdown-content a:nth-child(2)');
    await Laptops.hover();

    await page.waitForTimeout(5000);

})


test('Right click', async ({ page }) => {

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

    const Button = page.locator('span.context-menu-one');
    await Button.click({ button: 'right' });
    await page.waitForTimeout(5000);

})

test('Double click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const SecondButton = page.locator("button[ondblclick='myFunction1()']");
    await SecondButton.dblclick(); 

    const SecondField = page.locator('#field2');
    expect(SecondField).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);

})


test.only('Drag and drop', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette');

    const Rome = page.locator("#box6");
    const Italy = page.locator("#box106");

    //Appraoch 1:  Mouse Hover and Drag Manually

    await Rome.hover();
    await page.mouse.down();
    await Italy.hover();
    await page.mouse.up();

    //Appraoch 2:  Mouse Hover and Drag Manually

    const Washington = page.locator('#box3');
    const USA = page.locator('#box103');

    await Washington.dragTo(USA);        // This Will Perform Drag and Drop Action
    await page.waitForTimeout(5000);

})