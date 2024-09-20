import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
