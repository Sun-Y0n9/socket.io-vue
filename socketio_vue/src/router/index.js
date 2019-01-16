import Vue from 'vue'
import Router from 'vue-router'
import socket from '@/pages/socket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'socket',
      component: socket
    }
  ]
})
