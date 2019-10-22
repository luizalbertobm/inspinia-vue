import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboadPage from './components/pages/DashboardPage'
import ProjectsPage from './components/pages/ProjectsPage'
import TasksPage from './components/pages/TasksPage'
import CustomersPage from './components/pages/CustomersPage'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        { path: '/', component: DashboadPage },
        { path: '/tasks', component: TasksPage },
        { path: '/projects', component: ProjectsPage },
        { path: '/customers', component: CustomersPage },
    ]
})