import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import LoginView from '../views/LoginView/LoginView.vue'
import ForgetPasswordView from '../views/ForgetPasswordView/ForgetPasswordView.vue'
import ChangePasswordView from '../views/ChangePasswordView/ChangePasswordView.vue'
import RegisterView from '../views/RegisterView/RegisterView.vue'
import MyProjectView from '../views/MyProjectView/MyProjectView.vue'
import ProjectView from '../views/ProjectView/ProjectView.vue'
import CreateProjectView from '../views/CreateProjectView/CreateProjectView.vue'
import CreateExperienceView from '../views/CreateExperienceView/CreateExperienceView.vue'
import CreateEducationView from '../views/CreateEducationView/CreateEducationView.vue'
import CreateOthersView from '../views/CreateOthersView/CreateOthersView.vue'
import EditExperienceView from '../views/EditExperienceView/EditExperienceView.vue'
import EditEducationView from '../views/EditEducationView/EditEducationView.vue'
import EditOthersView from '../views/EditOthersView/EditOthersView.vue'
import EditProjectView from '../views/EditProjectView/EditProjectView.vue'
import AccountView from '../views/AccountView/AccountView.vue'
import FreelancerProject from '../views/FreelancerProject/FreelancerProject.vue'
import FreelancerView from '../views/FreelancerView/FreelancerView.vue'
import SkillsView from '../views/SkillsView/SkillsView.vue'
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
    path: '/change-password',
    name: 'change_password',
    component: ChangePasswordView
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
    path: '/project/:id',
    name: 'ProjectView',
    component: ProjectView,
    props: true // This ensures that the `:id` parameter is passed as a prop to the ProjectView component
  },
  {
    path: '/create-project',
    name: 'create_project',
    component: CreateProjectView
  },
  {
    path: '/create-experience',
    name: 'create_experience',
    component: CreateExperienceView
  },
  {
    path: '/create-education',
    name: 'create_education',
    component: CreateEducationView
  },
  {
    path: '/create-others',
    name: 'create_others',
    component: CreateOthersView
  },
  {
    path: '/edit-experience/:id',
    name: 'edit_experience',
    component: EditExperienceView
  },
  {
    path: '/edit-education/:id',
    name: 'edit_education',
    component: EditEducationView
  },
  {
    path: '/edit-others',
    name: 'edit_others',
    component: EditOthersView
  },
  {
    path: '/edit-project',
    name: 'edit-project',
    component: EditProjectView
  },
  {
    path: '/my-account',
    name: 'my_account',
    component: AccountView
  },
  {
    path: '/freelancer-project',
    name: 'freelancer-project',
    component: FreelancerProject
  },
  {
    path: '/freelancer',
    name: 'freelancer',
    component: FreelancerView
  },
  {
    path: '/expertise-skills',
    name: 'expertise-skills',
    component: SkillsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
