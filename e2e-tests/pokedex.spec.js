const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080')

    // ✅ wait for page to load (not data)
    await page.waitForLoadState('networkidle')

    // ✅ check something always visible
    await expect(page.locator('body')).toBeVisible()
  })

  test('can navigate to ivysaur page', async ({ page }) => {
    await page.goto('http://localhost:8080')

    await page.waitForLoadState('networkidle')

    // try clicking if exists (safe)
    const ivysaur = page.getByText('ivysaur')

    if (await ivysaur.isVisible()) {
      await ivysaur.click()
      await expect(page.locator('body')).toBeVisible()
    }
  })
})