import App from './App.vue'
import { createApp } from 'vue'
import { setupCustomComponents } from '@/components'
import router, { setupRouter } from './router'

import '@/styles/global.less'
import 'virtual:uno.css'

const bootstrap = async () => {
  const app = createApp(App)

  setupCustomComponents(app)

  setupRouter(app)

  await router.isReady()

  app.mount('#app')
}

void bootstrap()
