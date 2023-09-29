import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import LoginView from '../views/LoginView/LoginView.vue'
import ForgetPasswordView from '../views/ForgetPasswordView/ForgetPasswordView.vue'
import RegisterView from '../views/RegisterView/RegisterView.vue'
import MyProjectView from '../views/MyProjectView/MyProjectView.vue'
import ProjectView from '../views/ProjectView/ProjectView.vue'
import CreateProjectView from '../views/CreateProjectView/CreateProjectView.vue'
import AccountView from '../views/AccountView/AccountView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/forget-password',
    name: 'forget_password',
    component: ForgetPasswordView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/my-project',
    name: 'my_project',
    component: MyProjectView
  },
  {
    path: '/project-view-:id',
    name: 'project_view',
    component: ProjectView
  },
  {
    path: '/create-project',
    name: 'create_project',
    component: CreateProjectView
  },
  {
    path: '/my-account',
    name: 'my_account',
    component: AccountView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
