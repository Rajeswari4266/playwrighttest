import { test, expect, Locator } from '@playwright/test';
test.only('verify text box', async ({ page }) => {
 
  await page.goto('https://testautomationpractice.blogspot.com/');
  const name: Locator = page.locator('#name');
  await expect(name).toBeVisible()
  await name.fill('Playwright')
  const inputText = await name.inputValue();
  expect(inputText).toBe('Playwright')
  // await page.waitForTimeout(10000)
 
  name.getAttribute('maxlength')
 
});