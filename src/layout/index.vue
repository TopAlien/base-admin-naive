<script setup>
  import HeaderLayout from './header-layout.vue'
  import WorktabLayout from './worktab-layout.vue'
  import MenuLayout from './menu-layout.vue'
  import ContentLayout from './content-layout.vue'
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
