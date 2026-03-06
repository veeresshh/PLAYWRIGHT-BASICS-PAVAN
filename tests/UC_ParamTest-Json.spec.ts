import { test, expect } from '@playwright/test';
import fs from 'fs';

// Reading Data From Json

const JsonPath = "TestData/Data.json";
const LoginTestData: any = JSON.parse(fs.readFileSync(JsonPath, 'utf-8'));

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
