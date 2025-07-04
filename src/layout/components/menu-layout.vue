<script setup>
  import { ref } from 'vue'
  import HeaderLogo from './header-logo.vue'
  import { useRouter } from 'vue-router'
  import { routes } from '@/router'
  import { generatorMenu } from '@/utils/router-gen.js'
  import { listenerRouteChange } from '@/utils/router-listener.js'

  const router = useRouter()
  const menus = generatorMenu(routes[0].children)

  const selectedKey = ref('')
  listenerRouteChange((to) => {
    selectedKey.value = to.meta.light || to.path
  })

  const clickMenuItem = (path) => {
    if (/http(s)?:/.test(path)) {
      window.open(path)
    } else {
      router.push({ path })
    }
  }
</script>

<template>
  <div class="flex flex-col">
    <HeaderLogo />
    <n-layout-sider
      class="side_content"
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="200"
      :native-scrollbar="false"
    >
      <n-menu
        v-model:value="selectedKey"
        accordion
        key-field="key"
        label-field="label"
        :indent="18"
        :options="menus"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        @update:value="clickMenuItem"
      />
    </n-layout-sider>
  </div>
</template>

<style lang="less" scoped>
  .side_content {
    height: calc(100vh - @header-height);
  }
</style>
