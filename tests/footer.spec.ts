import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/advisories');
  await expect(page.getByText('The B.C. Public Service')).toBeVisible();
  await expect(page.locator('#root')).toContainText('The B.C. Public Service acknowledges the territories of First Nations around B.C. and is grateful to carry out our work on these lands. We acknowledge the rights, interests, priorities, and concerns of all Indigenous Peoples - First Nations, Métis, and Inuit - respecting and acknowledging their distinct cultures, histories, rights, laws, and governments.');
  await expect(page.getByRole('img', { name: 'Government of B.C.' })).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('BC Highways Conditions toll-free in North America: 1-800-550-4997 including Telephone Device for the Deaf (TDD) support.');
  await expect(page.getByLabel('X Twitter')).toBeVisible();
  await expect(page.getByLabel('Instagram')).toBeVisible();
  await expect(page.getByLabel('Linkedin')).toBeVisible();
  await expect(page.getByText('More Info', { exact: true })).toContainText('More Info');
  await expect(page.getByRole('link', { name: 'Report a problem' }).nth(1)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Disclaimer' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Privacy' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Accessibility' })).toBeVisible();
  await expect(page.getByRole('contentinfo')).toContainText('© 2025 Government of British Columbia');
});