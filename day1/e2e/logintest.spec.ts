
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { InventoryPage } from '../pages/inventorypage';
import { users } from '../utils/testdata';

test.describe('Login page test', () => {
  test.only('valid user can log in and see inventory', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
  
    await login.login(users.valid.username, users.valid.password);
    

    const inventory = new InventoryPage(page);
    await inventory.assertLoaded();

    await login.assertUrlContains('saucedemo.com');
  });

  test(' invalid user sees an error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.invalid.username, users.invalid.password);
    await login.assertErrorContains('Epic sadface');
  });
});
