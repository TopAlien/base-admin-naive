<script setup>
  import { NConfigProvider } from 'naive-ui'
  import { zhCN, dateZhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <router-view />
  </n-config-provider>
</template>
