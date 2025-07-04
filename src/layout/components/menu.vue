<script setup>
  import { ref } from 'vue'
  import HeaderLogo from './logo.vue'
  import { routes } from '@/router'
  import { useRouter } from 'vue-router'
  import { listenerRouteChange } from '@/utils/router-listener.js'
  import { renderIcon } from '@/utils/render'

  const router = useRouter()

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
        key-field="path"
        label-field="label"
        :indent="18"
        :options="routes[0].children"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :render-label="(option) => option.meta?.title"
        :render-icon="(option) => renderIcon(option.meta?.icon)()"
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
