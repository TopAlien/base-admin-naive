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
        thumbnailUrl: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        url: 'https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4'
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
