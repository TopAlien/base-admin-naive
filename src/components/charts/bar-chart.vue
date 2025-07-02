<script setup>
  import { ref, onMounted } from 'vue'
  import VChart from '@/library/chart'

  const vChartDom = ref()
  const initVChart = () => {
    const spec = {
      type: 'bar',
      padding: 0,
      data: [
        {
          id: 'id0',
          values: [
            { x: '1', y: 22 },
            { x: '2', y: 43 },
            { x: '3', y: 33 },
            { x: '4', y: 22 },
            { x: '5', y: 10 },
            { x: '6', y: 30 },
            { x: '7', y: 46 },
            { x: '8', y: 21 },
            { x: '9', y: 33 },
            { x: '10', y: 43 },
            { x: '11', y: 42 },
            { x: '12', y: 30 },
            { x: '13', y: 9 },
            { x: '14', y: 46 }
          ]
        }
      ],
      xField: ['x'],
      yField: 'y',
      axes: [
        { orient: 'bottom', type: 'band' },
        { orient: 'left', type: 'linear' }
      ]
    }

    const vchart = new VChart(spec, { dom: vChartDom.value })

    vchart.renderSync()
  }

  onMounted(() => {
    initVChart()
  })
</script>

<template>
  <div ref="vChartDom" />
</template>
