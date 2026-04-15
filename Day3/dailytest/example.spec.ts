import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PEP/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
 await page.click('text=Login');
 
 await page.fill('input[type="email"]', 'rburra@prolifics.com');
 await page.click('input[type="submit"]');
  await page.fill('input[name="passwd"]', 'May@2026');
   await page.click('input[type="submit"]');
  // Expects page to have a heading with the name of Installation.
})