import { test, expect } from '@playwright/test'

test('home renders and contains key sections', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: /projects/i })).toBeVisible()
  await expect(page.locator('#projects')).toBeVisible()
  await expect(page.locator('#skills')).toBeVisible()
  await expect(page.locator('#experience')).toBeVisible()
})