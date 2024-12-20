<script setup>
  import { ref, useAttrs } from 'vue'

  const attr = useAttrs()
  const props = defineProps({
    api: {
      type: Function,
      default: () => {}
    },
    fieldNames: {
      type: Object,
      default: () => ({
        label: 'positionName',
        value: 'id'
      })
    },
    maxlength: {
      type: Number,
      default: 0
    }
  })

  const options = ref([])
  const getOptions = async () => {
    if (!props.api) return

    options.value = await props.api()
  }
  getOptions()

  const renderOption = (info) => {
    if (!props.maxlength) return info.node

    info.option.disabled = info.selected ? false : attr.value.length >= props.maxlength
    return info.node
  }

  defineExpose({ getOptions })
</script>

<template>
  <n-select
    clearable
    filterable
    value-field="id"
    label-field="positionTakeName"
    v-bind="$attrs"
    :options="options"
    :render-option="renderOption"
  />
</template>
