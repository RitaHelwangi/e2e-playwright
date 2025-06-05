import { test, expect } from "@playwright/test";

test.describe("Lägga till bok-vy", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/");
  });

  test("Visar formulär för att lägga till bok", async ({ page }) => {
    await page.getByRole("button", { name: "Lägg till bok" }).click();
    await expect(page.getByTestId("add-input-title")).toBeVisible();
    await expect(page.getByTestId("add-input-author")).toBeVisible();
  });
});
