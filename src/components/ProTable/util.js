import dayjs from 'dayjs'
import { isEmpty, enumToOption } from '@/utils'
import { renderImage, renderTag } from '@/utils/render'

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

      // 时间区间选择器
      if (!column.render && column.valueType && column.valueType?.indexOf('range') !== -1) {
        column.render = (row) =>
          timeFormat(row[column.key[0]], column.valueFormat) +
          ' - ' +
          timeFormat(row[column.key[1]], column.valueFormat)
      }

      if (!column.render && column.valueType === 'select' && column.valueEnum) {
        column.render = (row) => renderTag(column.valueEnum[row[column.key]])
      }

      if (!column.render && !column.valueType && column.valueEnum) {
        column.render = (row) => renderTag(column.valueEnum[row[column.key]])
      }

      if (!column.render && column.valueType === 'boolean') {
        column.render = (row) => (row[column.key] ? '是' : '否')
      }

      if (!column.render && column.valueType === 'image') {
        column.render = (row) => renderImage(row[column.key])
      }

      // 👇位置谨慎修改，渲染逻辑👆新增
      if (!column.render) {
        column.render = (row) => (isEmpty(row[column.key]) ? '-' : row[column.key])
      }

      if (column.title === '操作' && !column.fixed) {
        column.fixed = 'right'
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
    if (!column.hideInSearch && column.title !== '操作' && column.type !== 'selection') {
      if (column.valueType === 'select' && column.valueEnum) {
        column.options = enumToOption(column.valueEnum)
      }

      result.push(column)
    }
  })

  return result
}
