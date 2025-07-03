import App from './App.vue'
import { createApp } from 'vue'
import { setupComponents } from '@/components/index.js'
import router, { setupRouter } from './router/index.js'

import '@/styles/global.less'
import '@/styles/transition.less'
import 'virtual:uno.css'

const bootstrap = async () => {
  const app = createApp(App)

  setupComponents(app)
  setupRouter(app)

  await router.isReady()

  app.mount('#app')
}

void bootstrap()
