// import './assets/main.css'
// 引入全局样式
import '@styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
//路由
import router from './router'
//状态管理
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
