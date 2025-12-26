# Vue 元件測試教學

零開始練習 Vue 元件測試，從最簡單的單元測試到 E2E 測試。

## TDD 流程

### 紅燈 → 綠燈 → 重構

TDD（Test-Driven Development）的核心流程：

1. 紅燈：先寫測試，測試會失敗
2. 綠燈：寫最少的程式碼讓測試通過
3. 重構：改善程式碼品質，保持測試通過

### 實際練習

每個練習都有 A/B 兩個分支：

- **A 分支**：測試已寫好，程式碼待實作（紅燈）
- **B 分支**：實作完成的解答（綠燈）

| 練習內容        | 紅燈（測試）  | 測試結果       | 綠燈（解答）  | 測試結果       |
| --------------- | ------------- | -------------- | ------------- | -------------- |
| add（熱身）     | `task-00A`    | 3 failed       | `task-00B`    | 3 passed       |
| format.js       | `task-01A`    | 13 failed      | `task-01B`    | 16 passed      |
| QueueBadge.vue  | `task-02A`    | 6 failed       | `task-02B`    | 24 passed      |
| CallButton.vue  | `task-03A`    | 3 failed       | `task-03B`    | 31 passed      |
| PatientCard.vue | `task-04A`    | 3 failed       | `task-04B`    | 37 passed      |
| E2E 測試        | `task-05A`    | 2 failed       | `task-05B`    | 3 passed       |

### 學習流程

```bash
# 1. 先從熱身開始
git checkout task-00A
npm run test:run          # 看到 3 failed

# 2. 實作 add 函數
# 編輯 src/utils/math.js

# 3. 卡關時看解答
git checkout task-00B

# 4. 完成後進入下一關
git checkout task-01A
```

## 指令速查

| 指令               | 說明                                                      |
| ------------------ | --------------------------------------------------------- |
| `npm run dev`      | 啟動開發伺服器，瀏覽器開啟 http://localhost:5173 查看元件 |
| `npm run test:run` | 執行單元測試一次                                          |
| `npm run test`     | 監聽模式，檔案變更時自動重跑測試                          |
| `npm run test:e2e` | 執行 E2E 測試（會自動啟動開發伺服器）                     |
| `npm run coverage` | 執行測試並產生覆蓋率報告                                  |

## 單元測試基礎

### 單元測試？

單元測試是針對程式碼中最小單位（函數、元件）進行測試。目的是確保每個小單位都能正確運作。

### 第一個測試：純函數 (task-01A/B)

先從最簡單的開始——測試一個純函數。

```bash
git checkout task-01A
```

打開 `src/utils/__tests__/format.spec.js`，你會看到測試：

```javascript
import { formatQueueNumber } from "../format"

describe("formatQueueNumber", () => {
  it("應該把 1 格式化成 001", () => {
    expect(formatQueueNumber(1)).toBe("001")
  })

  it("應該把 42 格式化成 042", () => {
    expect(formatQueueNumber(42)).toBe("042")
  })
})
```

再打開 `src/utils/format.js`，你會看到待實作的函數：

```javascript
export function formatQueueNumber(num) {
  // TODO: 實作這個函數
  return ""
}
```

你的任務是實作這個函數，讓測試通過。

### 測試的三個步驟：AAA 模式

大部分測試都遵循 AAA 模式：

1. **Arrange（準備）**：設定測試資料
2. **Act（執行）**：呼叫要測試的函數
3. **Assert（驗證）**：檢查結果是否符合預期

```javascript
it("應該把 1 格式化成 001", () => {
  // Arrange - 這個例子很簡單，沒有需要準備的
  const input = 1

  // Act - 執行函數
  const result = formatQueueNumber(input)

  // Assert - 驗證結果
  expect(result).toBe("001")
})
```

### 練習：實作 formatWaitTime

現在換你試試！在 task-01A 分支中，`formatWaitTime` 函數還沒實作，測試已經寫好了：

```javascript
describe("formatWaitTime", () => {
  it("0 分鐘應該顯示「即將叫號」", () => {
    expect(formatWaitTime(0)).toBe("即將叫號")
  })

  it("5 分鐘應該顯示「約 5 分鐘」", () => {
    expect(formatWaitTime(5)).toBe("約 5 分鐘")
  })
  // ...更多測試案例
})
```

執行 `npm run test:run`，你會看到 13 個失敗的測試。

打開 `src/utils/format.js`，實作三個函數讓測試通過。

卡關時可以參考解答：`git checkout task-01B`

## Vue 元件測試

### 測試元件的基本概念

測試 Vue 元件需要用到 `@vue/test-utils`，它提供 `mount` 函數來「掛載」元件。

```javascript
import { mount } from "@vue/test-utils"
import QueueBadge from "../QueueBadge.vue"

const wrapper = mount(QueueBadge, {
  props: { number: 5 }
})
```

