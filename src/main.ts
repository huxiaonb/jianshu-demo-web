import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { reflectiveInjectorPlugin } from '@tanbo/vue-di-plugin'

createApp(App).use(router).mount('#app')
