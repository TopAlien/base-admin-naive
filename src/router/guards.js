import { setRouteEmitter } from '@/utils/router-listener'
import { useWorktabStore } from '@/store/modules/worktab'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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

  router.afterEach((to, form) => {
    const worktabStore = useWorktabStore()
    worktabStore.openTab({ title: to.meta.title, fullPath: to.fullPath })

    NProgress.done()
  })
}
