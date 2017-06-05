import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router'
import App from './app'

// 全局常用函数库
import './utils/common'

Vue.use(VueResource);

let Hub = new Vue(); //创建事件中心

new Vue({
  el: '#app',    //这里绑定的是index.html中的id为app的div元素
  router,
  render: h => h(App),
  data: {
     Hub: new Vue()
  }
});
