//validate response body
import { test, expect } from '@playwright/test';

test('GET API Test', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.status()).toBe(200);

  expect(responseBody.name)
    .toBe('Leanne Graham');
});



// responce check
 /*import { test, expect } from '@playwright/test';

test('GET API Test', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  console.log(await response.json());

  expect(response.status()).toBe(200);
});*/