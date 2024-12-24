export const AppRoutes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@renderer/views/Layout.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@renderer/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@renderer/views/About.vue'),
  },
]
