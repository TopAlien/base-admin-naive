<script setup>
  import { BigNumber } from 'bignumber.js'
</script>

<template>
  <n-descriptions
    title="bignumer.js"
    bordered
  >
    <n-descriptions-item label="0.1 + 0.2">
      {{ 0.1 + 0.2 }}
      <p>{{ new BigNumber(0.1).plus(0.2) }}</p>
    </n-descriptions-item>

    <n-descriptions-item label="1.1 - 0.2">
      {{ 1.1 - 0.2 }}
      <p>{{ new BigNumber(1.1).minus(0.2) }}</p>
    </n-descriptions-item>

    <n-descriptions-item label="12.12 / 100">
      {{ 12.12 / 100 }}
      <p>{{ new BigNumber(12.12).div(100) }}</p>
    </n-descriptions-item>

    <n-descriptions-item label="1.1 / 100">
      {{ 1.1 / 100 }}
      <p>{{ new BigNumber(1.1).div(100) }}</p>
    </n-descriptions-item>

    <n-descriptions-item label="0.9 / 100">
      {{ 0.9 / 100 }}
      <p>{{ new BigNumber(0.9).div(100) }}</p>
    </n-descriptions-item>
  </n-descriptions>
</template>
