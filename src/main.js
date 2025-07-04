import App from './App.vue'
import { createApp } from 'vue'
import { setupComponents } from '@/components/index.js'
import { setupPinia } from './store/index.js'
import { setupRouter } from './router/index.js'

import '@/styles/global.less'
import '@/styles/transition.less'
import 'virtual:uno.css'

const bootstrap = async () => {
  const app = createApp(App)
  setupComponents(app)
  setupPinia(app)
  setupRouter(app)

  app.mount('#app')
}

void bootstrap()
