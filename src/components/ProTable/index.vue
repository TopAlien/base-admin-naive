<script setup>
  import { computed, useAttrs } from 'vue'
  import SearchForm from './SearchForm.vue'
  import { setTableColumn } from './util'

  const attrs = useAttrs()
  const slots = defineSlots()

  const props = defineProps({
    title: {
      type: String,
      default: '查询表格'
    }
  })

  const tableColumns = computed(() => {
    return setTableColumn(attrs.columns || [])
  })
</script>

<template>
  <div class="pro_box">
    <div class="search_box">
      <div class="search_box_title">{{ title }}</div>
      <SearchForm v-bind="$attrs" />
      <n-divider class="mb16px! mt0!" />
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
      v-bind="$attrs"
      flex-height
      :columns="tableColumns"
    />
  </div>
</template>

<style scoped>
  .pro_box {
    height: 100%;
    min-width: 600px;
    display: flex;
    flex-direction: column;
  }

  .search_box_title {
    color: rgb(29, 33, 41);
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
</style>
