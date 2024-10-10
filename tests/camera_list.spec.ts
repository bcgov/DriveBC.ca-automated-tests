import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-drivebc.apps.gold.devops.gov.bc.ca/cameras');
  await expect(page.locator('h1')).toContainText('Cameras');
  await expect(page.getByPlaceholder('Search starting location')).toBeVisible();
  await expect(page.getByPlaceholder('Search destination location')).toBeVisible();
  await expect(page.getByPlaceholder('Search by camera name')).toBeVisible();
  await page.getByLabel('showFilter filters options').click();
  await expect(page.getByText('No Filters selected')).toBeVisible();
  await expect(page.locator('span').filter({ hasText: /^Highway 1$/ })).toBeVisible();
  await expect(page.locator('h4')).toContainText('Advisories');
  await expect(page.locator('#root')).toContainText('The following advisories are in effect on your route:');
});