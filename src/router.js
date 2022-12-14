import {createRouter, createWebHistory} from 'vue-router'

import Template from './modules/Template/Template.vue'
import Home from  './modules/Home/Home.vue'
import NewPage from "./modules/NewPag/NewPage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Template,
        meta: {},
        redirect: {name: 'Home'},
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
                meta: {},
            },
            {
                path: '/newpage/:id',
                name: 'NewPage',
                component: NewPage,
                meta: {},
            },
        ]
    },
]

const router = createRouter({ history: createWebHistory(), routes})

export default router