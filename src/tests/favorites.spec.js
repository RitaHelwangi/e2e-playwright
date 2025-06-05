import { test, expect } from "@playwright/test";

test.describe("Mina böcker-vy", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/");
		await page.getByRole("button", { name: "Mina böcker" }).click();
	});
	
	test("kan markera en bok som favorit", async ({ page }) => {
		await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/");
		await page.getByTestId("star-Kaffekokaren som visste för mycket").click();
		
		await expect(
			page.getByTestId(
				"star-Kaffekokaren som visste för mycket"
			)
		).toBeVisible();
	});
});