export const AppRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@renderer/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@renderer/views/About.vue')
  }
]
