// npm install xlsx

import { test, expect } from '@playwright/test';

import * as XLSX from 'xlsx';

const ExcelPath = "TestData/Data.xlsx";
const Workbook = XLSX.readFile(ExcelPath);
const SheetNames = Workbook.SheetNames[0];
const Worksheet = Workbook.Sheets[SheetNames];

// Convert Sheet into Json

const LoginTestData: any = XLSX.utils.sheet_to_json(Worksheet);
console.log(LoginTestData);

// Main Test

test.describe('Login Data Driven Test', async()=> {

    for (const { Email, Password, Validity } of LoginTestData) {
        
            test(`Login Test With Email: "${Email}" and password: "${Password}"`, async ({ page }) => {

                await page.goto('https://demowebshop.tricentis.com/login');

             
                await page.locator('#Email').fill(Email);
                await page.locator('#Password').fill(Password);
                await page.locator('input[value="Log in"]').click();

                if (Validity.toLowerCase() === 'valid') {
                  
                    const LogoutLink = page.locator('a[href="/logout"]');
                    await expect(LogoutLink).toBeVisible({ timeout: 5000 });

                } else {
                   
                    const ErrorMessage = page.locator('.validation-summary-errors');
                    await expect(ErrorMessage).toBeVisible({ timeout: 5000 });

                   
                    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
                }
            });
        }



});