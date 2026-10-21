import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly items: Locator;
  readonly sort: Locator;
  readonly cartLink: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByText('Products', { exact: true });
    this.items = page.locator('.inventory_item');
    this.sort = page.locator('[data-test="product-sort-container"]');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.title).toBeVisible();
    await expect(this.items).toHaveCount(6);
  }

  async addProduct(name: string): Promise<void> {
    const item = this.items.filter({ hasText: name });
    await expect(item).toHaveCount(1);
    await item.getByRole('button', { name: 'Add to cart' }).click();
  }

  async productPrices(): Promise<number[]> {
    const labels = await this.page.locator('.inventory_item_price').allTextContents();
    return labels.map((label) => Number(label.replace('$', '')));
  }
}
