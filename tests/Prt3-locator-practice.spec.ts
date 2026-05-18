import { test, expect } from '@playwright/test';

/*test('Dynamic Row Finding Practice', async ({ page }) => {
  // Open website
  await page.goto('https://the-internet.herokuapp.com/tables');

  // Find row containing Bach
  const row = page.locator('#table1 tbody tr', {
    hasText: 'Bach'
  });

  // Verify row exists
  await expect(row).toBeVisible();

  // Read row text
  const text = await row.textContent();

  // Print in terminal
  console.log('Row text = ', text);
});*/

/*test('Click Edit in Matching Row', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');

  const row = page.locator('#table1 tbody tr', {
    hasText: 'Bach'
  });

  await row.getByText('edit').click();
});

import { test, expect } from '@playwright/test';*/

/*test('Dynamic Element Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  await page.getByText('Start').click();

  await expect(page.locator('#finish'))
    .toHaveText('Hello World!');
});*/


/*test('Loader Handling Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');

  await page.getByText('Start').click();

  // wait for loader to disappear
  await expect(page.locator('#loading')).toBeHidden();

  // validate loaded text
  await expect(page.locator('#finish'))
    .toHaveText('Hello World!');
});*/


/*test('Search Table Practice', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  // search employee
  await page.locator('#searchBox').fill('Cierra');

  // validate filtered row
  await expect(page.locator('.rt-tbody'))
    .toContainText('Cierra');
});*/


/*test('Search Table Practice', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  // wait for search box
  await page.locator('#searchBox').waitFor();

  // search
  await page.locator('#searchBox').fill('Cierra');

  // verify filtered row
  await expect(page.getByText('Cierra'))
    .toBeVisible();
});*/


/*test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
});

test('Check heading', async ({ page }) => {
  await expect(page.locator('h2'))
    .toHaveText('Login Page');
});

test('Check login button visible', async ({ page }) => {
  await expect(page.locator('button'))
    .toBeVisible();
});*/

/*
test.afterEach(async () => {
  console.log('Cleanup completed');
});

test('One', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
});

test('Two', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
});*/



/*test.beforeAll(async () => {
  console.log('Setup completed');
});

test('One', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
});

test('Two', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
});*/


test.describe('Login Tests', () => {
  test('Valid login', async ({ page }) => {
    console.log('Valid login');
  });

  test('Invalid login', async ({ page }) => {
    console.log('Invalid login');
  });
});

test.describe('Profile Tests', () => {
  test('Update profile', async ({ page }) => {
    console.log('Update profile');
  });
});