import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWorktabStore = defineStore('worktab', () => {
  const opened = ref([])

  const openTab = (tab) => {
    const index = opened.value.findIndex((item) => item.fullPath === tab.fullPath)
    if (index !== -1) {
      removeTab(index)
    }

    opened.value.push(tab)
  }

  const removeTab = (index) => {
    opened.value.splice(index, 1)
  }

  return {
    opened,

    openTab,
    removeTab
  }
})
