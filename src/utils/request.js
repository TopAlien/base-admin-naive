import axios from 'axios'
import { waitConfirmModal } from '@/utils/modal.js'
import { getToken, removeToken } from './storage.js'

const ERROR_MSG = '服务器异常，未知错误！'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API + '/api/admin',
  timeout: 100000
})

service.interceptors.request.use(
  (config) => {
    config.headers['Token'] = getToken()

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

let hasModal = false
service.interceptors.response.use(
  async (response) => {
    const res = response.data

    if (+res.code !== 200) {
      if (+res.code === 401 && !hasModal) {
        hasModal = true
        await waitConfirmModal({ title: '登录过期', content: '是否重新登录？' })
        hasModal = false
        removeToken()
        window.location.href = '/login'
      }

      $message.error(res.msg || ERROR_MSG, { duration: 5000 })
      return Promise.reject(new Error(res.msg || ERROR_MSG))
    } else {
      return res.data
    }
  },
  (error) => {
    $message.error(error.msg || ERROR_MSG, { duration: 5000 })
    return Promise.reject(error)
  }
)

export default service
