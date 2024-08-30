import { createMemoryHistory, createRouter } from 'vue-router'

// -------- ------------- ---------- ---------------
// import your custom views
import HomeView from './components/HomeView.vue';
import ContentView from './components/ContentView.vue';
import AboutView from './components/AboutView.vue';

// add your routes
const navRoutes = [
    { name: 'Home', href: '/', current: false, component: HomeView },
    { name: 'Projects', href: '/projects', current: false, component: ContentView },
    { name: 'Blog', href: '/blog', current: false, component: ContentView },
    { name: 'About', href: '/about', current: false, component: AboutView },
]
// -------- ------------- ---------- ---------------

const routes = navRoutes.map((item) => ({ path: item.href, component: item.component }));
const router = createRouter({
    history: createMemoryHistory(),
    routes,
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
})

export { router, routes, navRoutes };