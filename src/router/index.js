import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from '../views/TopPage.vue'
import DevCourse from '../views/DevCourse.vue'
import LabCourse from '../views/LabCourse.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: TopPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/devcourse',
    name: 'dev',
    component: DevCourse
  },
  {
    path: 'labcourse',
    name: 'lab',
    component: LabCourse
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
