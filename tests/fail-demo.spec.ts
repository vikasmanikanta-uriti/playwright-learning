import { test, expect } from '@playwright/test';

test('Fail Demo', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle('Wrong Title');
});