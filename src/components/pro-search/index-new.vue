<script setup>
  import { computed, nextTick, ref } from 'vue'
  import { renderIcon } from '@/utils/render.js'
  import { isEmpty, omitEmpty } from '@/utils/index.js'
  import { cloneDeep } from 'lodash-es'

  let _initFormData = {}

  const props = defineProps({
    inlineBtn: {
      type: Boolean,
      default: false
    },
    searchColumns: {
      type: Array,
      default: () => []
    }
  })

  const emit = defineEmits(['search'])

  const inlineStyle = computed(() => {
    return props.inlineBtn || props.searchColumns.length < 3
  })

  const searchForm = ref({})
  const initSearchForm = () => {
    let temp = {}
    props.searchColumns.forEach((it) => {
      temp[it.searchKey || it.key] = it.initialValue || null
    })

    searchForm.value = cloneDeep(temp)
    temp = null
    _initFormData = cloneDeep(searchForm.value)
  }
  initSearchForm()

  const search = () => {
    nextTick(() => {
      emit('search', searchForm.value)
    })
  }

  const reset = () => {
    searchForm.value = cloneDeep(_initFormData)
    search()
  }

  const getFieldsValue = () => {
    return omitEmpty(searchForm.value)
  }

  defineExpose({ getFieldsValue })
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
      @keydown.enter="search"
    >
      <n-form-item
        v-for="item in searchColumns"
        :key="item.key"
        :label="item.title + ':'"
      >
        <!-- FIX 暂时不支持，需要全局引入组件或者传入NInput, NSelect等组件 -->
        <component
          class="min-w240px!"
          :is="item.is || 'n-input'"
          v-model:value="searchForm[item.searchKey || item.key]"
          :api="item.apiSelect"
          :placeholder="'请选择' + item.title"
          :clearable="isEmpty(item.initialValue)"
          :options="item.options"
          filterable
          :type="item.pickerSearchType || item.valueType"
          maxlength="50"
          v-bind="item.props"
          @update-value="search"
        />
      </n-form-item>
    </n-form>
    <div :class="!inlineStyle ? 'operate_box' : ''">
      <n-button
        type="primary"
        class="mb24px"
        :render-icon="renderIcon('SearchOutline')"
        @click="search"
      >
        查询
      </n-button>
      <n-button
        :render-icon="renderIcon('RefreshOutline')"
        @click="reset"
        :class="inlineStyle ? 'ml14px' : ''"
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
