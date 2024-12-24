<template>
  <el-aside width="210px">
    <div class="search">
      <el-input v-model="filterText" placeholder="搜索" :prefix-icon="Search" clearable />
    </div>
    <el-tree
      ref="treeRef"
      class="filter-tree"
      :data="data"
      node-key="id"
      :props="defaultProps"
      :icon="ArrowRight"
      default-expand-all
      :filter-node-method="filterNode"
      :highlight-current="true"
      @node-click="handleNodeClick"
      empty-text="暂无数据"
    >
      <template #default="{ node, data }">
        <div :style="{ height: '38px', lineHeight: '38px', fontSize: '12px', color: '#1b1c23' }">
          <el-tooltip
            open-delay="{300}"
            :content="data.label"
            placement="top-end"
            :disabled="!!data.children"
          >
            <span
              :id="data.id"
              class="node"
              :style="{
                display: 'inline-block',
                marginTop: '4px',
                height: '30px',
                lineHeight: '30px',
                // width: '140px',
                borderRadius: '4px',
                position: 'relative',
                outline: 'none',
                border: !data.children ? '1px solid transparent' : 'none',
                userSelect: 'none',
              }"
            >
              <el-icon>
                <component
                  :is="data.children ? (node.expanded ? FolderOpened : Folder) : Document"
                />
              </el-icon>

              <span :style="{ fontSize: '13px', marginLeft: '10px' }">{{ data.label }}</span>
            </span>
          </el-tooltip>
        </div>
      </template>
    </el-tree>
  </el-aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElTree } from 'element-plus'
import {
  Search,
  ArrowRight,
  ArrowDown,
  FolderOpened,
  Folder,
  Document,
} from '@element-plus/icons-vue'
interface Tree {
  [key: string]: any
}

const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()
const defaultProps = {
  children: 'children',
  label: 'label',
}
watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
  if (!value) return true
  return data.label.includes(value)
}
const handleNodeClick = (node: any) => {
  console.log('handleNodeClick', node, treeRef.value)
}

const data: Tree[] = [
  {
    label: '我的实验',
    id: 'source',
    children: [
      {
        label: 'springleo',
        id: 'lq',
        icon: 'el-icon-coin',
        children: [
          {
            label: '新闻分类_4079',
            id: 'lq1',
            icon: 'el-icon-coin',
          },
        ],
      },
      {
        label: '基于对象特征的推荐_539',
        id: 'source1',
        icon: 'el-icon-coin',
      },
      {
        label: '新闻分类_4078',
        id: 'source2',
        icon: 'el-icon-coin',
      },
    ],
  },
]
</script>

<style lang="scss" scoped>
.el-aside {
  overflow: unset !important;
  width: unset !important;
}
::v-deep(.el-tree-node__content) {
  display: flex;
  align-items: center;
}
</style>
