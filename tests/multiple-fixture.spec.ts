import { test } from '../fixtures/baseTest';

test('Multiple Fixture Test', async ({
  loginPage,
  securePage
}) => {
  await loginPage.open();

  await loginPage.login(
    'tomsmith',
    'SuperSecretPassword!'
  );

  await securePage.verifyLoginSuccess();
});