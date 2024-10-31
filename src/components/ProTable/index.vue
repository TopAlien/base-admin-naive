<script setup>
  import { h, ref, reactive, computed, useAttrs } from 'vue'
  import SearchForm from './SearchForm.vue'
  import { setTableColumn, setSearchColumn } from './util'

  const attrs = useAttrs()
  const slots = defineSlots()

  const props = defineProps({
    title: {
      type: String,
      default: '查询表格'
    },
    request: {
      type: Function,
      default: () => ({ data: [], total: 0 })
    }
  })

  const tableColumns = computed(() => {
    return setTableColumn(attrs.columns || [])
  })

  const searchColumns = computed(() => {
    return setSearchColumn(attrs.columns || [])
  })

  const tableReactive = reactive({
    loading: false,
    data: [],
    total: 0,
    pagination: {
      page: 1,
      pageSize: 20,
      showSizePicker: true,
      pageSizes: [10, 20, 30, 50],
      prefix: () => {
        return tableReactive.total ? h('span', `共 ${tableReactive.total} 条`) : ''
      },
      onChange: (page) => {
        tableReactive.pagination.page = page
        loadData()
      },
      onUpdatePageSize: (pageSize) => {
        tableReactive.pagination.pageSize = pageSize
        tableReactive.pagination.page = 1
        loadData()
      }
    }
  })

  const searchFormRef = ref()
  const getQueryParams = () => {
    return {
      ...searchFormRef.value?.getQueryParams(),
      page: tableReactive.pagination.page,
      pageSize: tableReactive.pagination.pageSize
    }
  }

  const loadData = async () => {
    if (typeof props.request !== 'function') {
      throw new Error('request must be a function')
    }

    tableReactive.loading = true
    try {
      const { data, total } = await props.request(getQueryParams())

      tableReactive.data = data
      tableReactive.total = total
    } finally {
      tableReactive.loading = false
    }
  }
  loadData()

  const handleSearch = () => {
    tableReactive.pagination.page = 1
    loadData()
  }

  defineExpose({ getQueryParams, reload: loadData })
</script>

<template>
  <div class="pro_box">
    <div class="search_box">
      <div class="search_box_title">{{ title }}</div>
      <SearchForm
        ref="searchFormRef"
        :searchColumns="searchColumns"
        @search="handleSearch"
      />
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
      :loading="tableReactive.loading"
      :data="tableReactive.data"
      :pagination="tableReactive.pagination"
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
