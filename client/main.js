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
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
