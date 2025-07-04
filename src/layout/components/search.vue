<script setup>
  import { ref, computed } from 'vue'
  import { SearchOutline } from '@vicons/ionicons5'
  import { useRouter } from 'vue-router'
  import { useMenuStore } from '@/store/modules/menu.js'

  const router = useRouter()
  const menuStore = useMenuStore()

  const flattenMenuItemsFn = (items) => {
    const result = []

    const flattenFn = (item) => {
      if (typeof item.show === 'boolean' && !item.show) return

      if (item.children && item.children.length > 0) {
        item.children.forEach(flattenFn)
        return
      }

      result.push({ ...item, children: undefined })
    }

    items.forEach(flattenFn)
    return result
  }

  const flattenMenuItems = flattenMenuItemsFn(menuStore.menuList)

  const keyword = ref('')
  const resultList = computed(() => {
    return flattenMenuItems.filter((item) => item.label?.toLowerCase().includes(keyword.value.toLowerCase()))
  })

  const visibleModal = ref(false)
  const go = (item) => {
    visibleModal.value = false
    router.push(item.path)
  }
</script>

<template>
  <div class="cursor-pointer">
    <n-input
      readonly
      round
      placeholder="菜单搜索"
      @click="visibleModal = true"
    >
      <template #prefix>
        <n-icon :component="SearchOutline" />
      </template>
    </n-input>
  </div>

  <n-modal
    v-model:show="visibleModal"
    style="width: 600px"
  >
    <n-card>
      <n-input
        v-model:value="keyword"
        clearable
        round
        placeholder="搜索"
        class="mb26px"
      >
        <template #prefix>
          <n-icon :component="SearchOutline" />
        </template>
      </n-input>

      <div
        v-for="item in resultList"
        :key="item.path"
        class="list_item"
        @click="go(item)"
      >
        {{ item.label }}
      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
  .list_item {
    height: 34px;
    line-height: 34px;
    padding: 0 16px;
    border: 1px solid rgb(224, 224, 230);
    margin-bottom: 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .list_item:hover {
    background-color: rgb(245, 245, 245);
  }
</style>
