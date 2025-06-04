import { test, expect } from "@playwright/test";

// test('has title "Läslistan"', async ({ page }) => {
//   await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/");
//   await expect(page).toHaveTitle(/Läslistan/);
// });

test.describe("Navigering mellan vyer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/");
  });

  test("Navigerar från Katalog till Lägg till bok och sedan till Mina böcker visar rätt vyer", async ({
    page,
  }) => {
    // Click  behövs inte här då det börjar med katalog
    await expect(page.getByText("Flora Tistel")).toBeVisible();

    await page.getByRole("button", { name: "Lägg till bok" }).click();
    await expect(page.getByTestId("add-input-title")).toBeVisible();

    await page.getByRole("button", { name: "Mina böcker" }).click();
    await expect(page.getByText(/Dina favoriter/i)).toBeVisible();
  });
});
