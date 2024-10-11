import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/bulletins');
  await expect(page.locator('h1')).toContainText('Bulletins');
  await expect(page.locator('#root')).toContainText('Stay safe and informed with seasonal travel updates.');
});