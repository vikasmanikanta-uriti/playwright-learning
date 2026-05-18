import { test, expect } from '@playwright/test';

test('PUT API Test', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 1
      }
    }
  );

  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.status()).toBe(200);

  expect(responseBody.title)
    .toBe('Updated Title');
});