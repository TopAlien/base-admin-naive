import { createApp } from 'vue'
import router from './router'
import globalComponent from '@/components/global'

import '@/styles/global.less'
import 'virtual:uno.css'

import App from './App.vue'

const app = createApp(App)

app.use(globalComponent)
app.use(router)

app.mount('#app')
