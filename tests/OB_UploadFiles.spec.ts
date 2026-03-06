import { test, expect } from '@playwright/test';


test('Single File Upload', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('#singleFileInput').setInputFiles('uploads/Test1.txt');

  await page.locator('button:has-text("Upload Single File")').click();

  const FirstSuccessfullMesage = await page.locator('#singleFileStatus').textContent();

  expect(FirstSuccessfullMesage).toContain('Test1.txt');

  console.log('Single file upload is successful...');
  await page.waitForTimeout(5000);

});

test('Multiple Files Upload', async ({ page }) => {
  
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('#multipleFilesInput').setInputFiles(['uploads/Test1.txt', 'uploads/Test2.txt']);

  await page.locator('button:has-text("Upload Multiple Files")').click();

  const SecondSuccessfullMesage = await page.locator('#multipleFilesStatus').textContent();

  expect(SecondSuccessfullMesage).toContain('Test1.txt');
  expect(SecondSuccessfullMesage).toContain('Test2.txt');

  console.log(' Multiple files uploaded successfully...');

  await page.waitForTimeout(5000);

});

