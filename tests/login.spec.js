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
