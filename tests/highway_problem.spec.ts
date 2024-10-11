import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/highway-problem');
  await expect(page.locator('#root')).toContainText('Back');
  await expect(page.locator('h1')).toContainText('Highway or bridge problem');
  await expect(page.locator('#root')).toContainText('Report highway or bridge problems. Examples include: pot holes, road damage, bridge damage, signage damage, drainage issues, fallen trees, fallen rocks, or animal carcasses.');
  await expect(page.locator('#root')).toContainText('Select the area of the province where you have encountered the highway or bridge problem. If your location is known, it is selected and shown on the map.');
  await expect(page.locator('canvas')).toBeVisible();
  await expect(page.getByLabel('my location')).toBeVisible();
  await expect(page.getByLabel('zoom in')).toBeVisible();
  await expect(page.getByLabel('zoom out')).toBeVisible();
});