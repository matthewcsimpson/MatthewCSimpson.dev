import { test, expect } from "@playwright/test";

test("home renders and project details are reachable", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Matthew Simpson" }),
  ).toBeVisible();

  await page
    .getByRole("link", {
      name: "View more about CineLink Embeds for Just Watch",
    })
    .first()
    .click();

  await expect(page).toHaveURL(/\/project\/cinelink-embeds-for-justwatch$/);
  await expect(
    page.getByRole("heading", { name: "Project Overview" }),
  ).toBeVisible();

  const downloadLink = page.getByRole("link", { name: "Download Zip" });
  await expect(downloadLink).toHaveAttribute("download", "");
});
