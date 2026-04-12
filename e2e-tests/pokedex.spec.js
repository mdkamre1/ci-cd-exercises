import { test, expect } from '@playwright/test'

test('front page can be opened', async ({ page }) => {
  await page.goto('http://localhost:8080')

  // just check page loads
  await expect(page.locator('body')).toBeVisible()
})

test('can navigate somewhere', async ({ page }) => {
  await page.goto('http://localhost:8080')

  // click any link if exists
  const links = page.locator('a')

  if (await links.count() > 0) {
    await links.first().click()
  }

  // page still works
  await expect(page.locator('body')).toBeVisible()
})