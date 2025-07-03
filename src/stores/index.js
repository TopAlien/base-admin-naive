import { createPinia } from 'pinia'

const pinia = createPinia()

export const setupPinia = (app) => {
  app.use(pinia)
}
