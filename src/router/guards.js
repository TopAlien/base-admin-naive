import { setRouteEmitter } from '@/utils/router-listener'
import { useTags } from '@/stores/useTags'
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
    const tagsStore = useTags()
    tagsStore.addTag({ title: to.meta.title, fullPath: to.fullPath })

    NProgress.done()
  })
}
