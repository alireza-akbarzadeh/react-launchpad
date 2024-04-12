import { isRouteErrorResponse } from "react-router-dom";
import { it, describe, expect } from "vitest";

describe("isRouteErrorResponse", () => {
  it("sgnals error response", () => {
    expect(isRouteErrorResponse(new Error("error"))).toBe(true);
  });
});