`wrapper` 是一個包裝器，讓你可以：

- 查詢 DOM 元素
- 讀取文字內容
- 檢查 CSS class
- 模擬使用者互動

### 測試 Props 渲染

最基本的元件測試：傳入 props，檢查渲染結果。

```javascript
// src/components/__tests__/QueueBadge.spec.js
it("應該顯示格式化後的號碼", () => {
  const wrapper = mount(QueueBadge, {
    props: { number: 5 }
  })
  expect(wrapper.text()).toBe("005")
})
```

### 測試 CSS Class

用 `wrapper.classes()` 檢查元件的 CSS class：

```javascript
it("waiting 狀態應該有藍色背景", () => {
  const wrapper = mount(QueueBadge, {
    props: { number: 1, status: "waiting" }
  })
  expect(wrapper.classes()).toContain("bg-blue-500")
})
```

### 測試使用者互動

用 `trigger()` 模擬使用者操作：

```javascript
it("點擊按鈕應該觸發 call 事件", async () => {
  const wrapper = mount(CallButton)

  await wrapper.find("button").trigger("click")

  expect(wrapper.emitted("call")).toBeTruthy()
})
```

注意：`trigger()` 是非同步的，要加 `async/await`。

### 測試 emit 事件

用 `wrapper.emitted()` 檢查元件發出的事件：

```javascript
it("select 事件應該帶上病患資料", async () => {
  const patient = { id: "1", name: "王小明", number: 1, status: "waiting" }
  const wrapper = mount(PatientCard, {
    props: { patient }
  })

  await wrapper.find('[data-testid="patient-card"]').trigger("click")

  // emitted() 回傳陣列的陣列
  // emitted("select")[0] 是第一次觸發時的參數陣列
  expect(wrapper.emitted("select")[0]).toEqual([patient])
})
```

### 使用 data-testid

在元件中加入 `data-testid` 屬性，讓測試更穩定：

```html
<div data-testid="patient-card">...</div>
```

```javascript
wrapper.find('[data-testid="patient-card"]')
```

這樣即使 HTML 結構改變，測試也不會壞掉。

---

## E2E 測試

### 什麼是 E2E 測試？

E2E（End-to-End）測試模擬真實使用者的操作流程。它會：

1. 啟動瀏覽器
2. 開啟你的網站
3. 執行操作（點擊、輸入）
4. 檢查結果

### Playwright 基礎

我們用 Playwright 來寫 E2E 測試。

```javascript
// e2e/queue-system.spec.js
import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("頁面標題應該包含「診間叫號」", async ({ page }) => {
  await expect(page).toHaveTitle(/診間叫號/)
})
```

### 選取元素

Playwright 用 `page.locator()` 選取元素：

```javascript
// 用 CSS 選擇器
const button = page.locator("button")

// 用 data-testid（推薦）
const card = page.locator('[data-testid="patient-card"]')

// 選第一個符合的元素
const firstCard = page.locator('[data-testid="patient-card"]').first()
```

### 常用的斷言

```javascript
// 檢查元素可見
await expect(element).toBeVisible()

// 檢查文字內容
await expect(element).toHaveText("完整文字")
await expect(element).toContainText("部分文字")

// 檢查頁面標題
await expect(page).toHaveTitle(/標題/)
```

### 模擬操作

```javascript
// 點擊
await button.click()

// 輸入文字
await input.fill("測試文字")

// 等待元素出現
await expect(element).toBeVisible()
```

### 單元測試 vs E2E 測試

| 特性 | 單元測試      | E2E 測試     |
| ---- | ------------- | ------------ |
| 速度 | 快（毫秒）    | 慢（秒）     |
| 範圍 | 單一函數/元件 | 整個應用程式 |
| 環境 | 模擬 DOM      | 真實瀏覽器   |
| 用途 | 驗證邏輯正確  | 驗證流程正確 |

一般建議：

- 單元測試：多寫，涵蓋各種邊界條件
- E2E 測試：少寫，只測主要流程

---

## 常見問題

### Q：測試要寫多細？

測試行為，不測實作細節。問自己：「如果我重構程式碼，這個測試會壞掉嗎？」

好的測試：

```javascript
expect(wrapper.text()).toContain("等候中")
```

不好的測試：

```javascript
expect(wrapper.vm.internalState).toBe(true)
```

### Q：什麼時候用單元測試，什麼時候用 E2E？

- 單元測試：測試邏輯、計算、轉換
- E2E 測試：測試使用者流程、頁面導航

### Q：測試覆蓋率要多少？

不要追求數字。重要的是測試有價值的部分：

- 商業邏輯
- 容易出錯的地方
- 修過的 bug（確保不會再犯）
