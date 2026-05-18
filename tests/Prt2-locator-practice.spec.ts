import {test, expect} from '@playwright/test'
/*test('Frame Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  await page.frameLocator('#mce_0_ifr')
    .locator('#tinymce')
    .fill('Hello Vikas');
});*/

/*test('Frame Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  const frame = page.frameLocator('#mce_0_ifr');
  const editor = frame.locator('#tinymce');

  await editor.click(); // focus inside editor
  await page.keyboard.type('Hello Vikas');
});*/

/*test('Multiple Window Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const popupPromise = page.waitForEvent('popup');

  await page.getByText('Click Here').click();

  const newPage = await popupPromise;

  await expect(newPage.locator('h3'))
    .toHaveText('New Window');
});*/

/*test('Alert Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
    await dialog.accept();
  });

  await page.getByText('Click for JS Alert').click();

  await expect(page.locator('#result'))
    .toHaveText('You successfully clicked an alert');
});*/

/*test('Confirm Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
    await dialog.dismiss();
  });

  await page.getByText('Click for JS Confirm').click();

  await expect(page.locator('#result'))
    .toContainText('Cancel');
});*/

/*test('Prompt Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
    await dialog.accept('Vikas');
  });

  await page.getByText('Click for JS Prompt').click();

  await expect(page.locator('#result'))
    .toContainText('Vikas');
});*/


/*test('Browser Popup Handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const popupPromise = page.waitForEvent('popup');

  await page.getByText('Click Here').click();

  const popupPage = await popupPromise;

  await expect(popupPage.locator('h3'))
    .toHaveText('New Window');
});*/

test('Web Table Practice', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');

  const rows = await page.locator('#table1 tbody tr').count();
  console.log('Rows =', rows);

  await expect(page.locator('#table1'))
    .toContainText('Smith');
});