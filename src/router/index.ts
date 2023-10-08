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
import AllProjectsView from '../views/AllProjectsView/AllProjectsView.vue'
import AllFreelancersView from '../views/AllFreelancersView/AllFreelancersView.vue'
import ProjectsView from '../views/ProjectsView/ProjectsView.vue'

import store from '@/store'; 
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
    component: ChangePasswordView,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/my-project',
    name: 'my_project',
    component: MyProjectView,
    meta: { requiresAuth: true }
  },
  {
    path: '/project/:id',
    name: 'ProjectView',
    component: ProjectView,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/create-project',
    name: 'create_project',
    component: CreateProjectView,
    meta: { requiresAuth: true }
  },
  {
    path: '/create-experience',
    name: 'create_experience',
    component: CreateExperienceView,
    meta: { requiresAuth: true }
  },
  {
    path: '/create-education',
    name: 'create_education',
    component: CreateEducationView,
    meta: { requiresAuth: true }
  },
  {
    path: '/create-others',
    name: 'create_others',
    component: CreateOthersView,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-experience/:id',
    name: 'edit_experience',
    component: EditExperienceView,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-education/:id',
    name: 'edit_education',
    component: EditEducationView,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-others',
    name: 'edit_others',
    component: EditOthersView,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-project',
    name: 'edit-project',
    component: EditProjectView,
    meta: { requiresAuth: true }
  },
  {
    path: '/my-account',
    name: 'my_account',
    component: AccountView,
    meta: { requiresAuth: true }
  },
  {
    path: '/freelancer-project',
    name: 'freelancer-project',
    component: FreelancerProject
  },
  {
    path: '/freelancer/:freelancer_id',
    name: 'freelancer',
    props: true,
    component: FreelancerView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/expertise-skills',
    name: 'expertise-skills',
    component: SkillsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/all-projects',
    name: 'all-projects',
    component: AllProjectsView
  },
  {
    path: '/freelancers',
    name: 'all-freelancers',
    component: AllFreelancersView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function isAuthenticated() {
  return store.state.is_login;
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated()) {
    // Redirect to login page if the route requires authentication and the user is not authenticated
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
