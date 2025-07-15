<script setup>
  import { ref } from 'vue'
  import { BigNumber } from 'bignumber.js'

  const plus = ref({})
  const minus = ref({})
  const times = ref({})
  const div = ref({})
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

    <n-descriptions-item label="1.1 * 100">
      {{ 1.1 * 100 }}
      <p>{{ new BigNumber(1.1).times(100) }}</p>
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

    <n-descriptions-item label="1.1 * 100 - 0.9 * 100 ">
      {{ 1.1 * 100 - 0.9 * 100 }}
      <p>
        {{ new BigNumber(1.1).times(100).minus(new BigNumber(0.9).times(100)) }}
      </p>
    </n-descriptions-item>

    <n-descriptions-item label="+">
      <n-input v-model:value="plus.a" />
      <n-input v-model:value="plus.b" />
      {{ Number(plus.a) + Number(plus.b) }}
      <p>
        {{ new BigNumber(plus.a).plus(plus.b) }}
      </p>
    </n-descriptions-item>

    <n-descriptions-item label="-">
      <n-input v-model:value="minus.a" />
      <n-input v-model:value="minus.b" />
      {{ Number(minus.a) - Number(minus.b) }}
      <p>
        {{ new BigNumber(minus.a).minus(minus.b) }}
      </p>
    </n-descriptions-item>

    <n-descriptions-item label="*">
      <n-input v-model:value="times.a" />
      <n-input v-model:value="times.b" />
      {{ Number(times.a) * Number(times.b) }}
      <p>
        {{ new BigNumber(times.a).times(times.b) }}
      </p>
    </n-descriptions-item>

    <n-descriptions-item label="/">
      <n-input v-model:value="div.a" />
      <n-input v-model:value="div.b" />
      {{ Number(div.a) / Number(div.b) }}
      <p>
        {{ new BigNumber(div.a).div(div.b) }}
      </p>
    </n-descriptions-item>

    <n-descriptions-item></n-descriptions-item>
  </n-descriptions>
</template>
