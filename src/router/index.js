import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Menutensao from '../view/Menutensao.vue'
import Controle from '../view/Controle.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/menutensao',
        name: 'Manutencao',
        component: Menutensao
    },
    {
        path: '/controle',
        name: 'Controle',
        component: Controle
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;