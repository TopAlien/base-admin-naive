import { h } from 'vue'
import { NIcon } from 'naive-ui'
import { BookOutline } from '@vicons/ionicons5'

/**
 *  const columns = setTableColumn([
 *     { no: '集合编号' },
 *     { name: '集合名称' },
 *     { type: '内容体裁' },
 *     { fs: '筛选方式' },
 *     { action: { title: '操作', width: '130px', ... } }
 *   ])
 * @param simpleArr
 */
export const setTableColumn = (simpleArr = []) => {
  if (!simpleArr || !Array.isArray(simpleArr) || !simpleArr?.length) {
    return []
  }

  return simpleArr.map((it) => {
    const key = Object.keys(it)[0]
    const val = it[key]

    return typeof val === 'string'
      ? {
          title: val,
          dataIndex: key,
          key
        }
      : {
          dataIndex: key,
          key,
          ...val
        }
  })
}

const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon || BookOutline) })
}

export function isRootRouter(item) {
  return item.meta?.alwaysShow != true && item?.children?.filter((item) => !Boolean(item?.meta?.hidden))?.length === 1
}

export function filterRouter(routes) {
  return routes.filter((item) => {
    return (item.meta?.hidden || false) != true && !['/:path(.*)*', '/redirect', '/login'].includes(item.path)
  })
}

export function generatorMenu(routes) {
  return filterRouter(routes).map((item) => {
    const isRoot = isRootRouter(item)
    const info = isRoot ? item.children[0] : item
    const currentMenu = {
      ...info,
      ...info.meta,
      label: info.meta?.title,
      key: info.path,
      icon: renderIcon() // isRoot ? item.meta?.icon : info.meta?.icon
    }

    if (info.children && info.children.length > 0) {
      currentMenu.children = generatorMenu(info.children)
    }
    return currentMenu
  })
}
