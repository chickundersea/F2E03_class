import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import CallButton from "../CallButton.vue"

describe("CallButton", () => {
  describe("基本渲染", () => {
    it("應該顯示 slot 內容", () => {
      const wrapper = mount(CallButton, {
        slots: { default: "下一位" }
      })
      expect(wrapper.text()).toContain("下一位")
    })

    it("應該有 button 元素", () => {
      const wrapper = mount(CallButton)
      expect(wrapper.find("button").exists()).toBe(true)
    })
  })

  describe("點擊事件", () => {
    it("點擊按鈕應該觸發 call 事件", async () => {
      const wrapper = mount(CallButton)
      await wrapper.find("button").trigger("click")
      expect(wrapper.emitted("call")).toBeTruthy()
    })

    it("loading 時點擊不應該觸發 call 事件", async () => {
      const wrapper = mount(CallButton, {
        props: { loading: true }
      })
      await wrapper.find("button").trigger("click")
      expect(wrapper.emitted("call")).toBeFalsy()
    })
  })

  describe("loading 狀態", () => {
    it("loading 時按鈕應該被禁用", () => {
      const wrapper = mount(CallButton, {
        props: { loading: true }
      })
      expect(wrapper.find("button").attributes("disabled")).toBeDefined()
    })

    it("loading 時應該顯示 loading 文字", () => {
      const wrapper = mount(CallButton, {
        props: { loading: true }
      })
      expect(wrapper.text()).toContain("處理中")
    })

    it("非 loading 時按鈕不應該被禁用", () => {
      const wrapper = mount(CallButton, {
        props: { loading: false }
      })
      expect(wrapper.find("button").attributes("disabled")).toBeUndefined()
    })
  })
})
