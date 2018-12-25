// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import axios from "axios" /*引入axios库,vueRource不支持session*/
import Vuex from "vuex" /*引入Vuex*/
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem, Button } from "mint-ui"
Vue.use(Vuex);  /*注册vuex*/
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

axios.defaults.withCredentials = true;//记录session编号,ajax默认不保存session得值.
Vue.prototype.axios = axios;//相当于注册

var store = new Vuex.Store({
  state: {

  },
  mutations: {

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
