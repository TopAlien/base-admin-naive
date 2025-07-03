<script setup>
  import BarChart from '@/components/charts/bar-chart.vue'
  import PieChart from '../components/charts/pie-chart.vue'
  import CrChart from '../components/charts/cr.vue'
</script>

<template>
  <div>
    <div class="flex justify-between gap20px">
      <n-card title="卡片">
        <BarChart />
      </n-card>

      <n-card title="卡片">
        <BarChart />
      </n-card>

      <n-card title="卡片">
        <BarChart />
      </n-card>
    </div>

    <div class="flex justify-between gap20px mt20px">
      <n-card>
        <PieChart />
      </n-card>

      <n-card>
        <PieChart />
      </n-card>

      <n-card>
        <PieChart />
      </n-card>
    </div>

    <n-card class="mt20px">
      <CrChart />
    </n-card>
  </div>
</template>
