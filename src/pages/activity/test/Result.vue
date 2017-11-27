<template>
  <div class="container" ref="container">

    <div style="flex: 14;"></div>

    <p style="	font-family: FZTCGHJW--GB1-0;
	font-size: 29px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #fd631f;">
      恭喜你，答对12道题!
    </p>
    <p style="	font-family: FZLTHK--GBK1-0;
	font-size: 18px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 25px;
	margin-top: 30px;
	letter-spacing: 0px;
	color: #418ffc;">你的才华可以胜任</p>


    <p class="desc">
      <span style="font-size: 39px;">[</span>内阁大学士<span style="font-size: 39px;">]</span>
    </p>
    <div style="flex: 18;"></div>

    <div style="display: flex;width: 100%;justify-content: space-around">
      <div class="button2"></div>
      <div class="button"></div>
    </div>

    <div style="flex: 12;"></div>

    <qrcode style="	width: 115px;height: 115px;overflow: hidden"
            value="http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fqrcode"></qrcode>
    <p
      style="font-family: FZLTHK--GBK1-0;	font-size: 14px; line-height: 20px; margin: 10px;
         font-weight: normal;	font-stretch: normal;	letter-spacing: 0px;color: #666666;">
      更多精彩测评戳这里

    </p>

    <div style="flex: 10;"></div>

  </div>

</template>

<script>
  import {Qrcode} from 'vux'

  export default {
    components: {Qrcode},
    data() {
      return {}
    },
    methods: {},
    computed: {},
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
    font-family: FZTCGHJW--GB1-0;
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
    font-family: PingFang-SC-Bold;
    font-size: 14px;
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


</style>
