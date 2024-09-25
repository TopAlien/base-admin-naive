<script setup>
  import { h } from 'vue'
  import { NIcon } from 'naive-ui'
  import { BookOutline as BookIcon, PersonOutline as PersonIcon, WineOutline as WineIcon } from '@vicons/ionicons5'

  function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) })
  }

  const menuOptions = [
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon(BookIcon)
    },
    {
      label: '1973年的弹珠玩具',
      key: 'pinball-1973',
      icon: renderIcon(BookIcon),
      children: [
        {
          label: '鼠',
          key: 'rat'
        },
        {
          type: 'group',
          label: '人物',
          key: 'people',
          children: [
            {
              label: '叙事者',
              key: 'narrator',
              icon: renderIcon(PersonIcon)
            },
            {
              label: '羊男',
              key: 'sheep-man',
              icon: renderIcon(PersonIcon)
            }
          ]
        }
      ]
    },
    {
      label: '寻羊冒险记',
      key: 'a-wild-sheep-chase',
      icon: renderIcon(BookIcon)
    },
    {
      label: '舞，舞，舞',
      key: 'dance-dance-dance',
      icon: renderIcon(BookIcon),
      children: [
        {
          type: 'group',
          label: '人物',
          key: 'people',
          children: [
            {
              label: '叙事者',
              key: 'narrator',
              icon: renderIcon(PersonIcon)
            },
            {
              label: '羊男',
              key: 'sheep-man',
              icon: renderIcon(PersonIcon)
            }
          ]
        },
        {
          label: '饮品',
          key: 'beverage',
          icon: renderIcon(WineIcon),
          children: [
            {
              label: '威士忌',
              key: 'whisky'
            }
          ]
        },
        {
          label: '食物',
          key: 'food',
          children: [
            {
              label: '三明治',
              key: 'sandwich'
            }
          ]
        },
        {
          label: '过去增多，未来减少',
          key: 'the-past-increases-the-future-recedes',
          children: [
            {
              type: 'group',
              label: '人物',
              key: 'people',
              children: [
                {
                  label: '叙事者',
                  key: 'narrator',
                  icon: renderIcon(PersonIcon)
                },
                {
                  label: '羊男',
                  key: 'sheep-man',
                  icon: renderIcon(PersonIcon)
                }
              ]
            }
          ]
        }
      ]
    }
  ]
</script>

<template>
  <n-layout-header class="layout_header">header</n-layout-header>
  <n-layout has-sider>
    <n-layout-sider
      class="side_content"
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="220"
      :native-scrollbar="false"
    >
      <n-menu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-content
        class="layout_content"
        :native-scrollbar="false"
        content-style="height: 100%; padding: 16px 16px 0;"
      >
        <router-view />
      </n-layout-content>
      <n-layout-footer class="layout_footer">Base Admin ©2024 Created by NuoMi</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style lang="less" scoped>
  .layout_header {
    height: @header-height;
    line-height: @header-height;
    text-align: center;
    border-bottom: 1px solid rgb(229, 230, 235);
  }

  .side_content {
    height: calc(100vh - @header-height);
  }

  .layout_content {
    height: calc(100vh - @header-height - @footer-height);
    background-color: @main-bg;
  }

  .layout_footer {
    height: @footer-height;
    line-height: @footer-height;
    text-align: center;
    background-color: @main-bg;
  }
</style>
