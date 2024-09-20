import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/layout',
      children: [
        {
          path: 'layout',
          name: 'Layout',
          component: () => import('@/views/test.vue')
        }
      ]
    }
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
