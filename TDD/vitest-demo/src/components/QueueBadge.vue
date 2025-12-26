<script setup>
import { computed } from "vue"
import { formatQueueNumber } from "../utils/format"

const props = defineProps({
  number: { type: Number, required: true },
  status: { type: String, default: "waiting" },
  size: { type: String, default: "md" }
})

const statusClasses = computed(() => {
  const classes = {
    waiting: "bg-blue-500 text-white",
    "in-progress": "bg-green-500 text-white",
    completed: "bg-gray-400 text-white",
    skipped: "bg-red-500 text-white"
  }
  return classes[props.status] || classes.waiting
})

const sizeClasses = computed(() => {
  const classes = {
    md: "px-3 py-1 text-base",
    lg: "px-4 py-2 text-2xl"
  }
  return classes[props.size] || classes.md
})
</script>

<template>
  <span
    class="inline-block font-mono rounded-lg"
    :class="[statusClasses, sizeClasses]"
    data-testid="queue-badge"
  >
    {{ formatQueueNumber(number) }}
  </span>
</template>
