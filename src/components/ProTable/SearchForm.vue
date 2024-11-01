<script setup>
  import { ref } from 'vue'
  import { SearchOutline, RefreshOutline } from '@vicons/ionicons5'
  import { isDateInput, isEmpty } from '@/utils/index'
  import { renderIcon } from '@/utils/render'
  import { cloneDeep } from 'lodash-es'

  let _INIT_FORM_DATA = {}

  const emit = defineEmits(['search'])
  const props = defineProps({
    searchColumns: {
      type: Array,
      default: () => []
    }
  })

  const searchForm = ref({})
  const initSearchForm = () => {
    const tempForm = {}
    props.searchColumns.forEach((it) => {
      tempForm[it.searchKey || it.key] = it.initialValue || null
    })

    searchForm.value = tempForm
    _INIT_FORM_DATA = cloneDeep(searchForm.value)
  }
  initSearchForm()

  const search = () => {
    emit('search', searchForm.value)
  }

  const reset = () => {
    searchForm.value = cloneDeep(_INIT_FORM_DATA)
    search()
  }

  const getQueryParams = () => {
    return searchForm.value
  }

  defineExpose({ getQueryParams })
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
          :clearable="isEmpty(item.initialValue)"
          v-bind="item.fieldProps"
        />

        <n-select
          v-if="item.valueType === 'select'"
          class="min-w240px!"
          v-model:value="searchForm[item.searchKey || item.key]"
          :options="item.options"
          :placeholder="'请选择' + item.title"
          :clearable="isEmpty(item.initialValue)"
          v-bind="item.fieldProps"
        />

        <n-date-picker
          v-if="isDateInput(item.valueType)"
          class="min-w240px!"
          v-model:value="searchForm[item.searchKey || item.key]"
          :type="item.valueType"
          :clearable="isEmpty(item.initialValue)"
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
