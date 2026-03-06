/*
Most of the time, Playwright will automatically scroll for you before doing any actions. 
Therefore, you do not need to scroll explicitly.

*/

import { test, expect } from '@playwright/test';


test('Scrolling to Footer', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  //Footer element - automatically scrolled before doing any action
  const FooterText: string = await page.locator('.footer-disclaimer').innerText(); //Automatic scrolling

  console.log("Footer text captured:", FooterText);

});

test('Scrolling Inside DropDown', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator("#comboBox").click();

  const Option = page.locator('#dropdown div:nth-child(100)');
  console.log("Option captured from Dropdown:", await Option.innerText());

  await Option.click();

});


test.only('Scrolling Inside the Table', async ({ page }) => {

  await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html');

  const Name = await page.locator('tbody tr:nth-child(10) td:nth-child(2)').innerText(); //Automatic scrolling - vertical
  console.log("Last Name from 10th Row & 2nd Column :", Name); 

  const Email = await page.locator('tbody tr:nth-child(10) td:nth-child(9)').innerText(); //Automatic scrolling - Horizantal
  console.log("Email from 10th Row & 9th Column :", Email); 

});
