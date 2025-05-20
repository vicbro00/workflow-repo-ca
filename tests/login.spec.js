import { test, expect } from "@playwright/test";
import { login } from "../js/api/auth/login.js";

// Imported from .env file
const validUser = {
  email: process.env.TEST_USER_EMAIL,
  password: process.env.TEST_USER_PASSWORD,
};

test.describe("API login function", () => {
  test("should login successfully with valid credentials", async () => {
    // Login function returns with valid user credentials
    const response = await login(validUser);

    // Response contains a token
    expect(response).toHaveProperty("accessToken");
    expect(typeof response.accessToken).toBe("string");
  });

  test("should fail login with wrong password", async () => {
    const invalidUser = {
      email: process.env.TEST_USER_EMAIL,
      password: "wrongpassword",
    };
    // Login throws an error for invalid credentials
    await expect(login(invalidUser)).rejects.toThrow(
      /Invalid email or password/,
    );
  });
});

test.describe("Login page UI", () => {
  test("should display error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    await page.fill(
      'input[name="email"]',
      process.env.TEST_USER_EMAIL || "test@example.com",
    );
    await page.fill('input[name="password"]', "wrongpassword");

    await page.click('button[type="submit"]');

    await expect(page.locator("#message-container")).toBeVisible();
    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
