import { test, expect } from '@playwright/test';

test('session API health check', async ({ request }, testInfo) => {
  const response = await request.get(`/api/session`, {
    headers: {
      'cacheBypass': 'true',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Pragma': 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    }
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(response.body()).not.toBeNull();

  // User isn't logged in, so the value should be null
  const jsonData = await response.json();
  expect(jsonData.username).toBeNull();
});

// https://test-drivebc.apps.gold.devops.gov.bc.ca/api/cms/advisories/
test('advisories API health check', async ({ request }) => {
  const response = await request.get(`/api/cms/advisories/?`, {
    headers: {
      'cacheBypass': 'true',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Pragma': 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    }
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(response.body()).not.toBeNull();
});

test('bulletins API health check', async ({ request }) => {
  const response = await request.get(`/api/cms/bulletins/`, {
    headers: {
      'cacheBypass': 'true',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Pragma': 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    }
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(response.body()).not.toBeNull();
});

test('webcams API health check', async ({ request }) => {
  const response = await request.get(`/api/webcams/`, {
    headers: {
      'cacheBypass': 'true',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Pragma': 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    }
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(response.body()).not.toBeNull();
});

test('events API health check', async ({ request }) => {
  const response = await request.get(`/api/events/`, {
    headers: {
      'cacheBypass': 'true',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Pragma': 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    }
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(response.body()).not.toBeNull();
});

test('CMS ferries API health check', async ({ request }) => {
  const response = await request.get(`/api/cms/ferries/`, {
    headers: {
      'cacheBypass': 'true',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Pragma': 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    }
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(response.body()).not.toBeNull();
});

test('current weather API health check', async ({ request }) => {
  const response = await request.get(`/api/weather/current`, {
    headers: {
      'cacheBypass': 'true',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Pragma': 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    }
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(response.body()).not.toBeNull();
});

test('regional weather API health check', async ({ request }) => {
  const response = await request.get(`/api/weather/regional`, {
    headers: {
      'cacheBypass': 'true',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Pragma': 'no-cache',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    }
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(response.body()).not.toBeNull();
});

test('rest stop API health check', async ({ request }) => {
  const response = await request.get(`/api/reststops/?`, {
    headers: {
      'cacheBypass': 'true'
    }
  });
  await expect(response).toBeOK();
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  expect(response.body()).not.toBeNull();
});