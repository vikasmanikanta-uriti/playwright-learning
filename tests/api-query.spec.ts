import { test, expect } from '@playwright/test';

test('GET API with Query Params', async ({
  request
}) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/comments',
    {
      params: {
        postId: 1
      }
    }
  );

  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.status()).toBe(200);

  expect(responseBody[0].postId).toBe(1);
});