import { test } from '../fixtures/baseTest';

test('Auto Login Fixture Test', async ({
  securePage
}) => {
  await securePage.verifyLoginSuccess();
});