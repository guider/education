import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestHome from '../pages/activity/test/TestHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: '测试',
      component: TestHome,
      meta: {
        navHidden: true,
      }
    },

    {
      path: '/:level',
      name: '测试',
      component: TestHome,
      meta: {
        navHidden: true,
      }
    }
  ]
})
