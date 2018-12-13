import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import resetPwd from '@/components/login/resetPwd'
import register from '@/components/login/register'
import Tabbar from '@/components/Tabbar'
import Home from '@/components/tabbar/Home'
import Purchase from '@/components/tabbar/Purchase'
import Mime from '@/components/tabbar/Mime'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/tabbar/home' },//重定向,指向home组件
    {
      path: '/tabbar',
      name: 'Tabbar',
      component: Tabbar,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'purchase',
          name: 'Purchase',
          component: Purchase
        },
        {
          path: 'mime',
          name: 'Mime',
          component: Mime
        }
      ]
    },
    { path: '/login', component: login },
    { path: '/resetPwd', component: resetPwd },
    { path: '/register', component: register }
  ]
})
