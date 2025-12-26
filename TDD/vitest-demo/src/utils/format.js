/**
 * 將數字格式化為三位數的字串
 * 例如：1 -> "001", 42 -> "042"
 */
export function formatQueueNumber(num) {
  return num.toString().padStart(3, "0")
}

/**
 * 取得狀態對應的中文標籤
 * waiting -> "等候中"
 * in-progress -> "看診中"
 * completed -> "已完成"
 * skipped -> "過號"
 */
export function getStatusLabel(status) {
  const labels = {
    waiting: "等候中",
    "in-progress": "看診中",
    completed: "已完成",
    skipped: "過號"
  }
  return labels[status]
}

/**
 * 將等候時間格式化為易讀的字串
 * 0 分鐘 -> "即將叫號"
 * 1-59 分鐘 -> "約 X 分鐘"
 * 60+ 分鐘 -> "約 X 小時"
 */
export function formatWaitTime(minutes) {
  if (minutes === 0) {
    return "即將叫號"
  }
  if (minutes < 60) {
    return `約 ${minutes} 分鐘`
  }
  const hours = minutes / 60
  return `約 ${hours} 小時`
}
