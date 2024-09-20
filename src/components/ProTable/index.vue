<script setup></script>

<template>
  <div class="h-full flex flex-col">
    <slot name="search" />
    <n-data-table
      class="flex-1 h-full"
      flex-height
      v-bind="$attrs"
    />
  </div>
</template>
