<script setup></script>

<template>
  <n-layout-content class="layout_content">
    <n-scrollbar
      content-class="scrollbar_content"
      x-scrollable
    >
      <router-view v-slot="{ Component, route }">
        <Transition
          name="fade-transform"
          mode="out-in"
          appearx
        >
          <component
            :is="Component"
            :key="route.fullPath"
          />
        </Transition>
      </router-view>
    </n-scrollbar>
  </n-layout-content>
</template>

<style lang="less" scoped>
  .layout_content {
    height: @layout-content-height;
    background-color: @main-bg;
    padding: 12px;
    box-sizing: border-box;

    & :deep(.scrollbar_content.n-scrollbar-content) {
      height: inherit;
      min-height: fit-content;
      padding: 16px;
      border: 1px solid rgb(229, 230, 235);
      background-color: white;
      box-sizing: border-box;
    }
  }
</style>
