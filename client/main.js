import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/large1'
        },
        {
            path: '/login',
            name:'login',
            component: require('./routers/login.vue')
        },
        {
            path: '/traffic',
            name:'traffic',
            component: require('./routers/traffic.vue')
        },
        {
            path: '/large1',
            name:'large1',
            component: require('./routers/large1.vue')
        },
        {
            path: '/large2',
            name:'large2',
            component: require('./routers/large2.vue')
        },
        {
            path: '/large3',
            name:'large3',
            component: require('./routers/large3.vue')
        },
        {
            path: '/large4',
            name:'large4',
            component: require('./routers/large4.vue')
        },
        {
            path: '/large5',
            name:'large5',
            component: require('./routers/large5.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
