<script setup></script>

<template>
  <div class="layout_history">
    <n-tag closable>爱在西元前</n-tag>
    <n-tag
      closable
      type="success"
    >
      爱在西元前
    </n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
    <n-tag closable>爱在西元前</n-tag>
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
