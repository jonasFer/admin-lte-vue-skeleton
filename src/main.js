// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import './permission'
import EventBus from './lib/eventBus.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ptBr from 'element-ui/lib/locale/lang/pt-br'

Vue.use(Element, {
  size: 'medium',
  locale: ptBr
})

Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
