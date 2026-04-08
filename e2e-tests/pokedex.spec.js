const { test, expect } = require('@playwright/test')

test('front page can be opened', async ({ page }) => {
  await page.goto('http://localhost:8080')

  await page.waitForLoadState('networkidle')

  await expect(page.locator('body')).toBeVisible()
})

test('can navigate to pokemon page', async ({ page }) => {
  await page.goto('http://localhost:8080')

  await page.waitForLoadState('networkidle')

  const link = page.locator('a')

  if (await link.first().isVisible()) {
    await link.first().click()
    await expect(page.locator('body')).toBeVisible()
  }
})