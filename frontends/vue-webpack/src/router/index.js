import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dashboard from '@/pages/dashboard'
import scoreboard from '@/pages/scoreboard'
import rules from '@/pages/rules'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/scoreboard',
      name: 'scoreboard',
      component: scoreboard
    },
    {
      path: '/rules',
      name: 'rules',
      component: rules
    }
  ]
})
