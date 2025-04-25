import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";


const rootRoutes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
            title: '首页',
            caches: true,
        }
    },
    {
        path: 'assistant',
        name: 'Assistant',
        meta: {
            title: 'ai助手',
            cache: true
        },
        component: () => import('@/views/Assistant/Assistant.vue')
    },
    {
        path: 'shopping',
        name: 'Shopping',
        meta: {
            title: '书城',
            cache: true
        },
        component: () => import('@/views/Shop/Shopping.vue')
    },
    {
        path: 'mine',
        name: 'Mine',
        meta: {
            title: '个人中心',
            cache: false
        },
        component: () => import('@/views/My/Mine.vue')
    }
]



const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'App',
    component: () => import('../views/KeepAlive.vue'),
    redirect: '/home',
    children: rootRoutes
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes

})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string
    next()
})

export default router
