<script setup>
  import { ref } from 'vue'
  const fileList = ref([
    {
      id: 'b',
      name: '我是普通文本.doc',
      status: 'finished',
      type: 'text/plain'
    },
    {
      id: 'c',
      name: '我是自带url的图片.png',
      status: 'finished',
      url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    }
  ])
</script>

<template>
  <n-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="fileList"
    list-type="image-card"
    v-bind="$attrs"
  >
    点击上传
  </n-upload>
</template>
