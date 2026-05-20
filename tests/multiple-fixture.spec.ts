// Multiple Fixture Test - heading

import { test } from '../fixtures/baseTest';

test('Multiple Fixture Test', async ({
  loginPage,
  securePage
}) => {

  await loginPage.login(
    'tomsmith',
    'SuperSecretPassword!'
  );

  await securePage.verifyLoginSuccess();
});