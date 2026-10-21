import { test, expect } from '../../src/fixtures/test';
import { credentials } from '../../src/data/credentials';

test.describe('Authentication', () => {
  test('standard user can sign in and see the inventory @smoke', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    await inventoryPage.expectLoaded();
  });

  test('locked-out user receives a clear error', async ({ loginPage }) => {
    await loginPage.login(credentials.lockedOutUser.username, credentials.lockedOutUser.password);
    await expect(loginPage.errorMessage).toContainText('locked out');
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('empty credentials are rejected', async ({ loginPage }) => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });
});
