import { test } from '../fixtures/baseTest';

test('Fixture Login Test', async ({ loginPage }) => {
  await loginPage.open();

  await loginPage.login(
    'tomsmith',
    'SuperSecretPassword!'
  );
});