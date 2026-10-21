import { test, expect } from '../../src/fixtures/test';
import { checkoutCustomer } from '../../src/data/credentials';

test.describe('Shopping journey', () => {
  test('inventory can be sorted from low to high price', async ({ authenticatedPage }) => {
    const before = await authenticatedPage.productPrices();
    await authenticatedPage.sort.selectOption('lohi');
    const after = await authenticatedPage.productPrices();

    expect(before).toHaveLength(6);
    expect(after).toEqual([...after].sort((a, b) => a - b));
  });

  test('customer can add a product and verify the cart contents', async ({ authenticatedPage, page }) => {
    await authenticatedPage.addProduct('Sauce Labs Backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await authenticatedPage.cartLink.click();
    await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });

  test('checkout blocks submission when required customer data is missing', async ({ authenticatedPage, page }) => {
    await authenticatedPage.addProduct('Sauce Labs Backpack');
    await authenticatedPage.cartLink.click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
  });

  test('customer can complete checkout and see the order confirmation @smoke', async ({ authenticatedPage, page }) => {
    await authenticatedPage.addProduct('Sauce Labs Backpack');
    await authenticatedPage.cartLink.click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByPlaceholder('First Name').fill(checkoutCustomer.firstName);
    await page.getByPlaceholder('Last Name').fill(checkoutCustomer.lastName);
    await page.getByPlaceholder('Zip/Postal Code').fill(checkoutCustomer.postalCode);
    await page.getByRole('button', { name: 'Continue' }).click();

    await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
    await expect(page.locator('.summary_subtotal_label')).toHaveText('Item total: $29.99');
    await page.getByRole('button', { name: 'Finish' }).click();
    await expect(page.getByText('Thank you for your order!', { exact: true })).toBeVisible();
    await expect(page.getByText('Your order has been dispatched', { exact: false })).toBeVisible();
  });
});
