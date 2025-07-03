<script setup>
  import { getUserInfo } from '@/utils/storage.js'
  import { useRouter } from 'vue-router'
  import { renderIcon } from '@/utils/render.js'

  const router = useRouter()
  const userInfo = getUserInfo()

  const dropdownOptions = [
    {
      label: '登出登录',
      key: 'logout',
      icon: renderIcon('LogOutOutline')
    }
  ]

  const selectItem = (key) => {
    if (key === 'logout') {
      localStorage.clear()
      router.replace('/login')
    }
  }
</script>

<template>
  <n-layout-header class="layout_header">
    <n-dropdown
      :options="dropdownOptions"
      @select="selectItem"
      placement="top-end"
    >
      <n-button quaternary>
        <h4>{{ userInfo.username || '哈撒给-昵称' }}</h4>
      </n-button>
    </n-dropdown>
  </n-layout-header>
</template>

<style lang="less" scoped>
  .layout_header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: @header-height;
    padding: 0 16px 0;
    border-bottom: 1px solid rgb(229, 230, 235);
  }
</style>
