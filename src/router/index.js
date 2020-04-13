import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(Router);

/**
 * 重寫 router
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
    ],
});
