<script setup>
  import { useRouter, useRoute } from 'vue-router'
  import { useTags } from '@/stores/useTags'

  const tagsStore = useTags()
  const router = useRouter()
  const route = useRoute()

  const handleClose = (item, index) => {
    tagsStore.removeTag(index)

    if (item.fullPath === route.fullPath) {
      router.replace(tagsStore.list[index - 1]?.fullPath || '/')
    }
  }
</script>

<template>
  <div class="layout_history">
    <n-tag
      :closable="tagsStore.list.length > 1"
      v-for="(item, index) in tagsStore.list"
      :type="item.fullPath === route.fullPath ? 'success' : ''"
      :key="item.fullPath"
      @close="handleClose(item, index)"
    >
      {{ item.title }}
    </n-tag>
  </div>
</template>

<style lang="less" scoped>
  .layout_history {
    height: @header-history-height;
    display: flex;
    align-items: center;
    margin: 0 16px 0;
    overflow-x: auto;

    & :deep(.n-tag) {
      margin-right: 8px;
    }

    & :deep(.n-tag:last-child) {
      margin-right: 0;
    }

    &::-webkit-scrollbar {
      height: 0;
      width: 0;
      opacity: 0;
      display: none;
    }
  }
</style>
