import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';

const navRoutes = [
    { name: 'Home', href: '/', current: false, component: HomeView },
    { name: 'About', href: '/about', current: false, component: AboutView },
]

const routes = navRoutes.map((item) => ({ path: item.href, component: item.component }));
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router, routes, navRoutes };