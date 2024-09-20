import { createApp } from 'vue'
import router from './router'

import '@/styles/global.less'
import 'virtual:uno.css'

import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
