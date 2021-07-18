import {createWebHistory, createRouter} from "vue-router";
// App Pages
import Earth from '../Pages/Earth.vue'
import Jupiter from '../Pages/Jupiter.vue'
import Mars from '../Pages/Mars.vue'
import Mercury from '../Pages/Mercury.vue'
import Neptune from '../Pages/Neptune.vue'
import Saturne from '../Pages/Saturne.vue'
import Uranus from '../Pages/Uranus.vue'
import Venus from '../Pages/Venus.vue'
import Home from '../Pages/Home.vue'

// import DefaultLayout from '../layouts/Pages.vue'

export const routes = [
    { path: '/planets-fact', component: Home, meta: {layout: 'home'} },
    { path: '/earth', component: Earth },
    { path: '/jupiter', component: Jupiter },
    { path: '/mars', component: Mars },
    { path: '/mercury', component: Mercury },
    { path: '/neptune', component: Neptune },
    { path: '/saturne', component: Saturne },
    { path: '/uranus', component: Uranus },
    { path: '/venus', component: Venus },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
