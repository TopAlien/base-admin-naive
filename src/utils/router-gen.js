import { renderIcon } from '@/utils/render'

export function generatorMenu(routes) {
  return routes.map((item) => {
    const currentMenu = {
      ...item,
      label: item.meta?.title,
      icon: renderIcon()
    }

    if (item.children && item.children.length > 0) {
      currentMenu.children = generatorMenu(item.children)
    }
    return currentMenu
  })
}

export function flattenMenuItemsFn(routes) {
  const result = []
  const flattenFn = (item, parentTitle) => {
    if (typeof item.show === 'boolean' && !item.show) return

    if (item.children && item.children.length > 0) {
      item.children.forEach((it) => flattenFn(it, item.meta?.title))
      return
    }

    result.push({ ...item, parentTitle, children: undefined })
  }

  routes.forEach((it) => flattenFn(it))

  return result
}
