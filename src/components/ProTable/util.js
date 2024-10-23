import dayjs from 'dayjs'
import { renderTag } from '@/utils'
import { isEmpty } from 'lodash-es'

const timeFormat = (time, format) => {
  return dayjs(time).format(format || 'YYYY-MM-DD HH:mm:ss')
}

export const setTableColumn = (columns) => {
  const result = []
  columns.forEach((column) => {
    if (!column.hideInTable) {
      if (!column.render && column.valueType === 'date') {
        column.render = (row) => timeFormat(row[column.key], column.valueFormat)
      }

      // 时间选择器
      if (!column.render && column.valueType?.indexOf('range') !== -1) {
        column.render = (row) =>
          timeFormat(row[column.key[0]], column.valueFormat) +
          ' - ' +
          timeFormat(row[column.key[1]], column.valueFormat)
      }

      if (!column.render && column.valueType === 'select' && column.valueEnum) {
        column.render = (row) => renderTag(column.valueEnum[row[column.key]])
      }

      if(!column.render) {
        column.render = (row) => isEmpty(row[column.key]) ? '-' : row[column.key]
      }

      column.align = 'center'

      result.push(column)
    }
  })

  return result
}

export const setSearchColumn = (columns) => {
  const result = []
  columns.forEach((column) => {
    if (!column.hideInSearch) {
      if (column.valueType === 'select' && column.valueEnum) {
        column.options = Object.keys(column.valueEnum).map((key) => {
          return {
            label: column.valueEnum[key]?.text || '无text',
            value: key
          }
        })
      }

      result.push(column)
    }
  })

  return result
}
