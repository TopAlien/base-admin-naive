<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '查询表格'
    },
    hasPadding: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <div class="card">
    <div class="card_title">{{ title }}</div>
    <slot />
  </div>
</template>

<style scoped>
  .card {
    height: 100%;
    box-sizing: border-box;
    background-color: white;
    padding: v-bind('hasPadding ? "16px" : "0"');
    border: 0 solid rgb(229, 230, 235);
    border-width: v-bind('hasPadding ? "1px" : "0"');
  }

  .card_title {
    color: rgb(29, 33, 41);
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
</style>
