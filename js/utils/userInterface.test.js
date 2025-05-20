import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath function", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  it('returns true for root path "/" when currentPath is "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it('returns true for root path "/" when currentPath is "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    expect(isActivePath("/products", "/products/shoes")).toBe(true);
    expect(isActivePath("/blog", "/blog/post-123")).toBe(true);
  });

  it("returns false when paths do not match or include", () => {
    expect(isActivePath("/contact", "/about")).toBe(false);
    expect(isActivePath("/login", "/logout")).toBe(false);
    expect(isActivePath("/products", "/services")).toBe(false);
  });
});
