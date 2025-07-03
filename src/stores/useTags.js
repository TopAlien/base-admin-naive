import { defineStore } from 'pinia'

export const useTags = defineStore('tags', {
  state: () => ({
    list: []
  }),
  actions: {
    addTag(val) {
      const index = this.list.findIndex((item) => item.fullPath === val.fullPath)
      if (index !== -1) {
        this.list.splice(index, 1)
      }

      this.list.push(val)
    },

    removeTag(index) {
      this.list.splice(index, 1)
    }
  }
})
