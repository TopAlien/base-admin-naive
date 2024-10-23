import { h } from 'vue'
import { NIcon } from 'naive-ui'
import { BookOutline } from '@vicons/ionicons5'

export const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon || BookOutline) })
}
