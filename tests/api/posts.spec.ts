import { test, expect } from '@playwright/test';

const apiBaseURL = process.env.API_BASE_URL ?? 'https://jsonplaceholder.typicode.com';

test.describe('Posts API contract', () => {
  test('GET /posts/1 returns a valid post payload', async ({ request }) => {
    const response = await request.get(`${apiBaseURL}/posts/1`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body: unknown = await response.json();
    expect(body).toMatchObject({
      userId: expect.any(Number),
      id: 1,
      title: expect.any(String),
      body: expect.any(String),
    });
  });

  test('GET for a missing post returns 404', async ({ request }) => {
    const response = await request.get(`${apiBaseURL}/posts/999999`);
    expect(response.status()).toBe(404);
  });
});
