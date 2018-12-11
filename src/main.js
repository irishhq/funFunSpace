// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
// import './lib/mui/css/mui.css'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem, Button } from "mint-ui"
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

/*使用axios来代替$http, axios支持session*/
import axios from "axios"//引入axios库,vueRource不支持session
axios.defaults.withCredentials = true;//记录session编号,ajax默认不保存session得值.
Vue.prototype.axios = axios;//相当于注册


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
