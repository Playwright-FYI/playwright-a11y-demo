import { test, expect } from "@playwright/test";

/**
 * Let's make sure we set BASE_URL in the config
 * so that we can use "/" as the default representation
 * for the base URL of our site, and use relative paths
 * for all other URLs.
 */

// TEST SUITE: Basic Accessibility Tests for Production Site
test.describe("Our hosted Site: ", () => {
  test('has base url with heading "Playwright For Accessibility Testing"', async ({
    page,
  }) => {
    await page.goto("/");

    // Expect page  "to contain" this heading
    await page.getByRole("heading", {
      name: "Playwright For Accessibility Testing",
    });
  });

  test('has documentation route with heading "About This Project"', async ({
    page,
  }) => {
    await page.goto("/steps/01-about/1-motivation/");

    // Expect page  "to contain" this heading
    await page.getByRole("heading", { name: "About This Project" });
  });

  test('has jquery route with heading "Welcome to jQuery UI"', async ({
    page,
  }) => {
    await page.goto("/jQuery-UI/");

    // Expect page  "to contain" this heading
    await page.getByRole("heading", { name: "Welcome to jQuery UI!" });
  });

  test('has bootstrap route with heading "Album Example"', async ({ page }) => {
    await page.goto("/bootstrap/album/");

    // Expect page  "to contain" this heading
    await page.getByRole("heading", { name: "Album example" });
  });

  test("has no detectable a11y issues in /jQuery-UI", async ({
    page,
  }, testInfo) => {
    await page.goto("/jQuery-UI/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    await testInfo.attach("accessibility-scan-results", {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: "application/json",
    });

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("has no detectable a11y issues in /jQuery-UI", async ({
    page,
  }, testInfo) => {
    await page.goto("/jQuery-UI/");

    const fs = require("fs");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    await util.promisify(fs.writeFile)(
      `./test-results/jQuery-scan.json`,
      JSON.stringify(accessibilityScanResults, null, 2)
    );

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
