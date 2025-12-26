<script setup>
import { ref } from "vue"
import QueueBadge from "./components/QueueBadge.vue"
import PatientCard from "./components/PatientCard.vue"
import CallButton from "./components/CallButton.vue"

const currentNumber = ref(3)
const isLoading = ref(false)

const patients = [
  { id: "1", number: 1, name: "王小明", status: "completed" },
  { id: "2", number: 2, name: "李小華", status: "completed" },
  { id: "3", number: 3, name: "張大偉", status: "in-progress" },
  { id: "4", number: 4, name: "陳美玲", status: "waiting" },
  { id: "5", number: 5, name: "林志強", status: "waiting" }
]

function handleCall() {
  isLoading.value = true
  setTimeout(() => {
    currentNumber.value++
    isLoading.value = false
  }, 1000)
}

function handleSelect(patient) {
  console.log("選擇病患:", patient)
}

function getStatusLabel(status) {
  const labels = {
    waiting: "等候中",
    "in-progress": "看診中",
    completed: "已完成",
    skipped: "過號"
  }
  return labels[status]
}
</script>

<template>
  <div class="min-h-screen p-8 bg-gray-100">
    <div class="max-w-2xl mx-auto">
      <h1 class="mb-8 text-3xl font-bold text-center text-gray-800">
        診間叫號系統 - 元件展示
      </h1>

      <!-- QueueBadge 展示 -->
      <section class="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 class="mb-4 text-xl font-semibold">QueueBadge 元件</h2>
        <div class="flex flex-wrap gap-4">
          <div class="text-center">
            <QueueBadge :number="1" status="completed" />
            <p class="mt-2 text-sm text-gray-500">已完成</p>
          </div>
          <div class="text-center">
            <QueueBadge :number="3" status="in-progress" />
            <p class="mt-2 text-sm text-gray-500">看診中</p>
          </div>
          <div class="text-center">
            <QueueBadge :number="5" status="waiting" />
            <p class="mt-2 text-sm text-gray-500">等候中</p>
          </div>
          <div class="text-center">
            <QueueBadge :number="7" status="skipped" />
            <p class="mt-2 text-sm text-gray-500">過號</p>
          </div>
        </div>
      </section>

      <!-- PatientCard 展示 -->
      <section class="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 class="mb-4 text-xl font-semibold">PatientCard 元件</h2>
        <div class="space-y-3">
          <PatientCard
            v-for="patient in patients"
            :key="patient.id"
            :patient="patient"
            @select="handleSelect"
          />
        </div>
      </section>

      <!-- CallButton 展示 -->
      <section class="p-6 bg-white rounded-lg shadow">
        <h2 class="mb-4 text-xl font-semibold">CallButton 元件</h2>
        <div class="flex items-center gap-4">
          <div class="text-center">
            <p class="mb-2 text-gray-500">目前號碼</p>
            <div data-testid="current-number">
              <QueueBadge
                :number="currentNumber"
                status="in-progress"
                size="lg"
              />
            </div>
          </div>
          <CallButton :loading="isLoading" @call="handleCall">
            下一位
          </CallButton>
        </div>
      </section>
    </div>
  </div>
</template>
