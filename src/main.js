// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {cookie} from 'vux'
import * as config from './api/http'

/* ----------- Config ---------- */
import axios from 'axios';
import {LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'

// axios.defaults.baseURL = 'http://localhost:7890/';
axios.defaults.baseURL = '/api';
import VueScroller from 'vue-scroller'


Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(VueScroller);
/* ----------- Config ---------- */
Vue.config.productionTip = true;


// 省略...
router.afterEach(route => {
  // 从路由的元信息中获取 title 属性
  if (route.name) {
    document.title = route.name

    // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      const hackIframe = document.createElement('iframe')
      hackIframe.style.display = 'none';
      hackIframe.src = '/robots.txt?r=' + Math.random()

      document.body.appendChild(hackIframe)

      setTimeout(_ => {
        document.body.removeChild(hackIframe)
      }, 300)
    }
  }

});

router.beforeEach((to, from, next) => {
  // if (!cookie.get('unionid') && !config.dev) {
  //   // location.href = 'http://thu.prguanjia.com/home?callback=' + location.href
  //   window.location.href = 'http://www.baidu.com';
  //   return;
  // }
  next()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
