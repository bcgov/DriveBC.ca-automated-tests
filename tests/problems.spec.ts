import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/problems');
  await expect(page.locator('h1')).toContainText('Report a problem');

  // "Website problem or suggestion" card verifications:
  await expect(page.getByText('Website problem or suggestionReport website feedback, suggestions, or bugs')).toBeVisible();
  await expect(page.locator('.circle-icon').first()).toBeVisible();
  await expect(page.locator('.circle-icon > .svg-inline--fa').first()).toBeVisible();
  await expect(page.locator('#root')).toContainText('Website problem or suggestion');
  await expect(page.locator('#root')).toContainText('Report website feedback, suggestions, or bugs related to the new DriveBC website.');
  await expect(page.locator('#root')).toContainText('This feature is currently not available in Beta. Alternatively, you may use the Feedback link in the website header.');

  // "Highway or bridge problem" card verifications:
  await expect(page.getByRole('link', { name: 'Highway or bridge problem' })).toBeVisible();
  await expect(page.locator('#root')).toContainText('Highway or bridge problem');
  await expect(page.locator('#root')).toContainText('Report highway or bridge problems. Examples include:');
  await expect(page.locator('#root')).toContainText('Pot holes');
  await expect(page.locator('#root')).toContainText('Road, bridge, and signage damage');
  await expect(page.locator('#root')).toContainText('Drainage issues');
  await expect(page.locator('#root')).toContainText('Fallen rocks and trees');
  await expect(page.locator('#root')).toContainText('Animal carcasses');

  // "Road electrical problem" card verifications:
  await expect(page.getByRole('link', { name: 'Road electrical problem' })).toBeVisible();
  await expect(page.locator('#root')).toContainText('Road electrical problem');
  await expect(page.locator('#root')).toContainText('Report electrical issues on a highway or bridge. Examples include:');
  await expect(page.locator('#root')).toContainText('Overhead signs');
  await expect(page.locator('#root')).toContainText('Street lights');
  await expect(page.locator('#root')).toContainText('Pedestrian lighting');
  await expect(page.locator('#root')).toContainText('Signal outages and damages');

  // "Report downed power line" card verifications:
  await expect(page.getByRole('link', { name: 'Report downed power line BC' })).toBeVisible();
  await expect(page.locator('#root')).toContainText('Report downed power line');
  await expect(page.locator('#root')).toContainText('BC Hydro');
  await expect(page.locator('#root')).toContainText('1-888-769-3766');

  // "Report a wildfire BC Wildfire" card verifications:
  await expect(page.getByRole('link', { name: 'Report a wildfire BC Wildfire' })).toBeVisible();
  await expect(page.locator('#root')).toContainText('Report a wildfire');
  await expect(page.locator('#root')).toContainText('BC Wildfire Management Branch');
  await expect(page.locator('#root')).toContainText('1-800-663-5555');

  // "Report a fuel or chemical spill" card verifications:
  await expect(page.getByRole('link', { name: 'Report a fuel or chemical' })).toBeVisible();
  await expect(page.locator('#root')).toContainText('Report a fuel or chemical spill');
  await expect(page.locator('#root')).toContainText('Emergency Management BC');
  await expect(page.locator('#root')).toContainText('1-800-663-3456');
});