import ProTable from './ProTable/index.vue'
import Card from './Card/index.vue'

export const setupCustomComponents = (app) => {
  app.component('ProTable', ProTable)
  app.component('Card', Card)
}
