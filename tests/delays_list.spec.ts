import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-drivebc.apps.gold.devops.gov.bc.ca/delays');
  await expect(page.locator('h1')).toContainText('Delays');
  await expect(page.locator('#root')).toContainText('Find out if there are any delays that might impact your journey before you go.');
  await expect(page.getByPlaceholder('Search starting location')).toBeVisible();
  await expect(page.getByPlaceholder('Search destination location')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sort: Severity, Closure to' })).toBeVisible();
  await page.getByRole('button', { name: 'Sort: Severity, Closure to' }).click();
  await expect(page.getByRole('button', { name: 'Severity, Closure to Minor', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Severity, Minor to Closure' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Road name, A–Z' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Road name, Z-A' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Last updated, New to Old' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Last updated, Old to New' })).toBeVisible();
  await expect(page.getByLabel('open filters options')).toBeVisible();
  await page.getByLabel('open filters options').click();
  await expect(page.getByRole('heading', { name: 'List filters' })).toBeVisible();
  await expect(page.getByLabel('close filters options')).toBeVisible();
  await expect(page.locator('p').filter({ hasText: /^Delays$/ })).toBeVisible();
  await expect(page.getByText('Closures')).toBeVisible();
  await expect(page.getByLabel('closures tooltip')).toBeVisible();
  await expect(page.getByText('Major', { exact: true })).toBeVisible();
  await expect(page.getByLabel('major events tooltip')).toBeVisible();
  await expect(page.getByText('Minor', { exact: true })).toBeVisible();
  await expect(page.getByLabel('minor events tooltip')).toBeVisible();
  await expect(page.getByText('Future events')).toBeVisible();
  await expect(page.getByLabel('future events tooltip')).toBeVisible();
  await expect(page.getByText('Conditions and features')).toBeVisible();
  await expect(page.getByText('Highway cameras')).toBeVisible();
  await expect(page.getByLabel('highway cameras tooltip')).toBeVisible();
  await expect(page.getByText('Road conditions')).toBeVisible();
  await expect(page.getByLabel('road conditions tooltip')).toBeVisible();
  await expect(page.getByText('Inland Ferries')).toBeVisible();
  await expect(page.getByLabel('inland ferries tooltip')).toBeVisible();
  await expect(page.getByText('Weather')).toBeVisible();
  await expect(page.getByLabel('weather tooltip')).toBeVisible();
  await expect(page.getByText('Rest stops', { exact: true })).toBeVisible();
  await expect(page.getByLabel('rest stops tooltip')).toBeVisible();
  await expect(page.getByText('Commercial vehicles')).toBeVisible();
  await expect(page.getByText('Commercial vehicle rest stops')).toBeVisible();
  await expect(page.getByLabel('commercial vehicle rest stops', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Advisories' })).toBeVisible();
  await expect(page.getByText('The following advisories are')).toBeVisible();
});