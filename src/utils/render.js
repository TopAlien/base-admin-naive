import { h, useId } from 'vue'
import { NTag, NIcon, NButton, NDivider, NImage } from 'naive-ui'
import { getVideoCover, isEmpty, isVideo } from './index.js'
import {
  SearchOutline,
  RefreshOutline,
  PeopleOutline,
  DiamondOutline,
  BookOutline,
  BowlingBallOutline,
  EarthOutline,
  CubeOutline,
  LogOutOutline,
  CloseCircleOutline,
  VideocamOutline
} from '@vicons/ionicons5'
import { previewMedia } from '@/utils/modal.js'

export const ICON_MAP = {
  SearchOutline,
  RefreshOutline,
  PeopleOutline,
  BookOutline,
  DiamondOutline,
  BowlingBallOutline,
  EarthOutline,
  CubeOutline,
  LogOutOutline,
  CloseCircleOutline,
  VideocamOutline
}

export const renderTag = (obj = {}) => {
  // NTag color 为对象
  if (obj?.type) {
    return h(NTag, { type: obj?.type, color: obj?.color }, { default: () => obj?.text || '-' })
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

export const renderIcon = (icon = 'BookOutline', props) => {
  return () => h(NIcon, props, { default: () => h(ICON_MAP[icon]) })
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
      : h('span', { key: useId() }, [
          h(
            NButton,
            {
              quaternary: true,
              type: 'primary',
              size: 'small',
              onClick: () => op.click(),
              ...op.attrs
            },
            { default: () => op.label }
          ),
          index === maxLen - 1 ? null : h(NDivider, { vertical: true, style: { margin: 0 } }, { default: () => op })
        ])
  })
}

export const renderMedia = (src, props = { width: 60, height: 60 }) => {
  if (!src) return '-'

  if (isVideo(src)) {
    const cover = getVideoCover(src)
    return h(
      'div',
      {
        style: { position: 'relative', cursor: 'pointer' },
        onClick: () => previewMedia({ src, cover: cover, type: 'video' })
      },
      [
        h(NImage, {
          src: cover,
          lazy: true,
          ...props,
          'preview-disabled': true
        }),
        renderIcon('VideocamOutline', {
          size: 30,
          style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
        })()
      ]
    )
  }

  return h(NImage, { src, lazy: true, ...props })
}
