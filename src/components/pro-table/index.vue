<script setup>
  import { ref, reactive, computed, useAttrs, h, nextTick } from 'vue'
  import ProSearch from '@/components/pro-search/index.vue'
  import { setTableColumn, setSearchColumn } from './util.js'

  const attrs = useAttrs()
  const slots = defineSlots()

  const props = defineProps({
    title: {
      type: String,
      default: '查询表格'
    },
    request: {
      type: Function,
      default: () => ({ list: [], total: 0 })
    }
  })

  const tableColumns = computed(() => {
    return setTableColumn(attrs.columns || [])
  })

  const searchColumns = computed(() => {
    return setSearchColumn(attrs.columns || [])
  })

  const tableState = reactive({
    loading: false,
    list: [],
    total: 0,
    pagination: {
      page: 1,
      pageSize: 20,
      showSizePicker: true,
      pageSizes: [10, 20, 30, 50],
      prefix: () => {
        return tableState.total ? h('span', `共 ${tableState.total} 条`) : ''
      },
      onChange: (page) => {
        tableState.pagination.page = page
        loadData()
      },
      onUpdatePageSize: (pageSize) => {
        tableState.pagination.pageSize = pageSize
        tableState.pagination.page = 1
        loadData()
      }
    }
  })

  const searchFormRef = ref()
  const getParams = () => {
    return {
      ...searchFormRef.value?.getFieldsValue(),
      currPage: tableState.pagination.page,
      pageSize: tableState.pagination.pageSize
    }
  }

  const loadData = async () => {
    if (typeof props.request !== 'function') {
      throw new Error('request must be a function')
    }

    tableState.loading = true
    try {
      const { list, total } = await props.request(getParams())

      tableState.list = list
      tableState.total = total
    } finally {
      tableState.loading = false
    }
  }
  nextTick(loadData)

  const search = () => {
    tableState.pagination.page = 1
    loadData()
  }

  defineExpose({ getParams, reload: loadData })
</script>

<template>
  <div class="pro_box">
    <div
      class="search_box"
      v-if="searchColumns.length || slots.extra"
    >
      <div class="search_box_title">{{ title }}</div>
      <ProSearch
        ref="searchFormRef"
        :searchColumns="searchColumns"
        @search="search"
      />
      <n-divider
        v-if="searchColumns.length && slots.extra"
        class="mb10px! mt0!"
      />
      <div
        v-if="slots.extra"
        class="flex items-center justify-between mb10px"
      >
        <slot name="extra" />
      </div>
    </div>
    <n-data-table
      class="flex-1 h-full"
      :row-key="(row) => row.id"
      flex-height
      striped
      remote
      :columns="tableColumns"
      :loading="tableState.loading"
      :data="tableState.list"
      :pagination="{ ...tableState.pagination, itemCount: tableState.total }"
      v-bind="$attrs"
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
