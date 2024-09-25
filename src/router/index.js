import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './guards'

import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/test/test1-1',
    children: [
      {
        path: '/test',
        name: 'Test',
        meta: {
          title: '测试页面'
        },
        children: [
          {
            path: '/test/test1-1',
            name: 'Test1-1',
            component: () => import('@/views/test1.vue'),
            meta: {
              title: '测试页面1-1'
            }
          },
          {
            path: '/test/test1-2',
            name: 'Test1-2',
            component: () => import('@/views/test2.vue'),
            meta: {
              title: '测试页面1-2'
            }
          }
        ]
      },
      {
        path: '/test1',
        name: 'Test1',
        component: () => import('@/views/test.vue'),
        meta: {
          title: '测试页面1'
        }
      }
    ]
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
