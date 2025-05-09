import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './guards'

import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/list',
    children: [
      {
        path: '/list',
        name: 'LIST',
        component: () => import('@/views/list.vue'),
        meta: {
          title: '测试页面1'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/not-found.vue'),
    meta: {
      title: '404 Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const setupRouter = (app) => {
  app.use(router)

  createRouterGuards(router)
}

export default router
