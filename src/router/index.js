import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../views/Portfolio.vue'

const routes = [
    {
        path: '/',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/project/MedicationDashboard',
        name: 'MedicationDashboard',
        component: () => import('../views/MedicationDashboard.vue')
    },
    {
        path: '/project/MultiplatformSolution',
        name: 'MultiplatformSolution',
        component: () => import('../views/MultiplatformSolution.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router