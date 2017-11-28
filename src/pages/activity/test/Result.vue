<template>
  <div ref="container" style="width: 100%;height: 100%;position: static">
    <div class="container"   style="height: 100%;">
      <div style="flex: 14;"></div>
      <p class="title">
        恭喜你，答对{{score}}道题!
      </p>
      <p class="subtitle">你的才华可以胜任</p>

      <p class="desc">
        <span style="font-size: 39px;">[&nbsp;</span>{{resultRate}}<span style="font-size: 39px;">&nbsp;]</span>
      </p>
      <div style="flex: 18;"></div>

      <div style="display: flex;width: 100%;justify-content: space-around">
        <div class="button2" @click="newLevel"></div>
        <div class="button" @click="share"></div>
      </div>

      <div style="flex: 12;"></div>

      <img style="	width: 115px;height: 115px;"
           src="../../../assets/image/icon/qrcode.jpg"/>
      <p
        style="	font-size: 14px; line-height: 20px; margin: -5px;
         font-weight: normal;	font-stretch: normal;	letter-spacing: 0px;color: #666666;">
        更多精彩测评戳这里

      </p>

      <div style="flex: 6;"></div>

    </div>
    <div v-show="showShare"
         style="position: absolute;width: 100%;height: 100%;background-color: rgba(0,0,0,0.7);top: 0;right: 0"
         @click="hideShare">
      <div
        style="width: 100%;height: 100%;display: flex;justify-content: center;flex-direction: column;align-items: center;">
        <div style="width: 200px;height: 100%;display: flex;justify-content: center;flex-direction: column;">
          <img style="width: 75px; height: 55px;align-self: flex-end;margin-right: 30px;"
               src="../../../assets/image/icon/箭头@2x.png" alt="">
          <p class="share_desc" style="margin-top: 40px;margin-bottom: 20px;">1.点击右上角分享到朋友圈</p>
          <p class="share_desc" style="margin-bottom: 100px;">2.截图分享到朋友圈</p>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import {Qrcode} from 'vux'

  export default {
    components: {Qrcode},
    data() {
      return {
        showShare: false,
        rate: {
          12: '正一品太师',
          11: '正二品太子少师',
          10: '正三品大理寺卿',
          9: '正四品大理寺少卿',
          8: '正五品翰林院侍读',
          7: '正六品内阁侍读',
          6: '正七品顺天府教授',
          5: '从七品内阁中书',
          4: '正八品太医院御医',
          3: '从八品翰林院典簿',
          2: '九品芝麻官',
          1: '九品芝麻官',
          0: '九品芝麻官'
        }
      }
    },
    methods: {
      newLevel() {
        this.$router.push('/level/' + (1 * this.$route.query.level + 1))
      },
      share() {
        this.showShare = true;
      },
      hideShare() {
        this.showShare = false;
      },
      getConfig() {
        let self = this;
        let url = window.location.href.split('#')[0];
        let paramUrl =navigator.userAgent.indexOf('iPhone')!== -1 ? 'http://localhost.com/home' : url;
        rest.post('/wxapi/base/getWxConfig', { 'url': paramUrl })
          .then(function(response) {
            let res = response.data.data;
            self.wxInit(res);
          })
      },
      wxInit(res) {
        let links = 'http://分享跳转地址';
        let linkUrl = 'http://微信以外的跳转地址/static/shareqq.html'; // 微信以外的
        let title = '名字';
        let desc = '简介.';
        let imgUrl = '分享图标/sharelogo.png';
        wx.config({
          debug: false,
          appId: res.appId,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
        });
        wx.ready(function() {
          wx.onMenuShareTimeline({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: linkUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function() {
              // alert("分享到朋友圈成功")
              Toast({
                message: "成功分享到朋友圈"
              });
            },
            cancel: function() {
              // alert("分享失败,您取消了分享!")
              Toast({
                message: "分享失败,您取消了分享!"
              });
            }
          });
          //微信分享菜单测试
          wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: links, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function() {
              // alert("成功分享给朋友")
              Toast({
                message: "成功分享给朋友"
              });
            },
            cancel: function() {
              // alert("分享失败,您取消了分享!")
              Toast({
                message: "分享失败,您取消了分享!"
              });
            }
          });
          wx.onMenuShareQQ({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: linkUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function() {
              // alert("成功分享给QQ")
              Toast({
                message: "成功分享到QQ"
              });
            },
            cancel: function() {
              // alert("分享失败,您取消了分享!")
              Toast({
                message: "分享失败,您取消了分享!"
              });
            }
          });
          wx.onMenuShareWeibo({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: linkUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function() {
              // alert("成功分享给朋友")
              Toast({
                message: "成功分享到腾讯微博"
              });
            },
            cancel: function() {
              // alert("分享失败,您取消了分享!")
              Toast({
                message: "分享失败,您取消了分享!"
              });
            }
          });
          wx.onMenuShareQZone({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: linkUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function() {
              // alert("成功分享给朋友")
              Toast({
                message: "成功分享到QQ空间"
              });
            },
            cancel: function() {
              // alert("分享失败,您取消了分享!")
              Toast({
                message: "分享失败,您取消了分享!"
              });
            }
          });
        });
        wx.error(function(err) {
          alert(JSON.stringify(err))
        });
      }
    },
    computed: {
      resultRate() {
        return this.rate[this.score]
      },
      score() {
        let result = 0;
        this.$route.query.answer.forEach((item, index) => {
          if (item == this.resultArray[index]) {
            result++;
          }
        });
        return result;
      },
      resultArray() {
        return Array.from(require('./config/result').default[this.$route.query.level*1-1]);
      }
    },
    mounted() {
      this.$refs.container.parentNode.style.paddingBottom = 0;
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    background-size: 100%;
    display: flex;
    align-items: center;
    align-self: center;;
    flex-direction: column;
    background-image: url("../../../assets/image/icon/智力测试题背景2.jpg");
  }

  .desc {
    font-family: fztcghjw;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 39px;
    letter-spacing: 2px;
    text-align: center;
    color: #227dfd;
  }

  span {
    font-family: fztcghjw;
    font-size: 28px;
    font-weight: normal;
    letter-spacing: 0px;
    line-height: 28px;
    color: #1c72ea;
  }

  .button {
    width: 143px;
    height: 38px;
    background-color: #fff2aa;
    border-radius: 38px;
    background-image: url("../../../assets/image/icon/anniu@2x.png");
    background-size: 100%;
  }

  .button2 {
    width: 143px;
    height: 38px;
    background-color: #fff2aa;
    border-radius: 38px;
    background-image: url("../../../assets/image/icon/anniu2@2x.png");
    background-size: 100%;
  }

  .subtitle {
    font-family: FZLTHK--GBK1-0;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 25px;
    margin-top: 30px;
    letter-spacing: 0px;
    color: #418ffc;
  }

  .title {
    font-family: fztcghjw;
    font-size: 29px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #fd631f;
  }

  .share_desc {
    font-family: fztcghjw;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ffffff;
  }
</style>
