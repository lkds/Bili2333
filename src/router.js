import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/Search.vue')
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('./components/VideoList.vue')
        },
        {
            path: '/result',
            name: 'result',
            component: () => import('./components/Result.vue')
        }
    ]
})

export default router