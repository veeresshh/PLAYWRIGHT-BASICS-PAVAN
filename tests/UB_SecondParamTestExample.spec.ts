import { test, expect } from '@playwright/test';

const LoginTestData: string[][] = [
                                     ["laura.taylor1234@example.com", "test123", "valid"],
                                     ["invaliduser@example.com", "test321", "invalid"],
                                     ["validuser@example.com", "testxyz", "invalid"],
                                     ["", "", "invalid"],
                                  ];


test.describe('Login Data Driven Test', async () => {

    for (const [Email, Password, Validity] of LoginTestData) {

        test(`Login Test for ${Email} and ${Password}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login');

            // Fill Login Form

            await page.locator('#Email').fill(Email);
            await page.locator('#Password').fill(Password);
            await page.locator('input[value="Log in"]').click();

            if (Validity.toLowerCase() === 'valid') {

                // Assert Logout Link is visible - Indicates Successful Login

                const LogoutLink = page.locator('a[href="/logout"]');
                await expect(LogoutLink).toBeVisible({ timeout: 5000 });

            } else {

                // Assert Error Message is Visible

                const ErrorMessage = page.locator('.validation-summary-errors');
                await expect(ErrorMessage).toBeVisible({ timeout: 5000 });


                // Assert User is Still on the Login Page

                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
            }

        })
    }

}
)
