import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash
          }
        }
      },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/Search.vue')
        },
        {
            path: '/result',
            name: 'result',
            component: () => import('./components/Result.vue'),
            children: [
                {
                    path:'/intro',
                    name: 'intro',
                    component: () => import('./components/Intro.vue')
                },
                {
                    path:'/analysis',
                    name: 'analysis',
                    component: () => import('./components/Analysis.vue')
                },
                {
                    path:'/point',
                    name: 'point',
                    component: () => import('./components/Point.vue')
                }
            ]
        }
    ]
})

export default router