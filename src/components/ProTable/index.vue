<script setup>
  const slots = defineSlots()

  const props = defineProps({
    title: {
      type: String,
      default: '查询表格'
    }
  })
</script>

<template>
  <div class="pro_box">
    <div class="search_box">
      <div class="search_box_title">{{ title }}</div>
      <slot name="search" />
      <n-divider
        v-if="slots.search || slots.extraL || slots.extraR"
        class="mb16px! mt16px!"
      />
      <div
        v-if="slots.extraL || slots.extraR"
        class="flex justify-between mb16px"
      >
        <n-space>
          <slot name="extraL"><span></span></slot>
        </n-space>
        <n-space>
          <slot name="extraR"><span></span></slot>
        </n-space>
      </div>
    </div>
    <n-data-table
      class="flex-1 h-full"
      flex-height
      v-bind="$attrs"
    />
  </div>
</template>

<style scoped>
  .pro_box {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .search_box_title {
    color: rgb(29, 33, 41);
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
</style>
