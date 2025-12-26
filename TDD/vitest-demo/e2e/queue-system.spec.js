import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("頁面標題應該包含「診間叫號」", async ({ page }) => {
  await expect(page).toHaveTitle(/診間叫號/)
})

test("應該顯示「等候中」的病患卡片", async ({ page }) => {
  const waitingCards = page.locator('[data-testid="patient-card"]', {
    hasText: "等候中"
  })
  await expect(waitingCards.first()).toBeVisible()
})

test("點擊「下一位」按鈕後號碼應該增加", async ({ page }) => {
  // 找到目前的號碼
  const currentBadge = page.locator('[data-testid="current-number"]')
  const initialText = await currentBadge.textContent()

  // 點擊下一位按鈕
  await page.locator('[data-testid="call-button"]').click()

  // 等待按鈕變回正常狀態
  await expect(page.locator('[data-testid="call-button"]')).not.toContainText(
    "處理中"
  )

  // 確認號碼增加了
  const newText = await currentBadge.textContent()
  expect(parseInt(newText)).toBeGreaterThan(parseInt(initialText))
})
