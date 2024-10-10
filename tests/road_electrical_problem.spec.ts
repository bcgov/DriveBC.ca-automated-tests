import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-drivebc.apps.gold.devops.gov.bc.ca/road-electrical-problem');
  await expect(page.locator('#root')).toContainText('Back');
  await expect(page.locator('h1')).toContainText('Road electrical problem');
  await expect(page.locator('#root')).toContainText('Report an electrical issue on a highway or bridge. Examples include: overhead signs, street lights, pedestrian lighting, signals out, or signals damaged.');
  await expect(page.locator('#root')).toContainText('Select the area of the province where you have encountered the highway or bridge problem. If your location is known, it is selected and shown on the map.');
  await expect(page.locator('canvas')).toBeVisible();
  await expect(page.getByLabel('my location')).toBeVisible();
  await expect(page.getByLabel('zoom in')).toBeVisible();
  await expect(page.getByLabel('zoom out')).toBeVisible();
});