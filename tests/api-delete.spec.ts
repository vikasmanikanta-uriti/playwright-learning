import { test, expect } from '@playwright/test';

test('DELETE API Test', async ({ request }) => {

  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  console.log(response.status());

  expect(response.status()).toBe(200);
});