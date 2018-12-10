import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import ResetPwd from '@/components/login/ResetPwd'
import Register from '@/components/login/Register'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/resetPwd', component: ResetPwd },
    { path: '/register', component: Register }
  ]
})
