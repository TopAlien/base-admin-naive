import dayjs from 'dayjs'

export const isEmpty = (value) => {
  return (value ?? '') === ''
}

export const omitEmpty = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (!isEmpty(obj[key])) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
}

export const isDateInput = (valueType) => {
  return [
    'date',
    'datetime',
    'daterange',
    'datetimerange',
    'month',
    'monthrange',
    'year',
    'yearrange',
    'quarter',
    'quarterrange',
    'week'
  ].includes(valueType)
}

export const toNum = (val) => {
  return isNaN(+val) ? val : +val
}

export const toValueEnum = (map) => {
  const obj = {}
  Object.keys(map).forEach((key) => {
    obj[key] = { text: map[key], value: toNum(key) }
  })
  return obj
}

export const enumToOption = (valueEnum) => {
  return Object.keys(valueEnum).map((key) => {
    /**
     * 兼容
     * { 1: { text: '是', status: 'Success' } }
     * { 1: '是'   }
     */
    return {
      label: valueEnum[key]?.text || valueEnum[key] || '无text',
      value: toNum(key)
    }
  })
}

export const formatTime = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
  return time ? dayjs(time).format(format) : null
}

export const isVideo = (url) => {
  return /(\.avi|\.mov|\.mp4|\.m4v|\.flv)/i.test(url)
}

export const getVideoCover = (url) => {
  return url + '?x-oss-process=video/snapshot,t_0,f_jpg,w_0,h_0,m_fast,ar_auto'
}
