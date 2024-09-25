<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '查询表格'
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
    border: 1px solid rgb(229, 230, 235);
    padding: 16px;
    box-sizing: border-box;
    background-color: white;
  }

  .card_title {
    color: rgb(29, 33, 41);
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
</style>
