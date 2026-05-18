// verify return new SecurePage
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Advanced POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  const securePage = await loginPage.login(
    'tomsmith',
    'SuperSecretPassword!'
  );

  await securePage.verifyLoginSuccess();
});


//verify navigate to success message
/*import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Advanced POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  const securePage = await loginPage.login(
    'tomsmith',
    'SuperSecretPassword!'
  );

  await securePage.verifyLoginSuccess();
}); */

// verify login success
/*import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Professional Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(
    'tomsmith',
    'SuperSecretPassword!'
  );
  await loginPage.verifyLoginSuccess();

});*/


/*import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login using Professional POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    'tomsmith',
    'SuperSecretPassword!'
  );
});*/



/* import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test('Login using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.enterUsername('tomsmith');
  await loginPage.enterPassword('SuperSecretPassword!');
  await loginPage.clickLogin();
});*/