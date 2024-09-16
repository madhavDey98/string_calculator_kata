import { describe, it, expect } from "vitest";
import stringCalculator from "./stringCalculator";

describe("String Calculator", () => {
  it("returns 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("returns the number itself for a single number string", () => {
    expect(stringCalculator("1")).toBe(1);
    expect(stringCalculator("5")).toBe(5);
  });

  it("returns the sum of two numbers", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  it("handles new lines between numbers", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  it("supports custom delimiters", () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });
});
