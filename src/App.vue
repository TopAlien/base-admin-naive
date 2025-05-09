<script setup>
  import { NConfigProvider } from 'naive-ui'
  import { zhCN, dateZhCN } from 'naive-ui'

  import { config } from '@/config'
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <router-view />
    <n-watermark
      v-if="config.watermark"
      :content="config.watermarkText"
      cross
      fullscreen
      :font-size="16"
      :line-height="16"
      :width="384"
      :height="384"
      :x-offset="12"
      :y-offset="60"
      :rotate="-15"
    />
  </n-config-provider>
</template>
