# Vue 元件測試 - Starter Kit

## 指令說明

| 指令               | 說明                                                      |
| ------------------ | --------------------------------------------------------- |
| `npm run dev`      | 啟動開發伺服器，瀏覽器開啟 http://localhost:5173 查看元件 |
| `npm run test:run` | 執行單元測試一次                                          |
| `npm run test`     | 監聽模式，檔案變更時自動重跑測試                          |
| `npm run test:e2e` | 執行 E2E 測試（會自動啟動開發伺服器）                     |
| `npm run coverage` | 執行測試並產生覆蓋率報告                                  |

## 第一次跑測試

### 單元測試

執行 `npm run test:run` 後，你會看到：

```
Tests  4 failed | 8 passed | 26 todo (38)
```

- **4 failed** → `formatWaitTime` 函數還沒實作
- **8 passed** → 範例測試（讓你參考怎麼寫）
- **26 todo** → 你要完成的測試

### E2E 測試

執行 `npm run test:e2e` 後，你會看到：

```
3 failed (3)
```

三個測試都會失敗，因為：

1. 頁面標題不是「診間叫號」
2. 病患卡片沒有顯示等候時間
3. 畫面上沒有標記目前看診號碼

## 練習流程

### Step 1：讓紅燈變綠燈

實作 `src/utils/format.ts` 中的 `formatWaitTime` 函數。

規則：

- 0 分鐘 → `"即將叫號"`
- 1-59 分鐘 → `"約 X 分鐘"`
- 60 分鐘 → `"約 1 小時"`
- 90 分鐘 → `"約 1.5 小時"`

完成後跑測試，應該看到：

```
Tests  12 passed | 26 todo (38)
```

### Step 2：把 todo 變成真正的測試

每個測試檔案中都有 `it.todo(...)` 標記的測試，把它們改成真正的測試。

例如，把：

```typescript
it.todo("應該把 42 顯示為 042")
```

改成：

```typescript
it("應該把 42 顯示為 042", () => {
  const wrapper = mount(QueueBadge, {
    props: { number: 42 }
  })
  expect(wrapper.text()).toBe("042")
})
```

### Step 3：全部完成（單元測試）

單元測試目標：

```
Tests  38 passed (38)
```

---

## E2E 測試練習

### E2E Step 1：修改頁面標題

修改 `index.html`，把 title 改成包含「診間叫號」。

### E2E Step 2：顯示等候時間

在 `PatientCard.vue` 加入等候時間顯示：

1. 先實作 `formatWaitTime` 函數（單元測試 Step 1）
2. 在 PatientCard 加入 `data-testid="wait-time"` 的元素

### E2E Step 3：標記目前看診號碼

在 `App.vue` 的 QueueBadge 加入 `data-testid="current-number"`。

### E2E 全部完成

E2E 測試目標：

```
3 passed (3)
```

## 專案結構

```
├── e2e/                        # E2E 測試
│   └── queue-system.spec.ts
├── src/
│   ├── components/
│   │   ├── QueueBadge.vue      # 號碼徽章
│   │   ├── PatientCard.vue     # 病患卡片
│   │   ├── CallButton.vue      # 叫號按鈕
│   │   └── __tests__/          # 元件測試（你要完成）
│   ├── utils/
│   │   ├── format.ts           # 工具函數（你要實作 formatWaitTime）
│   │   └── __tests__/
│   └── types/
│       └── index.ts
└── playwright.config.ts        # Playwright 設定
```

## 常用的測試 API

### Vitest 基本語法

```typescript
describe("群組名稱", () => {
  it("測試案例", () => {
    expect(value).toBe(expected)
  })
})
```

### 常用 matcher

```typescript
expect(value).toBe("hello") // 嚴格相等
expect(obj).toEqual({ a: 1 }) // 深度相等
expect(text).toContain("關鍵字") // 包含
expect(arr).toHaveLength(3) // 陣列長度
expect(value).toBeTruthy() // 真值
expect(value).toBeFalsy() // 假值
```

### Vue Test Utils

```typescript
import { mount } from "@vue/test-utils"

// 掛載元件
const wrapper = mount(MyComponent, {
  props: { foo: "bar" }
})

// 查詢
wrapper.find("button")
wrapper.find('[data-testid="my-id"]')

// 取值
wrapper.text()
wrapper.classes()
wrapper.attributes("disabled")

// 互動
await wrapper.trigger("click")

// 檢查 emit
expect(wrapper.emitted("eventName")).toBeTruthy()
```

### Playwright (E2E 測試)

```typescript
import { test, expect } from "@playwright/test"

// 開啟頁面
test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

// 測試案例
test("測試名稱", async ({ page }) => {
  // 選取元素
  const button = page.locator("button")
  const element = page.locator('[data-testid="my-id"]')

  // 檢查可見性
  await expect(element).toBeVisible()

  // 檢查文字
  await expect(element).toHaveText("預期文字")
  await expect(element).toContainText("部分文字")

  // 檢查頁面標題
  await expect(page).toHaveTitle(/標題/)

  // 點擊
  await button.click()
})
```

## 提示

每個測試檔案的開頭都有「範例」，參考它們來完成 todo 測試。
