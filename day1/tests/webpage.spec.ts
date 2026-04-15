import test, { expect, Locator } from "@playwright/test";

test ('verify text box', async ({ page }) => {
 
  await page.goto('https://testautomationpractice.blogspot.com/');
  const name: Locator = page.locator('#name');
  
  await expect(name).toBeVisible()
  await name.fill('Playwright')
  const inputText = await name.inputValue();
  expect(inputText).toBe('Playwright')
  await page.waitForTimeout(10000)
 
  name.getAttribute('maxlength')
 
});

test.only('checkbox', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  //const sundayCheckBox: Locator = page.getByRole('checkbox' , {name:'Sunday', exact: true})
   const username: Locator = page.locator('#name')
   await username.fill('rburra')
   const email: Locator = page.locator('#email')
   await email.fill('mail2me.raji14@gmail.com')
   
     await page.waitForTimeout(3000)
  
const gender: Locator = page.locator('#male');
await gender.click();
  await page.waitForTimeout(3000)
  const dropdown: Locator = page.locator('select#country')
   dropdown.click()
  dropdown.selectOption("India");
  const colour: Locator = page.locator('select#colors') 
colour.selectOption("white"); 
const calender: Locator = page.locator('#datepicker')
calender.click()
await page.waitForTimeout(3000)

const Next: Locator = page.locator("[title='Next']");
await Next.click()
await page.waitForTimeout(10000)
const datepic: Locator=page.locator("[data-date='20']");
await datepic.click()

await expect(datepic).toBeVisible()
await page.waitForTimeout(3000)

// const name: Locator = page.locator('input[value="sunday"]');
//   await name.check();
//     await page.waitForTimeout(5000)

    //  await expect(name).toBeChecked();
 }
);

