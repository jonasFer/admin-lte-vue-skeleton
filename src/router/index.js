import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import('../pages/login/Login'),
      name: 'login'
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../pages/Dashboard')
        }
      ]
    },
    {
      path: '/configuracao/empresa',
      component: Layout,
      children: [
        {
          path: '',
          name: 'config-empresa',
          component: () => import('../pages/configuracao/Empresa')
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
