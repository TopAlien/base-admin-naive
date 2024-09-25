import { setRouteEmitter } from '@/utils/router-listener'

export const createRouterGuards = (router) => {
  router.beforeEach((to, from, next) => {
    setRouteEmitter(to)

    next()
  })
}
