import { defineStore } from 'pinia'
import { routes } from '@/router'
import { generatorMenu } from '@/utils/router-gen.js'

export const useMenuStore = defineStore('menu', () => {
  const menuList = generatorMenu(routes[0].children)

  return {
    menuList
  }
})
