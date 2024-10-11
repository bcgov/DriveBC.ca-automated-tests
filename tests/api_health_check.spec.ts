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
});

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
});

test('bulletins API health check', async ({ request }) => {
  const response = await request.get(`/api/cms/bulletins/?`, {
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
});

test('webcams API health check', async ({ request }) => {
  const response = await request.get(`/api/webcams/?`, {
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
});

test('events API health check', async ({ request }) => {
  const response = await request.get(`/api/events/?`, {
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
});

test('CMS ferries API health check', async ({ request }) => {
  const response = await request.get(`/api/cms/ferries/?`, {
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
});

test('current weather API health check', async ({ request }) => {
  const response = await request.get(`/api/weather/current?`, {
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
});

test('regional weather API health check', async ({ request }) => {
  const response = await request.get(`/api/weather/regional?`, {
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
});

test('rest stop API health check', async ({ request }) => {
  const response = await request.get(`/api/reststops/?`, {
    headers: {
      'cacheBypass': 'true'
    }
  });
  await expect(response).toBeOK();
});