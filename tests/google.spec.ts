import { test } from '@playwright/test';

test('Open Google', async ({ page }) => {
  await page.goto('https://google.com');
});