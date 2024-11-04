import { h } from 'vue'

/** 二次确认等 */
export const waitConfirmModal = ({ title = '警告', content = '你确定？', type = 'warning', ...props } = {}) => {
  return new Promise((resolve, reject) => {
    const ins = $dialog[type]({
      title,
      content,
      positiveText: '确定',
      negativeText: '取消',
      ...props,
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
 * 渲染组件弹窗
 * @param {*} render 需要渲染的component固定 emit['confirm', 'close']
 * @param {*} param
 * @returns
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
