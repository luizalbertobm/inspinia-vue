import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboadPage from './components/pages/DashboardPage'
import ProjectsPage from './components/pages/ProjectsPage'
import ProjectPage from './components/pages/ProjectPage'
import TasksPage from './components/pages/TasksPage'
import CustomersPage from './components/pages/CustomersPage'
import ReleasesPage from './components/pages/ReleasesPage'
import TestPage from './components/pages/TestPage'
import RequestsPage from './components/pages/RequestsPage'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        { path: '/', component: DashboadPage },
        { path: '/projects', component: ProjectsPage },
        { path: '/project/:id', component: ProjectPage, props:true },
        { path: '/tasks', component: TasksPage },
        { path: '/customers', component: CustomersPage },
        { path: '/releases', component: ReleasesPage },
        { path: '/requests', component: RequestsPage },
        { path: '/test', component: TestPage },
    ]
})