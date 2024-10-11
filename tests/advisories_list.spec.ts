import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(`/advisories`);
  await expect(page.locator('h1')).toContainText('Advisories');
  await expect(page.locator('#root')).toContainText('Get the latest critical info impacting travel on a highway or region.');
  await expect(page.locator('#root')).toContainText('REMINDER: This is a beta version of DriveBC.');
  await expect(page.locator('#root')).toContainText('Advisories shared on the beta version are for feedback purposes and possibly not up-to-date. Please continue to refer to the Ministry\'s TranBC site under Current Road Advisories and Information.');
});