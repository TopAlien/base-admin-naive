import { h } from 'vue'

/**
 *
 * @param title 标题
 * @param content 提示内容
 * @param type 提示类型 success | warning | error
 * @param config 其他配置
 * @returns {Promise<unknown>}
 */
export const waitConfirmModal = ({ title = '警告', content = '你确定？', type = 'warning', ...config } = {}) => {
  return new Promise((resolve, reject) => {
    const ins = $dialog[type]({
      title,
      content,
      positiveText: '确定',
      negativeText: '取消',
      ...config,
      onPositiveClick: () => {
        ins.loading = true
        resolve()
      },
      onNegativeClick: () => {
        ins.loading = false
        reject()
      }
    })
  })
}

/**
 * @param render 需要渲染的component固定 emit['confirm', 'close']
 * @param props 渲染组件的props
 * @param title $modal标题
 * @param preset $modal类型 dialog | card
 * @param style $modal样式自定义
 * @param config modal其他配置
 * @returns {Promise<unknown>}
 */
export const invokeModal = (
  { render, ...props },
  { title = '添加', preset = 'card', style = { width: '500px' }, ...config } = {}
) => {
  return new Promise((resolve, reject) => {
    const modal = $modal.create({
      title,
      preset,
      style,
      ...config,
      content: () =>
        h(render, {
          ...props,
          onConfirm: (data) => {
            resolve(data)
            modal?.destroy()
          },
          onClose: () => {
            modal?.destroy()
            reject()
          }
        })
    })
  })
}
