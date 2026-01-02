<template>
  <button class="action-button" @click="onClick">
    報名
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '報名',
  },
});

const emit = defineEmits(['click']);

const onClick = () => {
  emit('click');
};
</script>

<style scoped>
.action-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #1ea7fd;
  padding: 10px 16px;
  font-size: 14px;
}
</style>