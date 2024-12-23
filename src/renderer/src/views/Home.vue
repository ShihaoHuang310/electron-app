<template>
  <div>home</div>
  <div><el-button type="primary">Primary</el-button></div>
</template>

<script setup>
import { useCache } from '@hooks/useCache'
const { wsCache } = useCache('localStorage')
// 设置缓存，第三个参数对象配置的超时事件
wsCache.set('login', true, { exp: 100 })
// 获取缓存
wsCache.get('login')
</script>

<style lang="scss" scoped></style>
