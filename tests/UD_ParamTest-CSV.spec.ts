// npm install csv-parse

import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

//Reading Data From Csv

const CSVPath = 'TestData/Data.csv';
const FileContent = fs.readFileSync(CSVPath, 'utf-8');

// Parse CSV and type it

interface TestData {
                     Email: string;
                     Password: string;
                     Validity: string;
                   }

const Records = parse(FileContent, {

  columns: true,
  skip_empty_lines: true, 

}) as TestData[];


test.describe('Login Data Driven Test', async () => {

    for (const Data of Records) {

        test(`Login Test With Email: "${Data.Email}" and Password: "${Data.Password}"`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login');

            // Fill login form
            await page.locator('#Email').fill(Data.Email);
            await page.locator('#Password').fill(Data.Password);
            await page.locator('input[value="Log in"]').click();

            if (Data.Validity.toLowerCase() === 'valid') {
                
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

