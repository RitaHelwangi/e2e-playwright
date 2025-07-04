import { test, expect } from "@playwright/test";

test.describe("Mina böcker-vy", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/");
		await page.getByRole("button", { name: "Mina böcker" }).click();
	});
	
	test("visar en lista över mina favoritmarkerade böcker", async ({ page }) => {
		await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/");
		await page.getByTestId("star-Kaffekokaren som visste för mycket").click();
		await page.getByRole("button", { name: "Mina böcker" }).click();
		
		await expect(
			page.getByText("Kaffekokaren som visste för mycket")
		).toBeVisible();
	});
	
	test("visar att favoritlistan är tom när inga böcker är markerade", async ({
		page,
	}) => {
		await expect(
			page.getByText("Kaffekokaren som visste för mycket")
		).not.toBeVisible();
		
		await expect(page.getByText("När du valt, kommer dina favoritböcker att visas här")).toBeVisible();
	});
});