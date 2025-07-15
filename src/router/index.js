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
        name: 'LIST',
        path: '/list',
        redirect: '/list3',
        meta: {
          title: '测试页面爱喝酒'
        },
        children: [
          {
            path: '/list3',
            name: 'LIST3',
            component: () => import('@/views/list.vue'),
            meta: {
              title: '测试页面挖矿',
              icon: 'CubeOutline'
            }
          },
          {
            path: '/list32',
            name: 'LIST32',
            component: () => import('@/views/not-found.vue'),
            meta: {
              title: '测试矿'
            }
          },
            {
            path: '/big',
            name: 'Big',
            component: () => import('@/views/big.vue'),
            meta: {
              title: 'BigNumber.js'
            }
          }
        ]
      },
      {
        path: '/chart',
        name: 'Chart',
        component: () => import('@/views/chart.vue'),
        meta: {
          title: 'Chart'
        }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/not-found.vue'),
        show: false,
        meta: {
          title: '404 Not Found'
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
