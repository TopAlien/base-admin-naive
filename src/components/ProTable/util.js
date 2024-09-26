import { renderDate, renderDateRange, renderTag } from '@/utils'

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

export const isEmpty = (value) => {
  return (value ?? '') !== ''
}

export const setTableColumn = (columns) => {
  const result = []
  columns.forEach((column) => {
    if (!column.hideInTable) {
      if (!column.render && column.valueType === 'date') {
        column.render = (row) => renderDate(row[column.key], column.valueFormat)
      }

      // 时间选择器
      if (!column.render && column.valueType?.indexOf('range') !== -1) {
        column.render = (row) => renderDateRange([row[column.key[0]], row[column.key[1]]], column.valueFormat)
      }

      if (!column.render && column.valueType === 'select' && column.valueEnum) {
        column.render = (row) => renderTag(column.valueEnum[row[column.key]])
      }

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
