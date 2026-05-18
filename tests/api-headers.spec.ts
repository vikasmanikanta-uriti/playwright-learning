import { test, expect } from '@playwright/test';

test('Validate Response Headers', async ({
  request
}) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  const headers = response.headers();

  console.log(headers);

  expect(headers['content-type'])
    .toContain('application/json');
});