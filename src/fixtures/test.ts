import { test as base, expect } from '@playwright/test';
import { credentials } from '../data/credentials';
import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';

type QaFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  authenticatedPage: InventoryPage;
};

export const test = base.extend<QaFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.expectLoaded();
    await use(inventoryPage);
  },
});

export { expect };
