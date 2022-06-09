import {createRouter, createWebHistory, RouteRecordRaw, START_LOCATION} from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'List',
    component: () => import(/* webpackChunkName: "List" */ '../views/list/list.vue')
  },
  {
    path: '/article/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "Detail" */ '../views/detail/detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
