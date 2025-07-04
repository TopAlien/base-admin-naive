<script setup>
  import HeaderLayout from './components/header-layout.vue'
  import WorktabLayout from './components/worktab-layout.vue'
  import MenuLayout from './components/menu-layout.vue'
  import ContentLayout from './components/content-layout.vue'
</script>

<template>
  <n-layout has-sider>
    <MenuLayout />
    <n-layout>
      <HeaderLayout />
      <WorktabLayout />
      <ContentLayout />
    </n-layout>
  </n-layout>
</template>
