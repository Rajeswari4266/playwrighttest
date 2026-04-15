// @ts-check
import { test, expect } from '@playwright/test';

test('Day1 test runing my script', 
  async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.waitForTimeout(6000);
  // Create a locator.
await page.getByRole('link', { name: 'Get started' }).click();
await page.waitForTimeout(3000);

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
