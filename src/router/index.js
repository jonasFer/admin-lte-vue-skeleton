import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../pages/Dashboard'
import Empresa from '../pages/configuracao/Empresa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/configuracao/empresa',
      name: 'config-empresa',
      component: Empresa
    }
  ],
  linkActiveClass: 'active'
})
