import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Government of British Columbia' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Map' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Cameras' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Delays' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Advisories' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Bulletins' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'What\'s new', exact: true })).toBeVisible();
  await expect(page.getByText('Sign in')).toBeVisible();
});