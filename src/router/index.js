// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../views/Portfolio.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
    {
        path: '/',
        name: 'portfolio',
        component: Portfolio  // This makes Portfolio the default homepage
    },
    {
        path: '/project/:id',
        name: 'project',
        component: ProjectDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router