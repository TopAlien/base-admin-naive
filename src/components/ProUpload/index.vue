<script setup>
  import { nextTick, ref } from 'vue'
  import { saveAs } from 'file-saver'
  import PreviewVideo from './preview-video.vue'
  import { fileNamePass, limitFileSize, uploadRequest } from '@/components/ProUpload/upload.js'
  import { invokeModal } from '@/utils/modal'

  const isVideo = (url) => {
    return /(\.avi|\.mov|\.mp4|\.m4v|\.flv)/i.test(url)
  }

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

  const imgRef = ref(null)
  const previewUrl = ref('')
  const preview = (file) => {
    previewUrl.value = file.url
    if (isVideo(file.url)) {
      invokeModal({
        title: '视频预览',
        render: PreviewVideo,
        cover: file.thumbnailUrl,
        src: file.url
      })
    } else {
      nextTick(() => {
        imgRef.value.click()
      })
    }
  }
</script>

<template>
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

  <n-image
    ref="imgRef"
    :src="previewUrl"
    style="width: 0; height: 0"
  />
</template>
