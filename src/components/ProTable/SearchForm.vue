<script setup>
  import { ref, computed, useAttrs } from 'vue'
  import { SearchOutline, RefreshOutline } from '@vicons/ionicons5'
  import { renderIcon } from '@/utils/index'
  import { setSearchColumn, isDateInput, isEmpty } from './util'

  let initFormData = {}

  const attrs = useAttrs()
  const emit = defineEmits(['search'])

  const searchColumns = computed(() => {
    return setSearchColumn(attrs.columns || [])
  })

  const searchForm = ref({})
  const initSearchForm = () => {
    searchColumns.value.forEach((it) => {
      searchForm.value[it.searchKey || it.key] = it.initialValue || null
    })

    initFormData = JSON.parse(JSON.stringify(searchForm.value))
  }
  initSearchForm()

  const search = () => {
    console.log(searchForm.value)
    emit('search', searchForm.value)
  }

  const reset = () => {
    searchForm.value = JSON.parse(JSON.stringify(initFormData))
  }
</script>

<template>
  <div
    v-if="searchColumns.length"
    class="flex"
  >
    <n-form
      ref="formRef"
      class="flex-wrap flex-1"
      inline
      label-width="auto"
      label-placement="left"
      :model="searchForm"
    >
      <n-form-item
        v-for="item in searchColumns"
        :key="item.key"
        :label="item.title + ':'"
      >
        <n-input
          v-if="!item.valueType || item.valueType === 'text'"
          class="min-w240px!"
          v-model:value="searchForm[item.searchKey || item.key]"
          :placeholder="'请输入' + item.title"
          :clearable="!isEmpty(item.initialValue)"
          v-bind="item.fieldProps"
        />

        <n-select
          v-if="item.valueType === 'select'"
          class="min-w240px!"
          v-model:value="searchForm[item.searchKey || item.key]"
          :options="item.options"
          :placeholder="'请选择' + item.title"
          :clearable="!isEmpty(item.initialValue)"
          v-bind="item.fieldProps"
        />

        <n-date-picker
          v-if="isDateInput(item.valueType)"
          class="min-w240px!"
          v-model:value="searchForm[item.searchKey || item.key]"
          :type="item.valueType"
          :clearable="!isEmpty(item.initialValue)"
          v-bind="item.fieldProps"
        />
      </n-form-item>
    </n-form>
    <div class="operate_box">
      <n-button
        type="primary"
        class="mb24px"
        :render-icon="renderIcon(SearchOutline)"
        @click="search"
      >
        查询
      </n-button>
      <n-button
        :render-icon="renderIcon(RefreshOutline)"
        @click="reset"
      >
        重置
      </n-button>
    </div>
  </div>
</template>

<style scoped>
  .operate_box {
    display: flex;
    flex-direction: column;
    border-left: 1px solid rgb(239, 239, 245);
    margin-bottom: 24px;
    margin-left: 20px;
    padding-left: 20px;
  }
</style>
