<script setup>
import { computed } from "vue"
import { getStatusLabel, formatWaitTime } from "../utils/format"
import QueueBadge from "./QueueBadge.vue"

const props = defineProps({
  patient: { type: Object, required: true },
  waitTime: { type: Number, default: null }
})

const emit = defineEmits(["select"])

const statusClasses = computed(() => {
  const classes = {
    waiting: "border-blue-300 bg-blue-50",
    "in-progress": "border-green-300 bg-green-50",
    completed: "border-gray-300 bg-gray-50",
    skipped: "border-red-300 bg-red-50"
  }
  return classes[props.patient.status] || classes.waiting
})

function handleClick() {
  emit("select", props.patient)
}
</script>

<template>
  <div
    class="flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
    :class="statusClasses"
    data-testid="patient-card"
    @click="handleClick"
  >
    <QueueBadge :number="patient.number" :status="patient.status" />
    <div class="flex-1">
      <p class="font-medium text-gray-800" data-testid="patient-name">
        {{ patient.name }}
      </p>
      <p class="text-sm text-gray-500" data-testid="patient-status">
        {{ getStatusLabel(patient.status) }}
      </p>
    </div>
    <div v-if="waitTime !== null" class="text-sm text-gray-500">
      {{ formatWaitTime(waitTime) }}
    </div>
  </div>
</template>
