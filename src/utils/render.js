import { h } from 'vue'
import { NTag, NIcon, NButton, NDivider, NImage, NPopconfirm } from 'naive-ui'
import {
  SearchOutline,
  RefreshOutline,
  PeopleOutline,
  DiamondOutline,
  BookOutline,
  BowlingBallOutline,
  EarthOutline,
  CubeOutline,
  LogOutOutline
} from '@vicons/ionicons5'
import { isEmpty } from './index'

export const ICON_MAP = {
  SearchOutline,
  RefreshOutline,
  PeopleOutline,
  BookOutline,
  DiamondOutline,
  BowlingBallOutline,
  EarthOutline,
  CubeOutline,
  LogOutOutline
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

export const renderTag = (obj = {}) => {
  // NTag color 为对象
  if (obj?.type) {
    return h(NTag, { type: obj?.type || 'default', color: obj?.color }, { default: () => obj?.text || '-' })
  }

  if (typeof obj === 'object' && isEmpty(obj?.text)) {
    return '-'
  }
  /**
   * 兼容
   * { 1: { text: '是', status: 'Success' } }
   * { 1: '是'   }
   */
  return isEmpty(obj?.text) ? obj || '-' : obj?.text
}

export const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(ICON_MAP[icon] || BookOutline) })
}

export const renderTableIndex = (_, index) => {
  return index + 1
}

export const renderOperationBtn = (ops = []) => {
  const showOps = ops.filter((op) => !op.hide)
  const maxLen = showOps.length

  return showOps.map((op, index) => {
    return op.hide
      ? null
      : h('span', [
          h(
            NButton,
            { quaternary: true, type: 'primary', size: 'small', onClick: () => op.click() },
            { default: () => op.label }
          ),
          index === maxLen - 1 ? null : h(NDivider, { vertical: true, style: { margin: 0 } }, { default: () => op })
        ])
  })
}

export const renderImage = (src, props = { width: 60, height: 60 }) => {
  return h(NImage, { src, ...props })
}
