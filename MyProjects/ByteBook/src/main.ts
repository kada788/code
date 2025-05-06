import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'wc-waterfall'
import lazy from './directives/lazy'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.directive('lazy', lazy)
app.mount('#app')

