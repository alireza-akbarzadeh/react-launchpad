import { isRouteErrorResponse } from "react-router-dom";
import { it, describe, expect } from "vitest";

describe("isRouteErrorResponse", () => {
  it("sgnals error response", () => {
    const valuse = { name: "mosh" };
    expect(valuse).toEqual({ name: "mosh" });
  });
});
