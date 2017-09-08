import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dashboard from '@/pages/dashboard'
import scoreboard from '@/pages/scoreboard'
import rules from '@/pages/rules'
import login from '@/pages/login'
import user from '@/pages/user'
import auth from '../store/modules/auth'

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
      component: dashboard,
      beforeEnter: (to, from, next) => {
        const authenticated = auth.state.isAuthenticated
        if (authenticated) {
          next()
        } else {
          next(login)
        }
      }
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
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
