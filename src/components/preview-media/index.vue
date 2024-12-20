<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'image' // image || video
    },
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
  <div class="media">
    <video
      v-if="type === 'video' && src"
      controls
      autoplay
      :poster="cover"
      :src="src"
      style="width: 100%; max-height: 80vh"
    >
      您的浏览器不支持 video 标签。
    </video>

    <n-image
      v-if="type === 'image' && src"
      :src="src"
      width="100%"
      style="max-height: 80vh"
    />
  </div>
</template>
