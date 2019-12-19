import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import shoppingRouter from './shopping'
import mineRouter from './mine'
import register from './register'


Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    base: 'miaomiao ',
    routes: [
        movieRouter,
        cinemaRouter,
        mineRouter,
        shoppingRouter,
        register,
        {
            path: '/movie/detail/3/:movieId',
            component: () => import('@/views/Movie/detail2'),
            props: {
                detail: true
            }
        },
        {
            path: '/movie/play',
            component: () => import('@/views/Movie/play'),
        },
        // 购物车
        {
            path: '/shopcar',
            component: () => import('@/views/Shopcar/index'),
        },
        {
            path: '/*',
            redirect: '/movie'
        }


    ]
})

export default router;
