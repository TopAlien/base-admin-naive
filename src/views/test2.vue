<script setup>
  const props = defineProps({
    id: {
      type: Number,
      default: 0
    }
  })

  console.log('🚀 ~ props:', props)
  const emit = defineEmits(['close', 'confirm'])
</script>
<template>
  <card title="Test2">
    <h1>test2</h1>
  </card>
  <n-button @click="emit('close')">取消</n-button>
  <n-button
    type="primary"
    @click="emit('confirm', { a: 1, b: 2, name: 'ealien' })"
  >
    确定
  </n-button>
</template>
