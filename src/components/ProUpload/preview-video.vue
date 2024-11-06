<script setup>
  const props = defineProps({
    src: {
      type: String,
      default: ''
    },
    cover: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <video
    v-if="src"
    controls
    :poster="cover"
    :src="src"
    style="width: 100%; max-height: 80vh"
  >
    您的浏览器不支持 video 标签。
  </video>
</template>
