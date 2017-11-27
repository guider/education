import Vue from 'vue'
import Router from 'vue-router'
import TestHome from '../pages/activity/test/TestHome.vue'
import Splash from '../pages/activity/test/Splash.vue'
import Result from '../pages/activity/test/Result.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: '首页',
      component: Splash,
      meta: {
        navHidden: true,
      }
    },

    {
      path: '/level/:level',
      name: '测试',
      component: TestHome,
      meta: {
        navHidden: true,
      }
    }, {
      path: '/splash',
      name: '首页',
      component: Splash,
      meta: {
        navHidden: true,
      }
    }, {
      path: '/result',
      name: '评分',
      component: Result,
      meta: {
        navHidden: true,
      }
    }
  ]
})
