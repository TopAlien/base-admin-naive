<script setup>
  import { h } from 'vue'

  const pagination = {
    pageSize: 10,
    showSizePicker: true,
    pageSizes: [10, 20, 30, 50],
    prefix: (info) => {
      return h('span', `共 ${info.itemCount} 条`)
    }
  }

  const props = defineProps({
    columns: {
      type: Array,
      default: () => []
    }
  })

  props.columns.forEach((column) => {
    column.align = 'center'
  })
</script>

<template>
  <n-data-table
    :row-key="(row) => row.id"
    v-bind="$attrs"
    :columns="columns"
    striped
    :pagination="pagination"
  />
</template>
