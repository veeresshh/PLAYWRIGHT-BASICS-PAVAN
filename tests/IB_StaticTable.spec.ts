import { test, expect, Locator } from '@playwright/test';

test("static web table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const Table: Locator = page.locator("table[name='BookTable'] tbody");
    await expect(Table).toBeVisible();

    //1) Count Number of Rows in a Table

    const Rows: Locator = Table.locator("tr"); //returns all the rows including header - Locator Chaining - VVIP
    await expect(Rows).toHaveCount(7);  //7  //approach 1

    const RowCount: number = await Rows.count();
    console.log("Number of rows in a table: ", RowCount);
    expect(RowCount).toBe(7); // appraoch 2


    //2) Count Number of Headers/Columns

    //const  columns:Locator= page.locator("table[name='BookTable'] tbody tr th");

    const Columns: Locator = Rows.locator("th");  // LOCATOR CHAINING
    await expect(Columns).toHaveCount(4); //4  appraoch 1

    const ColumnCount: number = await Columns.count();
    console.log("Number of columns/headers: ", ColumnCount);
    expect(ColumnCount).toBe(4); // appraoch 2


    // 3) Read all data from 2nd row (index 2 means 3rd row including header)

    const SecondRowCells: Locator = Rows.nth(2).locator('td');

    const SecondRowTexts: string[] = await SecondRowCells.allInnerTexts();
    console.log("2nd Row data: ", SecondRowTexts); //[ 'Learn Java', 'Mukesh', 'Java', '500' ]

    await expect(SecondRowCells).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']); //assetion

    console.log("printing 2nd row data......")

    for (let Text of SecondRowTexts) {

        console.log(Text);
    }



    // 4) Read all data from the table (excluding header)

    console.log('Printing all Table Data.......');

    const AllRowData = await Rows.all();  // get all row locators   //all() returns array of locators

    console.log("BookName   Author  subject   price");

    for (let Row of AllRowData.slice(1))   // slice(1) --> skip header row 
    {
        const Columns = await Row.locator('td').allInnerTexts();
        console.log(Columns.join('\t'));
    }



    // 5) Print book names where author is Mukesh
    
    console.log("Books written by Mukesh.......")

    const MukeshBooks: string[] = [];

    for (let Row of AllRowData.slice(1))   // slice(1) --> skip header row 
    {

        const AuthorName = await Row.locator('td').nth(1).innerText();    // Capture Author 
        const BookName = await Row.locator('td').nth(0).innerText();      // Capture Book name 

        if (AuthorName === 'Mukesh') {
            console.log(`${AuthorName} \t ${BookName}`)
            MukeshBooks.push(BookName);
        }

    }
    expect(MukeshBooks).toHaveLength(2); //Assertion



    // 6) Calculate total price of all books

    let TotalPrice: number = 0;

    for (let Row of AllRowData.slice(1))   // slice(1) --> skip header row 
    {
      
        const Price = await Row.locator('td').nth(3).innerText(); // You can use single statement instead of using above 2 statements to get price
        TotalPrice = TotalPrice + parseInt(Price);

    }
    console.log("Total price: ", TotalPrice)

    expect(TotalPrice).toBe(7100); 

})