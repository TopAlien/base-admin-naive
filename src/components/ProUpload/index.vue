<script setup>
  import { fileNamePass, limitFileSize, uploadRequest } from '@/components/ProUpload/upload.js'

  const fileList = defineModel('list', {
    type: Array,
    default: () => []
  })

  const beforeDownload = (file) => {
    if (file.status !== 'finished' || !file.url) {
      $message.error('此文件不存在或不支持下载！')
      return false
    }
  }

  const beforeUpload = ({ file, fileList }) => {
    if (fileNamePass(file)) {
      return false
    }

    if (limitFileSize(file.file, 2)) {
      return false
    }
  }

  const updateStatus = (index, status = 'uploading', percentage = 30) => {
    fileList.value[index].status = status
    fileList.value[index].percentage = percentage
  }

  const customRequest = async (options) => {
    const index = fileList.value.findIndex((item) => item.id === options.file.id)
    try {
      updateStatus(index)
      const res = await uploadRequest(options)
      fileList.value.splice(index, 1, res)
      $message.success('上传成功')
    } catch {
      updateStatus(index, 'error', 0)
      $message.error('上传失败')
    }
  }
</script>

<template>
  <n-upload
    accept=".png,.jpg,.jpeg,.webp,.gif"
    list-type="image-card"
    show-download-button
    @download="beforeDownload"
    :max="1"
    :multiple="$attrs.max > 1"
    v-bind="$attrs"
    v-model:file-list="fileList"
    :custom-request="customRequest"
    @before-upload="beforeUpload"
  >
    点击上传
  </n-upload>
</template>
