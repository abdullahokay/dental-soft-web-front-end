import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Booking from '../pages/BookingPage.vue'

const routes = [
  {
    path: '/overview',
    name: 'home',
    component: Home,
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router