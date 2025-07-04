import { setRouteEmitter } from '@/utils/router-listener'
import { useWorktabStore } from '@/store/modules/worktab'

const whiteList = ['/login']

export const createRouterGuards = (router) => {
  router.beforeEach((to, from, next) => {
    $loadingBar.start()

    setRouteEmitter(to)

    next()
  })

  router.afterEach((to, form) => {
    if (!whiteList.includes(to.path)) {
      const worktabStore = useWorktabStore()
      worktabStore.openTab({ title: to.meta.title, fullPath: to.fullPath })
    }

    $loadingBar.finish()
  })
}
