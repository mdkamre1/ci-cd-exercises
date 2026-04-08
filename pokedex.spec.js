const { test, expect } = require('@playwright/test')

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')

    //wait for pokemon list to load
    await page.waitForSelector('text=ivysaur')

    await expect(page.getByText('ivysaur')).toBeVisible()

    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('can navigate to pokemon page', async ({ page }) => {
    await page.goto('/')

    //wait before clicking
    await page.waitForSelector('text=ivysaur')

    await page.getByText('ivysaur').click()

    // wait for ability
    await page.waitForSelector('text=chlorophyll')

    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})