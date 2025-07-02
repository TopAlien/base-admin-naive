<script setup>
  const columns = [
    {
      type: 'selection'
    },
    {
      title: '状态',
      key: 'status',
      valueType: 'select',
      valueEnum: {
        1: { text: '状态1', type: 'default' },
        2: { text: '状态2', type: 'success' },
        3: { text: '状态3', color: 'red' },
        4: { text: '状态4', status: 'Default' }
      }
    },
    {
      title: '名称',
      key: 'name',
      hideInSearch: true
    },
    {
      title: '状态2',
      key: 'status2',
      valueEnum: {
        1: { text: '状态1', status: 'Default' },
        2: { text: '状态2', status: 'Success' },
        3: { text: '状态3', status: 'Default' },
        4: { text: '状态4', status: 'Default' }
      },
      hideInTable: true
    },
    {
      title: '时间',
      key: 'time3',
      valueType: 'date'
    },
    {
      title: '时间二',
      key: 'time',
      valueType: 'date'
    },
    {
      title: '时间区间',
      key: ['time', 'time2'],
      searchKey: 'timeArr',
      valueType: 'daterange'
    },
    {
      title: '操作'
    }
  ]

  const request = async (query) => {
    console.log('=>(test.vue:66) query', query)
    const res = await new Promise((resolve) =>
      resolve(
        Array.from({ length: 46 }).map((_, index) => ({
          id: index,
          key: index,
          name: `Edward King ${index}`,
          status: `${index}`,
          status2: `${index}`,
          time: Date.now(),
          time3: Date.now(),
          time2: Date.now()
        }))
      )
    )
    return {
      list: res,
      total: res.length
    }
  }

  const reload = () => {}

  const exportZ = () => {
    exportZip()
  }

  const checkRow = (rowKeys, rows) => {
    console.log('=>(test.vue:92) rowKeys, rows', rowKeys, rows)
  }
</script>
<template>
  <pro-table
    :columns="columns"
    :request="request"
    @update:checked-row-keys="checkRow"
  >
    <template #extra>
      <n-space>
        <n-button>哇咔咔</n-button>
        <n-button type="primary">新增</n-button>
      </n-space>
      <n-space>
        <n-button @click="reload">刷新</n-button>
        <n-button
          type="primary"
          @click="exportZ"
        >
          导出
        </n-button>
      </n-space>
    </template>
  </pro-table>
</template>
