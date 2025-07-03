import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { setRouteEmitter } from '@/utils/router-listener'

NProgress.configure({
  easing: 'ease',
  speed: 600,
  showSpinner: false,
  trickleSpeed: 200,
  parent: 'body'
})

export const createRouterGuards = (router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start()

    setRouteEmitter(to)

    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
