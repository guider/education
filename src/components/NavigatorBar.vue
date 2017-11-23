<template>
  <tabbar slot="bottom" style="position: fixed;">
    <!--<tabbar-item :link="{path:'/home'}" :selected="routePath =='/home'||routePath=='/'" v-if="isP2p(routePath)">-->
      <!--<i slot="icon" class="icon iconfont icon-wxbzhuye"></i>-->
      <!--<span slot="label">排名</span>-->
    <!--</tabbar-item>-->

    <!--<tabbar-item :link="{path:'/deposit'}" :selected="routePath =='/deposit'" v-if="isP2p(routePath)">-->
      <!--<i slot="icon" class="icon iconfont icon-text "></i>-->
      <!--<span slot="label">存管</span>-->
    <!--</tabbar-item>-->

    <!--<tabbar-item :link="{path:'/trade'}" :selected="routePath =='/trade'" v-if="isP2p(routePath)">-->
      <!--<i slot="icon" class="icon iconfont icon-activity"></i>-->

      <!--<span slot="label">成交量</span>-->
    <!--</tabbar-item>-->
    <!--<tabbar-item :link="{path:'/me'}" :selected="routePath =='/me'" v-if="isP2p(routePath)">-->
      <!--&lt;!&ndash;<i slot="icon" class="iconfont icon-wxbzhanghu"></i>&ndash;&gt;-->
      <!--<i slot="icon" class="icon iconfont icon-wxbzhanghu"></i>-->
      <!--<span slot="label">我的</span>-->
    <!--</tabbar-item>-->
    <!--<tabbar-item :link="{path:'/iframe'}" :selected="routePath =='/iframe'" v-if="isP2p(routePath)">-->
      <!--<i slot="icon" class="icon iconfont icon-iconfontxingxing"></i>-->
      <!--<span slot="label">我的</span>-->
    <!--</tabbar-item>-->

    <!--<tabbar-item :link="{path:'/sign'}" :selected="routePath =='/sign'" v-if="isSign(routePath)">-->
      <!--<img slot="icon" src="../assets/images/11.png">-->
      <!--<img slot="icon-active" src="../assets/images/1.png">-->
      <!--<span slot="label">今日签到</span>-->
    <!--</tabbar-item>-->

    <!--<tabbar-item :link="{path:'/signRanking'}" :selected="routePath =='/signRanking'" v-if="isSign(routePath)">-->
      <!--<img slot="icon" src="../assets/images/11.png">-->
      <!--<img slot="icon-active" src="../assets/images/1.png">-->
      <!--<span slot="label">排行榜</span>-->
    <!--</tabbar-item>-->

    <!--<tabbar-item :link="{path:'/signScore'}" :selected="routePath =='/sign'" v-if="isSign(routePath)">-->
      <!--<img slot="icon" src="../assets/images/11.png">-->
      <!--<img slot="icon-active" src="../assets/images/1.png">-->
      <!--<span slot="label">脑容量</span>-->
    <!--</tabbar-item>-->

  </tabbar>
</template>
<script>
  import {
    Tabbar,
    TabbarItem
  } from 'vux';

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    data() {
      return {}
    },
    methods: {
      routerSelected(path) {
        return this.$router.path === path;
      },
      isP2p(pageName) {
        return ['/', '/home', '/deposit', '/trade', '/me', '/iframe'].includes(pageName);
      },
      isSign(pageName) {
        return ['/sign', '/signRanking', '/signScore'].includes(pageName);
      }
    },
    computed: {
      routePath() {
        return this.$route.path;
      }


    }
  }

</script>

<style scoped>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label span {
    color: #080363 !important;
  }

  .icon {
    position: relative;
    top: -4px;
  }

  span {
    font-size: 11px;
  }
</style>
