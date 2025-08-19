import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/theme.css'
import 'boxicons/css/boxicons.min.css' // CDN possible aussi


createApp(App).use(router).mount('#app')
