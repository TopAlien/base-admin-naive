<script setup>
  import Search from './search.vue'
  import { useRouter } from 'vue-router'
  import { getUserInfo } from '@/utils/storage.js'
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
    <Search />

    <n-dropdown
      :options="dropdownOptions"
      @select="selectItem"
      placement="top-end"
    >
      <div class="flex items-center cursor-pointer">
        <h4>{{ userInfo.username || '哈撒给-昵称' }}</h4>
        <n-avatar
          class="ml10px"
          round
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        />
      </div>
    </n-dropdown>
  </n-layout-header>
</template>

<style lang="less" scoped>
  .layout_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: @header-height;
    padding: 0 16px;
    border-bottom: 1px solid rgb(229, 230, 235);
  }
</style>
