import { createRouter, createWebHashHistory } from 'vue-router'
import { AppRoutes } from './routes'
import { beforeEach, afterEach } from './guards'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_PATH),
  routes: AppRoutes
})
//路由前置守卫
router.beforeEach(beforeEach)
//路由后置守卫
router.afterEach(afterEach)
export default router
