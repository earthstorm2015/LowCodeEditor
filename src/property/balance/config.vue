<script lang="ts" setup>
import { createCommonElement } from '@/property/commonElement'
import { listToElement } from '@/property/listToElement'
import { list } from './options'
const activeTab = ref('1')
const props = defineProps<{
  data: Balance
}>()
const { data } = toRefs(props)
const CommonRender = createCommonElement(data.value) // 通用配置项渲染函数
const ListConfigRender = listToElement(data.value, list) // 配置列表渲染函数
</script>

<template>
  <div class="balance-config">
    <div class="container">
      <CommonTitle title="我的积分" />
      <ElTabs v-model="activeTab" stretch>
        <ElTabPane label="内容设置" name="1">
          <ListConfigRender />
        </ElTabPane>
        <ElTabPane label="样式设置" name="2">
          <CommonCard>
            <CommonRender />
          </CommonCard>
        </ElTabPane>
      </ElTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.balance-config {
  .container {
  }
}
</style>
