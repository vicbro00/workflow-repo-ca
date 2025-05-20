import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

describe("getUsername function", () => {
  beforeEach(() => {
    const mockStorage = {};

    globalThis.localStorage = {
      setItem: (key, value) => {
        mockStorage[key] = value;
      },
      getItem: (key) => mockStorage[key],
      clear: () => {
        for (const key in mockStorage) {
          delete mockStorage[key];
        }
      },
    };

    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Test" };
    localStorage.setItem("user", JSON.stringify(user));

    const result = getUsername();
    expect(result).toBe("Test");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});
