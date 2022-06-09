import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reflectiveInjectorPlugin } from '@tanbo/vue-di-plugin'
import {Http} from "@/services/Http";
function getBaseURL () {
    if (process.env.MOCK) {
        return '/mock'
    }

    if (process.env.NODE_ENV === 'development') {
        return '/api'
    }

    if (process.env.TEST) {
        const protocol = typeof window !== 'undefined' ? window.location.protocol : 'http:'
        return `${protocol}//localhost/api`
    }

    return 'http://localhost/api'
}

const app = createApp(App);
const http = new Http({
    baseURL: getBaseURL()
}, router)
app.use(reflectiveInjectorPlugin, [{
    provide: Http,
    useValue: http
}]).use(router).mount('#app')
