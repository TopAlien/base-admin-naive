<script setup>
  import { nextTick, ref } from 'vue'
  import { saveAs } from 'file-saver'
  import { fileNamePass, limitFileSize, uploadRequest } from '@/components/pro-upload/upload.js'
  import { previewMedia } from '@/utils/modal.js'
  import { isVideo } from '@/utils/index.js'

  const fileList = defineModel('list', {
    type: Array,
    default: () => []
  })

  const beforeDownload = (file) => {
    if (file.status !== 'finished' || !file.url) {
      $message.error('此文件不存在或不支持下载！')
      return false
    }

    if (isVideo(file.url)) {
      saveAs(file.url, file.name)
      return false
    }
  }

  const beforeUpload = ({ file, fileList }) => {
    if (fileNamePass(file)) {
      return false
    }

    if (limitFileSize(file.file, 20)) {
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

  const imgRef = ref(null)
  const previewUrl = ref('')
  const preview = (file) => {
    previewUrl.value = file.url
    if (isVideo(file.url)) {
      previewMedia({ src: file.url, cover: file.thumbnailUrl, type: 'video' })
    } else {
      nextTick(() => {
        imgRef.value.click()
      })
    }
  }
</script>

<template>
  <div>
    <n-upload
      accept=".png,.jpg,.jpeg,.webp,.gif"
      list-type="image-card"
      show-download-button
      :max="1"
      :multiple="$attrs.max > 1"
      v-bind="$attrs"
      v-model:file-list="fileList"
      :custom-request="customRequest"
      @before-upload="beforeUpload"
      @download="beforeDownload"
      @preview="preview"
    >
      点击上传
    </n-upload>
    <span class="Upload_tip">{{ $attrs.tip }}</span>
  </div>

  <n-image
    ref="imgRef"
    :src="previewUrl"
    style="width: 0; height: 0"
  />
</template>

<style scoped>
  .Upload_tip {
    color: #777777;
    font-size: 13px;
  }
</style>
