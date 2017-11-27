<template>
  <div class="container" ref="container">
    <div style="background-color: #1c72ea;border-radius: 40px;	width: 179px;height: 42px;text-align: center;	letter-spacing: 0px;
	color: #ffffff;font-size: 30px;display:flex;justify-content: center;align-items: center;margin-top: 123px;">
      8岁儿童
    </div>

    <div style="font-family: TianZhen;
	font-size: 38px;
	margin-top: 10px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 40px;
	letter-spacing: 0px;
	color: #1c72ea;
">逻辑推理题
    </div>
    <div style="flex: 1;"> </div>


    <p class="desc">
      以下每个题目都有一定的主题，
      但是每张大图都 <span>缺少一部分。</span>
      大图以下有 <span>6至8张小图，</span>
      将其中 <span>一张小图</span>填补在 <span>大图的空缺部分</span>，
      使整个大图<span>合理、完整</span> 。
    </p>
    <div style="flex: 1;"> </div>

    <div class="button"></div>


    <div style="flex: 1;"></div>
    <img src="../../../assets/image/icon/智力测试题1.png">
  </div>
</template>

<script>
  export default {
    components: {},
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
    background-image: url("../../../assets/image/icon/智力测试题背景.jpg");
  }

  .desc {
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    align-self: center;
    width: 70%;
    letter-spacing: 0px;
    line-height: 28px;
    color: #333333;
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
    background-image: url("../../../assets/image/icon/组2@2x.png");
    background-size: 100%;
  }

  img {
    width: 207px;
    height: 191px;
  }

</style>
