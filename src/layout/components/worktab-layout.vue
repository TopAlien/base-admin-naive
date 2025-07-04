<script setup>
  import { useRouter, useRoute } from 'vue-router'
  import { useWorktabStore } from '@/store/modules/worktab'

  const worktabStore = useWorktabStore()
  const router = useRouter()
  const route = useRoute()

  const remove = (item, index) => {
    worktabStore.removeTab(index)

    if (item.fullPath === route.fullPath) {
      router.replace(worktabStore.opened[index - 1]?.fullPath || '/')
    }
  }
</script>

<template>
  <div class="layout_history">
    <n-tag
      :closable="worktabStore.opened.length > 1"
      v-for="(item, index) in worktabStore.opened"
      :type="item.fullPath === route.fullPath ? 'success' : ''"
      :key="item.fullPath"
      @close="remove(item, index)"
    >
      <div
        class="cursor-pointer"
        @click="() => router.push(item.fullPath)"
      >
        {{ item.title }}
      </div>
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
