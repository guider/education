<template>
  <div class="container" ref="container"
       :style="{backgroundImage:'url('+require('../../../assets/image/icon/智力测试题背景.jpg')+')'}"
  >

    <p
      style="font-family:fztcghjw; margin-top: 16vw;font-size: 14px;font-weight: normal;font-stretch: normal;line-height: 7px;letter-spacing: 0px;color: #072d5d;"
    >THE INTELLIGENCE TEST</p>
    <div class="title" @click="choiceLevel">
      {{selectOption}}儿童
    </div>
    <div class="subtitle">逻辑推理测试题
    </div>
    <div style="flex: 1;"></div>

    <p class="desc">
      以下每个题目都有一定的主题，<br/>
      但是每张大图都 <span>缺少一部分。<br/></span>
      大图以下有 <span>6至8张小图，</span><br/>
      将其中 <span>一张小图</span>填补在 <span>大图的空缺部分</span>，<br/>
      使整个大图<span>合理、完整</span> 。
    </p>
    <div style="flex: 1;"></div>

    <div class="button" @click="level"></div>

    <div style="flex: 1;"></div>
    <img src="../../../assets/image/icon/智力测试题1.png">

    <group v-show="false">
      <popup-radio :options="options" v-model="selectOption" ref="pop" @on-hide="onPopHide">
        <p slot="popup-header" class="vux-1px-b demo3-slot">请选择宝贝年龄</p>
      </popup-radio>
    </group>
  </div>
</template>

<script>
  import {Group, PopupRadio, cookie} from 'vux'

  export default {
    components: {
      Group,
      PopupRadio
    },
    data() {
      return {
        selectOption: '',
        selectIndex: 1,
        options: ['3-6岁', '7-8岁', '9-10岁', '11-12岁', '13-14岁', '15岁以上']
      }
    },
    methods: {
      onPopHide() {
        if (!this.selectOption) {
          this.selectOption = '3-6岁'
        }
        this.selectIndex = this.options.indexOf(this.selectOption) >= 0 ? this.options.indexOf(this.selectOption) : 1;
        cookie.set('age', this.selectOption);

      },
      level() {
        this.$router.push({name: 'level',query:{type:'logic',id:'no1'}, params: {level: (this.selectIndex * 1 + 1)}});
      },
      choiceLevel() {
        this.$refs.pop.show();
      }
    },
    computed: {},
    mounted() {
      this.$refs.container.parentNode.style.paddingBottom = 0;
      let age = cookie.get('age', '');
      if (!age || this.options.indexOf(age) < 0 || true) {
        this.$refs.pop.show();
      } else {
        this.selectedIndex = this.options.indexOf(age) + 1;
        this.selectOption = age;
      }
      this.wxShare(this.$wechat, location.href);
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
  }

  .title {
    background-color: #1c72ea;
    border-radius: 40px;
    padding-left: 10px;
    padding-right: 10px;
    min-width: 179px;
    height: 40px;
    text-align: center;
    letter-spacing: 0px;
    color: #ffffff;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    font-family: fztcghjw;
  }

  .desc {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    align-self: center;
    width: 90%;
    text-align: center;
    letter-spacing: 0px;
    line-height: 20px;
    color: #333333;
  }

  .subtitle {
    font-family: cyhtz;
    font-size: 38px;
    margin-top: 10px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #1c72ea;
  }

  span {
    font-family: "Microsoft YaHei", "Arial Narrow", sans-serif;
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
    width: 55.3vw;
    height: 51vw;
  }

  .demo3-slot {
    text-align: center;
    padding: 8px 0;
    color: #888;
  }
</style>
