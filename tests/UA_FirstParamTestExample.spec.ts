import { test, expect } from '@playwright/test';

//Testdata

const FirstSearchItems :  string[] = ['laptop', 'Gift card', 'smartphone', 'monitor'];
const SecondSearchItems:  string[] = ['laptop', 'Gift card', 'smartphone', 'monitor'];
const ThirdSearchItems :  string[] = ['laptop', 'Gift card', 'smartphone', 'monitor'];

// Using For-of Loop

for(const FirstItem of FirstSearchItems) 
    
{
  test(`First Search Test for ${FirstItem}`, async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('#small-searchterms').fill(FirstItem);
    await page.locator("input[value='Search']").click();
    
    const Results = page.locator('.product-item');
    await expect(Results.first()).toBeVisible();

  });
};


// Using ForEach Function

SecondSearchItems.forEach((SecondItem)=>{

    test(`Second Search test for ${SecondItem}`,async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/');
            await page.locator('#small-searchterms').fill(SecondItem);  
            await page.locator("input[value='Search']").click();      
            await expect.soft(page.locator('h2 a').nth(0)).toContainText(SecondItem, { ignoreCase: true });  

        });

})


// Using Describe

test.describe("Searching Items", async () => {

    ThirdSearchItems.forEach((Thirditem) => {

        test(`Third Search Test for ${Thirditem}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/');
            await page.locator('#small-searchterms').fill(Thirditem);  
            await page.locator("input[value='Search']").click();     
            await expect.soft(page.locator('h2 a').nth(0)).toContainText(Thirditem, { ignoreCase: true }); 

        });

    })


})






