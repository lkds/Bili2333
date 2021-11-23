import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as echarts from 'echarts'
import 'element-plus/dist/index.css'
// import './mock'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.config.globalProperties.$echarts = echarts
app.mount('#app')