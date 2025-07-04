<script setup>
  import { ref, computed } from 'vue'
  import { SearchOutline } from '@vicons/ionicons5'
  import { routes } from '@/router'
  import { useRouter } from 'vue-router'
  import { flattenMenuItemsFn } from '@/utils/router-gen.js'

  const router = useRouter()
  let flattenMenuItems = []

  const keyword = ref('')
  const resultList = computed(() => {
    return flattenMenuItems.filter((item) => {
      const searchKey = keyword.value.toLowerCase()
      return item.meta?.title?.toLowerCase().includes(searchKey) || item.parentTitle?.toLowerCase().includes(searchKey)
    })
  })

  const visibleModal = ref(false)

  const search = () => {
    if (!flattenMenuItems.length) {
      flattenMenuItems = flattenMenuItemsFn(routes[0].children)
    }
    visibleModal.value = true
  }

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
      @click="search"
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
        placeholder="请输入菜单名称搜索"
        class="mb26px"
      >
        <template #prefix>
          <n-icon :component="SearchOutline" />
        </template>
      </n-input>

      <n-scrollbar style="max-height: 400px">
        <div
          v-for="item in resultList"
          :key="item.path"
          class="list_item"
          @click="go(item)"
        >
          <span v-if="item.parentTitle">{{ item.parentTitle }}&nbsp;&gt;&nbsp;</span>
          <span>{{ item?.meta?.title || '未知' }}</span>
        </div>
      </n-scrollbar>
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
