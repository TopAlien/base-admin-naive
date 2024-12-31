<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { routes } from '@/router'
  import { generatorMenu } from '@/utils/router-gen.js'
  import { renderIcon } from '@/utils/render.js'
  import { getUserInfo } from '@/utils/storage.js'
  import { listenerRouteChange } from '@/utils/router-listener.js'

  const router = useRouter()

  const selectedKey = ref('')
  const menus = ref(generatorMenu(routes[0].children))

  const clickMenuItem = (path) => {
    if (/http(s)?:/.test(path)) {
      window.open(path)
    } else {
      router.push({ path })
    }
  }

  listenerRouteChange((to) => {
    selectedKey.value = to.meta.light || to.path
  })

  const dropdownOptions = ref([
    {
      label: '登出登录',
      key: 'logout',
      icon: renderIcon('LogOutOutline')
    }
  ])

  const userInfo = ref(getUserInfo())
  const selectItem = (key) => {
    if (key === 'logout') {
      localStorage.clear()
      router.replace('/login')
    }
  }
</script>

<template>
  <n-layout-header class="layout_header">
    <div class="flex flex-justify-between flex-items-center header_box">
      <h3 class="ma0">哇咔咔</h3>
      <n-dropdown
        :options="dropdownOptions"
        @select="selectItem"
        placement="top-end"
      >
        <n-button quaternary>
          <h4>{{ userInfo.username }}</h4>
        </n-button>
      </n-dropdown>
    </div>
  </n-layout-header>
  <n-layout has-sider>
    <n-layout-sider
      class="side_content"
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="220"
      :native-scrollbar="false"
    >
      <n-menu
        v-model:value="selectedKey"
        accordion
        key-field="key"
        label-field="label"
        :options="menus"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        @update:value="clickMenuItem"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-content
        class="layout_content"
        :native-scrollbar="false"
        content-style="height: 100%; padding: 16px 16px 0;"
      >
        <div class="router_view">
          <router-view />
        </div>
      </n-layout-content>
      <n-layout-footer class="layout_footer">©2024 Created by 哇咔咔</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style lang="less" scoped>
  .layout_header {
    height: @header-height;
    line-height: @header-height;
    text-align: center;
    border-bottom: 1px solid rgb(229, 230, 235);
  }

  .header_box {
    padding: 0 16px 0;
  }

  .side_content {
    height: calc(100vh - @header-height);
  }

  .layout_content {
    height: calc(100vh - @header-height - @footer-height);
    background-color: @main-bg;
  }

  .layout_footer {
    height: @footer-height;
    line-height: @footer-height;
    text-align: center;
    background-color: @main-bg;
  }

  .router_view {
    height: 100%;
    padding: 16px;
    border: 1px solid rgb(229, 230, 235);
    background-color: white;
    box-sizing: border-box;
    overflow-x: auto;
  }
</style>
