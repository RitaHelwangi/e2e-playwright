import { test, expect } from "@playwright/test";

test('has title "Läslistan"', async ({ page }) => {
  await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/");
  await expect(page).toHaveTitle(/Läslistan/);
});
