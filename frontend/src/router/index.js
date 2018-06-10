import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/authenticated',
      name: 'authenticated',
      component: Calendar
    }
  ]
})
