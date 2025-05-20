import { test, expect } from "@playwright/test";

test("navigate to venue details page", async ({ page }) => {
  await page.route("**/api/venues", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        { id: 1, name: "Mock Venue 1", url: "/venue/index.html" },
      ]),
    }),
  );

  await page.goto("/");

  await page.waitForSelector("#venue-container a");

  await Promise.all([page.click("#venue-container a:first-child")]);

  await page.waitForFunction(() => {
    const heading = document.querySelector("h1");
    return heading && heading.textContent.includes("Venue details");
  });

  const headingText = await page.locator("h1").textContent();
  expect(headingText).toContain("Venue details");
});
