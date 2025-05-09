<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const toHome = () => {
    router.replace('/')
  }
</script>

<template>
  <n-result
    class="mt150px"
    status="404"
    title="404 资源不存在"
    description="生活总归带点荒谬"
    size="huge"
  >
    <template #footer>
      <n-button @click="toHome">找点乐子吧</n-button>
    </template>
  </n-result>
</template>
