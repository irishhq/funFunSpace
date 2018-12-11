import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import resetPwd from '@/components/login/resetPwd'
import register from '@/components/login/register'
import home from '@/components/tabbar/home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },//重定向,指向home组件
    { path: '/home', component: home },
    { path: '/login', component: login },
    { path: '/resetPwd', component: resetPwd },
    { path: '/register', component: register }
  ]
})
