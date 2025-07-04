import { createDiscreteApi } from 'naive-ui'
import ProTable from './pro-table/index.vue'

const setupDiscrete = () => {
  const { message, notification, dialog, modal, loadingBar } = createDiscreteApi(
    ['message', 'notification', 'modal', 'dialog', 'loadingBar'],
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
  window.$loadingBar = loadingBar
}

export const setupComponents = (app) => {
  setupDiscrete()

  app.component('ProTable', ProTable)
}
