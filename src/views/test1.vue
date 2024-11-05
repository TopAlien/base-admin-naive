<script setup>
  import { ref } from 'vue'
  import test2 from './test2.vue'
  import ProUpload from '@/components/ProUpload/index.vue'
  import { waitConfirmModal, invokeModal } from '@/utils/modal'
  import { fillFileList } from '@/components/ProUpload/upload.js'

  const switchVal = ref(false)
  const changeSwitch = async (val) => {
    await waitConfirmModal({ type: 'warning', content: '111' })

    switchVal.value = val
  }

  const showModal = async () => {
    const data = await invokeModal({ render: test2, id: 1 })
    console.log('🚀 ~ showModal ~ data:', data)
  }

  const imgList = ref(
    fillFileList([
      {
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      },
      {
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }
    ])
  )

  const imgString = ref(
    fillFileList([
      'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    ])
  )

  const confirm = () => {
    console.log('🚀 ~ imgList.value:', imgList.value)
    console.log('🚀 ~ imgString.value:', imgString.value)
  }
</script>

<template>
  <card
    title="Test1"
    has-padding
  >
    <h1>test1</h1>
    <ProUpload v-model:list="imgList" />
    <n-button
      type="primary"
      @click="confirm"
    >
      提交
    </n-button>
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
