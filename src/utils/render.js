import { h } from 'vue'
import { NIcon, NPopconfirm, NButton } from 'naive-ui'
import { BookOutline } from '@vicons/ionicons5'

export const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon || BookOutline) })
}

export const renderPopconfirm = (options) => {
  return h(
    NPopconfirm,
    {
      onPositiveClick: options?.positiveClick,
      onNegativeClick: options?.negativeClick
    },
    {
      trigger: () => h(NButton, { quaternary: true, type: 'primary' }, { default: () => '删除' }),
      default: () => '一切都将一去杳然，任何人都无法将其捕获。'
    }
  )
}
