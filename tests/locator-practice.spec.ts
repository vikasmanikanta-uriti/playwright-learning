import { test, expect } from '@playwright/test';

//Locator Practice
/*test('Locator Practice', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Fill username
  await page.locator('#user-name').fill('standard_user');

  // Fill password
  await page.locator('#password').fill('secret_sauce');

  // Click login
  await page.locator('#login-button').click();
});*/

//Assertions Practice
/*test('Assertions Practice', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);

  await expect(page.locator('#login-button')).toBeVisible();

  await expect(page.locator('#user-name')).toBeVisible();

  await expect(page.locator('#password')).toBeVisible();
});*/

//Textbox Practice
/*test('Textbox Practice', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#user-name').clear();
  await page.locator('#user-name').type('standard_user');

  await expect(page.locator('#user-name')).toHaveValue('standard_user');
});*/

/* test('Checkbox Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox = page.locator('input').first();

  await checkbox.check();

  await expect(checkbox).toBeChecked();
});*/

/*test('Dropdown Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  await page.locator('#dropdown').selectOption('1');

  await expect(page.locator('#dropdown')).toHaveValue('1');
});*/

/*test('Calendar Practice', async ({ page }) => {
  await page.goto('https://demoqa.com/date-picker');

  await page.locator('#datePickerMonthYearInput').click();

  await page.locator('.react-datepicker__month-select')
    .selectOption('April');

  await page.locator('.react-datepicker__year-select')
    .selectOption('2026');

  await page.getByRole('gridcell', { name: /April 25th/ }).click();
});*/

/*test('Hover Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');

  await page.locator('.figure').first().hover();
});*/


/*test('Keyboard Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/key_presses');

  await page.locator('#target').click(); // focus textbox

  await page.keyboard.press('Enter'); // actual keyboard press

  //await expect(page.locator('#result')).toContainText('ENTER');
}); */

/*test('File Upload Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.locator('#file-upload')
    .setInputFiles('package.json');

  await page.locator('#file-submit').click();

  await expect(page.getByText('File Uploaded!'))
    .toBeVisible();
});*/


/*test('File Upload Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.locator('#file-upload')
    .setInputFiles('tests/TestData/sample.pdf');

  await page.locator('#file-submit').click();

  await expect(page.getByText('File Uploaded!'))
    .toBeVisible();
});*/

test('File Download Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  const downloadPromise = page.waitForEvent('download');

  await page.getByText('some-file.txt').click();

  const download = await downloadPromise;

  await download.saveAs('TestData/downloaded-file.txt');
});
