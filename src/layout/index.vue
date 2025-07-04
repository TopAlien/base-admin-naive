<script setup>
  import HeaderLayout from './components/header.vue'
  import WorktabLayout from './components/worktab.vue'
  import MenuLayout from './components/menu.vue'
  import ContentLayout from './components/content.vue'
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
