import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/intro',
    name: 'intro',

    component: () => import( '../views/IntroView.vue')
  },
  {
    path: '/quick-hunt',
    name: 'quick-hunt',

    component: () => import( '../views/HuntView.vue')
  },
  {
    path: '/ccm',
    name: 'ccm',
    component: () => import( '../views/ListView.vue')
  },
  {
    path: '/ccm-inventory',
    name: 'ccm-inventory',
    component: () => import( '../views/AutoInventoryView.vue')
  },
  {
    path: '/ccm-history',
    name: 'ccm-history',
    component: () => import( '../views/AutoHistoryView.vue')
  },
  
  {
    path: '/ccm-jobs',
    name: 'ccm-job',
    component: () => import( '../views/AutoJobsView.vue')
  },
  {
    path: '/leaderboards',
    name: 'leaderboards',
    component: () => import( '../views/LeaderShipView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( '../views/DashBoardView.vue')
  },
  {
    path: '/log-source-coverage',
    name: 'log-source-coverage',
    component: () => import( '../views/LogSourceView.vue')
  },
  {
    path: '/mitre-coverage',
    name: 'mitre-coverage',
    component: () => import( '../views/MitreAttackView.vue')
  },
  {
    path: '/expert',
    name: 'expert',
    component: () => import( '../views/SearchView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
