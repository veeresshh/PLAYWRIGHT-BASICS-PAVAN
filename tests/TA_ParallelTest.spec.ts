import { test,expect } from '@playwright/test';

//test.describe.configure({mode:'serial'})
//test.describe.configure({mode:'parallel'})

test.describe('FirstGroup', () => {

    test('FirstTest', async ({ page }) => {
        console.log(" this is Test1 ......")
     });

    test('SecondTest', async ({ page }) => {
        console.log(" this is Test2 ......")
     });

    test('ThirdTest', async ({ page }) => {
        console.log(" this is Test3 ......")
    });

    test('FourthTest', async ({ page }) => {
        console.log(" this is Test4 ......")
    });


    test('FifthTest', async ({ page }) => {
        console.log(" this is Test5 ......")
    });


});