import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Menutensao from '../view/Menutensao.vue'
import Resumo from '../view/Resumo.vue'

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
        path: '/resumo',
        name: 'Resumo',
        component: Resumo
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;