import { renderIcon } from '@/utils/render'

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