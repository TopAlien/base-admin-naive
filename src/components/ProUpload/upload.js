import { uniqueId } from 'lodash-es'

/**
 * 补齐file-list
 */
export const fillFileList = (fileList) => {
  console.log('=>(upload.js:18) fileList', fileList)

  if (typeof fileList[0] === 'string') {
    return fileList.map((url) => ({ url, id: uniqueId('upload_'), status: 'finished', percentage: 100 }))
  } else {
    return fileList.map((it) => ({
      url: it.url,
      thumbnailUrl: it.thumbnailUrl,
      id: it.id || uniqueId('upload_'),
      status: 'finished',
      percentage: 100
    }))
  }
}

/**
 * @param file
 * @param size 单位MB, 默认3MB
 * @returns {boolean} 超出限制返回true
 */
export const limitFileSize = (file = {}, size = 3) => {
  const limit = file.size / 1024 / 1024 > size

  limit && $message.error(`文件大小不能超过${size}MB`)
  return limit
}

/**
 * @param file
 * @returns {boolean} 名称不通过时为true
 */
export const fileNamePass = (file) => {
  if (/[%&=+]/g.test(file.name)) {
    $message.error('文件名不能包含特殊字符%&=+')
    return true
  }
}

export const uploadRequest = ({ file }) => {
  return new Promise((resolve, reject) => {
    // const form = new FormData()
    // form.append('file', file)
    // form.append('data', JSON.stringify(data))

    const { id, name, type, batchId } = file
    setTimeout(() => {
      resolve({
        id,
        name,
        type,
        batchId,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        status: 'finished',
        percentage: 100
      })
    }, 5000)
  })
}
