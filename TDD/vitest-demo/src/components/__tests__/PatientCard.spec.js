import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import PatientCard from "../PatientCard.vue"

describe("PatientCard", () => {
  const mockPatient = {
    id: "1",
    number: 5,
    name: "王小明",
    status: "waiting"
  }

  describe("基本渲染", () => {
    it("應該顯示病患姓名", () => {
      const wrapper = mount(PatientCard, {
        props: { patient: mockPatient }
      })
      expect(wrapper.text()).toContain("王小明")
    })

    it("應該顯示等候時間", () => {
      const wrapper = mount(PatientCard, {
        props: { patient: mockPatient, waitTime: 5 }
      })
      expect(wrapper.text()).toContain("約 5 分鐘")
    })
  })

  describe("狀態顯示", () => {
    it("waiting 狀態應該顯示「等候中」", () => {
      const wrapper = mount(PatientCard, {
        props: { patient: { ...mockPatient, status: "waiting" } }
      })
      expect(wrapper.text()).toContain("等候中")
    })

    it("in-progress 狀態應該顯示「看診中」", () => {
      const wrapper = mount(PatientCard, {
        props: { patient: { ...mockPatient, status: "in-progress" } }
      })
      expect(wrapper.text()).toContain("看診中")
    })
  })

  describe("點擊事件", () => {
    it("點擊卡片應該觸發 select 事件", async () => {
      const wrapper = mount(PatientCard, {
        props: { patient: mockPatient }
      })
      await wrapper.find('[data-testid="patient-card"]').trigger("click")
      expect(wrapper.emitted("select")).toBeTruthy()
    })

    it("select 事件應該帶上病患資料", async () => {
      const wrapper = mount(PatientCard, {
        props: { patient: mockPatient }
      })
      await wrapper.find('[data-testid="patient-card"]').trigger("click")
      expect(wrapper.emitted("select")[0]).toEqual([mockPatient])
    })
  })
})
