<script setup>
  import { ref, reactive, computed, useAttrs, h } from 'vue'
  import ProSearch from '@/components/pro-search/index.vue'
  import { setTableColumn, setSearchColumn } from './util.js'

  const attrs = useAttrs()
  const slots = defineSlots()
  const emit = defineEmits(['search', 'update:checked-rows'])

  const props = defineProps({
    title: {
      type: String,
      default: '查询表格'
    },
    inlineBtn: {
      type: Boolean,
      default: false
    },
    request: {
      type: Function,
      default: () => ({ list: [], total: 0 })
    }
  })

  const checkedRowKeys = defineModel('checkedRowKeys', {
    type: Array,
    default: () => []
  })

  const tableColumns = computed(() => {
    return setTableColumn(attrs.columns || [])
  })

  const searchColumns = computed(() => {
    return setSearchColumn(attrs.columns || [])
  })

  const tableMuster = reactive({
    loading: false,
    list: [],
    total: 0,
    pagination: {
      page: 1,
      pageSize: 20,
      showSizePicker: true,
      pageSizes: [10, 20, 30, 50],
      prefix: () => {
        return tableMuster.total ? h('span', `共 ${tableMuster.total} 条`) : ''
      },
      onChange: (page) => {
        tableMuster.pagination.page = page
        loadData()
      },
      onUpdatePageSize: (pageSize) => {
        tableMuster.pagination.pageSize = pageSize
        tableMuster.pagination.page = 1
        loadData()
      }
    }
  })

  const searchFormRef = ref()
  const getParams = () => {
    return {
      ...searchFormRef.value?.getFieldsValue(),
      currPage: tableMuster.pagination.page,
      pageSize: tableMuster.pagination.pageSize
    }
  }

  const loadData = async () => {
    if (typeof props.request !== 'function') {
      throw new Error('request must be a function')
    }

    tableMuster.loading = true
    try {
      const { list, total } = await props.request(getParams())

      tableMuster.list = list
      tableMuster.total = total
    } finally {
      tableMuster.loading = false
    }
  }
  loadData()

  const search = () => {
    tableMuster.pagination.page = 1
    loadData()
  }

  const handleCheck = (rowKeys, rows) => {
    checkedRowKeys.value = rowKeys
    emit('update:checked-rows', rows)
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
        :inline-btn="inlineBtn"
        :searchColumns="searchColumns"
        @search="search"
      />
      <n-divider
        class="mb16px! mt0!"
        v-if="searchColumns.length && slots.extra"
      />
      <div
        v-if="slots.extra"
        class="flex items-center justify-between mb16px"
      >
        <slot name="extra" />
      </div>
    </div>
    <n-data-table
      class="flex-1 h-full"
      :row-key="(row) => row.id"
      v-bind="$attrs"
      flex-height
      striped
      remote
      :columns="tableColumns"
      :loading="tableMuster.loading"
      :data="tableMuster.list"
      :pagination="{ ...tableMuster.pagination, itemCount: tableMuster.total }"
      :checked-row-keys="checkedRowKeys"
      @update:checked-row-keys="handleCheck"
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
