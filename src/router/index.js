import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Form from '../views/NewRequest.vue'
import Suport from '../views/Suport.vue'
import Ticket from '../views/Tickets.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  ,
  {
    path: '/register',
    name: 'register',
    component: Register
  }
  ,
  {
    path: '/form',
    name: 'form',
    component: Form
  }
  ,
  {
    path: '/suport',
    name: 'suport',
    component: Suport
  }
  ,
  {
    path: '/ticket',
    name: 'ticket',
    component: Ticket
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
