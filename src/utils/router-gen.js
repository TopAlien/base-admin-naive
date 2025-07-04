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
