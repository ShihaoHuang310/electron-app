<template>
  <div>home</div>
  <div><el-button type="primary" @click="aboutClick">Primary</el-button></div>
</template>

<script setup>
import { useCache } from '@hooks/useCache'
import { useRouter } from 'vue-router'
const { wsCache } = useCache('localStorage')

const router = useRouter()
// 设置缓存，第三个参数对象配置的超时事件
wsCache.set('login', true, { exp: 100 })
// 获取缓存
wsCache.get('login')

const aboutClick = () => {
  router.push('/about')
}
</script>

<style lang="scss" scoped></style>
