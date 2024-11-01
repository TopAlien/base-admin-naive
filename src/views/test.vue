<script setup>
  const columns = [
    {
      title: '状态',
      key: 'status',
      valueType: 'select',
      valueEnum: {
        1: { text: '状态1', type: 'default' },
        2: { text: '状态2', type: 'success' },
        3: { text: '状态3', color: 'red' },
        4: { text: '状态4', status: 'Default' }
      },
      editable: true
    },
    {
      title: '名称',
      key: 'name',
      hideInSearch: true,
      copyable: true
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
      valueType: 'date',
      valueFormat: 'YYYY-MM-DD HH:mm',
      copyable: true
    },
    {
      title: '时间二',
      key: 'time',
      valueType: 'date',
      copyable: true
    },
    {
      title: '时间区间',
      key: ['time', 'time2'],
      searchKey: 'timeArr',
      valueType: 'daterange',
      copyable: true
    }
  ]

  const request = async (query) => {
    const res = await new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          Array.from({ length: 46 }).map((_, index) => ({
            key: index,
            name: `Edward King ${index}`,
            status: `${index}`,
            status2: `${index}`,
            time: Date.now(),
            time3: Date.now(),
            time2: Date.now()
          }))
        )
      }, 1000)
    )
    return {
      data: res,
      total: res.length
    }
  }

  const reload = () => {}
</script>
<template>
  <pro-table
    :columns="columns"
    :request="request"
  >
    <template #extraL>
      <n-button>哇咔咔</n-button>
      <n-button type="primary">新增</n-button>
    </template>

    <template #extraR>
      <n-button @click="reload">刷新</n-button>
      <n-button type="primary">导出</n-button>
    </template>
  </pro-table>
</template>
