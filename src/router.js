import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboadPage from './pages/DashboardPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import TasksPage from './pages/TasksPage'
import CustomersPage from './pages/CustomersPage'
import ReleasesPage from './pages/ReleasesPage'
import TestPage from './pages/TestPage'
import RequestsPage from './pages/RequestsPage'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: DashboadPage
        },
        {
            path: '/projects',
            component: ProjectsPage
        },
        {
            path: '/project/:id',
            component: ProjectPage,
            props: true
        },
        {
            path: '/tasks',
            component: TasksPage
        },
        {
            path: '/customers',
            component: CustomersPage
        },
        {
            path: '/releases',
            component: ReleasesPage
        },
        {
            path: '/requests',
            component: RequestsPage
        },
        {
            path: '/test',
            component: TestPage
        },
    ]
})