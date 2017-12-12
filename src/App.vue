<template>
  <div id="app" style="height: 100%;margin-bottom: 50px;">
    <view-box class="box-container">
      <!--exclude="detail"-->
      <keep-alive>
        <router-view class="router-view" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view class="router-view" v-if="!$route.meta.keepAlive"></router-view>

    </view-box>
    <navigator-bar slot="bottom" style="position: fixed;" v-show="navHidden"></navigator-bar>
  </div>
</template>

<script>
  import {
    ViewBox,
    XHeader,
    Loading
  } from 'vux';
  import NavigatorBar from './components/NavigatorBar';

  export default {
    name: 'app',
    components: {
      ViewBox,
      XHeader,
      Loading,
      NavigatorBar
    },
    data() {
      return {}
    },
    computed: {
      navHidden() {
        return !this.$route.meta.navHidden;
      }
    }
  }
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";
  @import "//at.alicdn.com/t/font_475875_gvnu24pemfbw3ik9.css";
  @import "./assets/fonts.css";
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: white;
    margin: 0;
    padding: 0;
    height: 100%;

  }

  .box-container {
    width: 100%;
    height: 100%;
  }

  #app{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    margin-bottom :0px !important;

  }

  #scrollUpIco {
    display: none
  }

</style>
