<script setup>
const props = defineProps({
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits(["call"])

function handleClick() {
  if (!props.loading && !props.disabled) {
    emit("call")
  }
}
</script>

<template>
  <button
    type="button"
    class="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="loading || disabled"
    data-testid="call-button"
    @click="handleClick"
  >
    <template v-if="loading">處理中...</template>
    <template v-else><slot></slot></template>
  </button>
</template>
