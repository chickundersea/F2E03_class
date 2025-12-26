import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import QueueBadge from "../QueueBadge.vue"

describe("QueueBadge", () => {
  describe("號碼顯示", () => {
    it("應該顯示格式化後的號碼（1 -> 001）", () => {
      const wrapper = mount(QueueBadge, {
        props: { number: 1 }
      })
      expect(wrapper.text()).toBe("001")
    })

    it("應該顯示格式化後的號碼（42 -> 042）", () => {
      const wrapper = mount(QueueBadge, {
        props: { number: 42 }
      })
      expect(wrapper.text()).toBe("042")
    })
  })

  describe("狀態樣式", () => {
    it("waiting 狀態應該有藍色背景", () => {
      const wrapper = mount(QueueBadge, {
        props: { number: 1, status: "waiting" }
      })
      expect(wrapper.classes()).toContain("bg-blue-500")
    })

    it("in-progress 狀態應該有綠色背景", () => {
      const wrapper = mount(QueueBadge, {
        props: { number: 1, status: "in-progress" }
      })
      expect(wrapper.classes()).toContain("bg-green-500")
    })

    it("completed 狀態應該有灰色背景", () => {
      const wrapper = mount(QueueBadge, {
        props: { number: 1, status: "completed" }
      })
      expect(wrapper.classes()).toContain("bg-gray-400")
    })

    it("skipped 狀態應該有紅色背景", () => {
      const wrapper = mount(QueueBadge, {
        props: { number: 1, status: "skipped" }
      })
      expect(wrapper.classes()).toContain("bg-red-500")
    })
  })

  describe("尺寸樣式", () => {
    it("預設尺寸應該有中等的 padding", () => {
      const wrapper = mount(QueueBadge, {
        props: { number: 1 }
      })
      expect(wrapper.classes()).toContain("px-3")
      expect(wrapper.classes()).toContain("py-1")
    })

    it("lg 尺寸應該有較大的 padding 和字體", () => {
      const wrapper = mount(QueueBadge, {
        props: { number: 1, size: "lg" }
      })
      expect(wrapper.classes()).toContain("px-4")
      expect(wrapper.classes()).toContain("py-2")
      expect(wrapper.classes()).toContain("text-2xl")
    })
  })
})
