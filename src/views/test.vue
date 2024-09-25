<script setup>
  import { ref, h } from 'vue'

  const createCol = () => {
    return [
      {
        type: 'selection',
        fixed: 'left'
      },
      {
        title: 'Name',
        key: 'name',
        width: 200,
        fixed: 'left'
      },
      {
        title: 'Age',
        key: 'age',
        width: 100,
        fixed: 'left'
      },
      {
        title: 'Row',
        key: 'row',
        render(row, index) {
          return h('span', ['row ', index])
        }
      },
      {
        title: 'Row1',
        key: 'row1',
        render(row, index) {
          return h('span', ['row ', index])
        }
      },
      {
        title: 'Row2',
        key: 'row2',
        render(row, index) {
          return h('span', ['row ', index])
        },
        width: 100,
        fixed: 'right'
      },
      {
        title: 'Address',
        key: 'address',
        width: 200,
        fixed: 'right'
      }
    ]
  }

  const columns = ref(createCol())
  const pagination = ref({ pageSize: 20 })
  const data = ref(
    Array.from({ length: 46 }).map((_, index) => ({
      key: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`
    }))
  )
</script>
<template>
  <pro-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
  >
    <template #search>
      <div>
        模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框模拟搜索框
      </div>
    </template>

    <template #extraL>
      <n-button>哇咔咔</n-button>
      <n-button type="primary">新增</n-button>
    </template>

    <template #extraR>
      <n-button>刷新</n-button>
      <n-button type="primary">导出</n-button>
    </template>
  </pro-table>
</template>
