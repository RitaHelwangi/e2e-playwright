import { test, expect } from "@playwright/test";

test.describe("Katalog-vy", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/");
  });

  test("Visar en lista med tillgängliga böcker", async ({ page }) => {
    await expect(
      page.getByText("Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
    ).toBeVisible();
    await expect(
      page.getByText("Kaffekokaren som visste för mycket")
    ).toBeVisible();
    await expect(page.getByText("Min katt är min chef")).toBeVisible();
    await expect(page.getByText("100 sätt att undvika måndagar")).toBeVisible();
    await expect(
      page.getByText("Gräv där du står – och hitta en pizzameny")
    ).toBeVisible();
    await expect(page.getByText("Jag trodde det var tisdag")).toBeVisible();
    await expect(
      page.getByText(
        "Att prata med växter – och vad de egentligen tycker om dig"
      )
    ).toBeVisible();
  });

  test("Favoritmarkerar två böcker och ser dem i Mina böcker", async ({
    page,
  }) => {
    // Favoritmarkera första boken
    await page
      .getByTestId(
        "star-Att prata med växter – och vad de egentligen tycker om dig"
      )
      .click();
    // Favoritmarkera andra boken
    await page
      .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
      .click();
    // Gå till Mina böcker
    await page.getByRole("button", { name: "Mina böcker" }).click();
    // Kontrollera att båda böckerna nu finns i Mina böcker
    await expect(
      page.getByText(
        "Att prata med växter – och vad de egentligen tycker om dig"
      )
    ).toBeVisible();
    await expect(
      page.getByText("Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
    ).toBeVisible();
  });
});
