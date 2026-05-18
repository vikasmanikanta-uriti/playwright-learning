import { test, expect } from '@playwright/test';

test('POST API Test', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright',
        body: 'API Testing',
        userId: 1
      }
    }
  );

  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.status()).toBe(201);

  expect(responseBody.title)
    .toBe('Playwright');
});