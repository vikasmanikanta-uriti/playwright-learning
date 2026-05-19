import { test } from '../fixtures/baseTest';
import { LoginPage } from '../pages/LoginPage';
test('Fixture Login Test', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(
    'tomsmith',
    'SuperSecretPassword!'
  );
});