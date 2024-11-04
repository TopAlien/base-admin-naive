<script setup>
  import { ref } from 'vue'
  import test2 from './test2.vue'
  import { waitConfirmModal, invokeModal } from '@/utils/modal'

  const switchVal = ref(false)
  const changeSwitch = async (val) => {
    await waitConfirmModal({ type: 'warning', content: '111' })

    switchVal.value = val
  }

  const showModal = async () => {
    const data = await invokeModal({ render: test2, id: 1 })
    console.log('🚀 ~ showModal ~ data:', data)
  }
</script>

<template>
  <card
    title="Test1"
    has-padding
  >
    <h1>test1</h1>
    <n-switch
      :value="switchVal"
      @update:value="changeSwitch"
    />

    <n-button
      type="primary"
      @click="showModal"
    >
      弹窗
    </n-button>
  </card>
</template>
