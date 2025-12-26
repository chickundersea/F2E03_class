import { describe, it, expect } from "vitest"
import { add } from "../math"

describe("add", () => {
  it("1 + 2 應該等於 3", () => {
    expect(add(1, 2)).toBe(3)
  })

  it("0 + 0 應該等於 0", () => {
    expect(add(0, 0)).toBe(0)
  })

  it("-1 + 1 應該等於 0", () => {
    expect(add(-1, 1)).toBe(0)
  })
})
