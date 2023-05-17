import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Booking from '../pages/BookingPage.vue'
import Patients from '../pages/PatientsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking,
  },
  {
    path: '/patients',
    name: 'patients',
    component: Patients
  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router