import App from './App.vue'
import { createApp } from 'vue'
import { setupCustomComponents } from '@/components'
import router, { setupRouter } from './router'
import { createDiscreteApi } from 'naive-ui'

import '@/styles/global.less'
import 'virtual:uno.css'

const di = () => {
  const { message, notification, dialog, loadingBar, modal } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'modal'],
    {
      messageProviderProps: {
        max: 3
      },
      notificationProviderProps: {
        max: 3
      }
    }
  )

  window.$message = message
  window.$notification = notification
  window.$dialog = dialog
  window.$modal = modal
}

const bootstrap = async () => {
  const app = createApp(App)

  setupCustomComponents(app)

  setupRouter(app)

  di()

  await router.isReady()

  app.mount('#app')
}

void bootstrap()
