import { createDiscreteApi } from 'naive-ui'
import ProTable from './pro-table/index.vue'

const setupDiscrete = () => {
  const { message, notification, dialog, modal } = createDiscreteApi(['message', 'notification', 'modal', 'dialog'], {
    messageProviderProps: {
      max: 3
    },
    notificationProviderProps: {
      max: 3
    }
  })

  window.$message = message
  window.$notification = notification
  window.$dialog = dialog
  window.$modal = modal
}

export const setupComponents = (app) => {
  setupDiscrete()

  app.component('ProTable', ProTable)
}
