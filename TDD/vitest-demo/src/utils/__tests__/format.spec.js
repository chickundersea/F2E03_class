import { describe, it, expect } from "vitest"
import { formatQueueNumber, getStatusLabel, formatWaitTime } from "../format"

describe("formatQueueNumber", () => {
  it("應該把 1 格式化成 001", () => {
    expect(formatQueueNumber(1)).toBe("001")
  })

  it("應該把 42 格式化成 042", () => {
    expect(formatQueueNumber(42)).toBe("042")
  })

  it("應該把 100 格式化成 100", () => {
    expect(formatQueueNumber(100)).toBe("100")
  })

  it("應該把 999 格式化成 999", () => {
    expect(formatQueueNumber(999)).toBe("999")
  })
})

describe("getStatusLabel", () => {
  it("waiting 應該回傳「等候中」", () => {
    expect(getStatusLabel("waiting")).toBe("等候中")
  })

  it("in-progress 應該回傳「看診中」", () => {
    expect(getStatusLabel("in-progress")).toBe("看診中")
  })

  it("completed 應該回傳「已完成」", () => {
    expect(getStatusLabel("completed")).toBe("已完成")
  })

  it("skipped 應該回傳「過號」", () => {
    expect(getStatusLabel("skipped")).toBe("過號")
  })
})

describe("formatWaitTime", () => {
  it("0 分鐘應該顯示「即將叫號」", () => {
    expect(formatWaitTime(0)).toBe("即將叫號")
  })

  it("5 分鐘應該顯示「約 5 分鐘」", () => {
    expect(formatWaitTime(5)).toBe("約 5 分鐘")
  })

  it("30 分鐘應該顯示「約 30 分鐘」", () => {
    expect(formatWaitTime(30)).toBe("約 30 分鐘")
  })

  it("59 分鐘應該顯示「約 59 分鐘」", () => {
    expect(formatWaitTime(59)).toBe("約 59 分鐘")
  })

  it("60 分鐘應該顯示「約 1 小時」", () => {
    expect(formatWaitTime(60)).toBe("約 1 小時")
  })
})
