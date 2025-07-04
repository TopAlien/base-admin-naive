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

  const flattenFn = (item) => {
    if (typeof item.show === 'boolean' && !item.show) return

    if (item.children && item.children.length > 0) {
      item.children.forEach(flattenFn)
      return
    }

    result.push({ ...item, children: undefined })
  }

  routes.forEach(flattenFn)
  return result
}
