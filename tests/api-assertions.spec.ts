import { test, expect } from '@playwright/test';

test('API Assertions Practice', async ({
  request
}) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  const responseBody = await response.json();

  // Status code
  expect(response.status()).toBe(200);

  // Array length
  expect(responseBody.length).toBe(10);

  // Field validation
  expect(responseBody[0].name)
    .toBe('Leanne Graham');

  // Header validation
  expect(response.headers()['content-type'])
    .toContain('application/json');
});