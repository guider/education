import Vue from 'vue'
import Router from 'vue-router'
import TestHome from '../pages/activity/test/TestHome.vue'
import Splash from '../pages/activity/test/Splash.vue'
import Result from '../pages/activity/test/Result.vue'
import Letters from '../pages/activity/edu_resource/Letters.vue'
import Letter from '../pages/letter/Letter.vue'
import TestDadMom from '../pages/activity/test_dad_mom/TestDadMom.vue'
import TestReliableParents from '../pages/activity/test_reliable_parents/TestReliableParents.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      redirect: '/splash'
    }, {
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
    }, {
      path: '/letter',
      name: '字典',
      component: Letter,
      meta: {
        navHidden: true,
      }
    }, {
      path: '/letters',
      name: '读音',
      component: Letters,
      meta: {
        navHidden: true,
      }
    }, {
      path: '/test_dad_mom',
      name: '测试',
      component: TestDadMom,
      meta: {
        navHidden: true,
      }
    },
    {
      path: '/test_reliable_parents',
      name: '测试',
      component: TestReliableParents,
      meta: {
        navHidden: true,
      }
    }
    , {
      path: '/*',
      redirect: '/splash'
    }
  ]
})
