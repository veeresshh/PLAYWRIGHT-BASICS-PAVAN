import { test, expect, Locator } from "@playwright/test"

test("XPath Axes demo", async ({ page }) => {

  await page.goto("https://www.w3schools.com/html/html_tables.asp");

  // 1. Self Axis - Select <td> element that contains "Germany"

  const GermanyCell: Locator = page.locator("//td[text()='Germany']/self::td");
  await expect(GermanyCell).toHaveText('Germany');

  // 2. Parent Axis - Get parent <tr> of the "Germany" cell

  const ParentRow: Locator = page.locator("//td[text()='Germany']/parent::tr")
  await expect(ParentRow).toContainText("Maria Anders");

  // 3. Child Axis - Get all <td> children of the second <tr> in the table

  const SecondRowCells: Locator = page.locator("//table[@id='customers']//tr[2]/child::td"); // returns multiple elements( td's)
  await expect(SecondRowCells).toHaveCount(3);

  // 4. Ancestor Axis - Get ancestor <table> of the "Germany" cell

  const Table: Locator = page.locator("//td[text()='Germany']/ancestor::table")
  await expect(Table).toHaveAttribute('id', 'customers');


  // 5. Descendant Axis - Get all <td> elements under the table

  const AllTds: Locator = page.locator("//table[@id='customers']/descendant::td")
  await expect(AllTds).toHaveCount(18);

  // 6. Following Axis - Get the <td> that comes after "Germany" in document order

  const FollowingCell: Locator = page.locator("//td[normalize-space()='Germany']/following::td[1]");
  await expect(FollowingCell).toHaveText("Centro comercial Moctezuma");

  // 7. Following-Sibling Axis - Get <td>s to the right of "Germany"

  const Rightsiblings: Locator = page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td");
  await expect(Rightsiblings).toHaveCount(1);


  // 8. Preceding Axis - Get the <td> just before "Germany"

  const PrecedingCell: Locator = page.locator("//td[text()='Germany']/preceding::td[1]");
  await expect(PrecedingCell).toHaveText("Maria Anders");

  // 9. Preceding-Sibling Axis - Get <td>s to the left of "Germany"

  const LeftSiblings: Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
  await expect(LeftSiblings).toHaveCount(2);

  await expect(LeftSiblings.nth(0)).toHaveText("Alfreds Futterkiste")
  await expect(LeftSiblings.nth(1)).toHaveText("Maria Anders")
})