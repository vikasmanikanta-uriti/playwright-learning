import { Page, Locator, expect } from '@playwright/test';

export class SecurePage {
  readonly page: Page;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessage = page.locator('#flash');
  }

  async verifyLoginSuccess() {
    await expect(this.successMessage)
      .toContainText('You logged into a secure area!');
  }
}
