<template>
  <div class="item-container" ref="container">

    <div style="display: flex;justify-content: center;">
      <p class="question">Question {{selectedIndex + 1}}</p>
    </div>

    <i :style="{backgroundImage: 'url('+(fullImage)+')'}"
       style="background-position: -40px -20px;background-repeat: no-repeat;background-size: 125%;"></i>

    <div v-for="item,index in 2 " style="display: flex;flex-direction: column;background-color: white;">
      <cell :message="{item:fullImage, index:index,level:level}" @onClick="onSelectClick"></cell>
    </div>


    <div style="flex: 1;"></div>
    <div style="width: 100%;display: flex;">
      <p
        style="display: flex;justify-content: center;align-items: center;font-size: 14px;margin-left: 20px;text-align:center;padding: 0px 10px;color: #217dfd;line-height: 22px;"
        @click="onBackClick">
        <img src="../../../assets/image/icon/返回.png" style="width: 20px;height: 20px;" alt=" ">
        上一题
      </p>
      <!--<p-->
        <!--style="display: flex;justify-content: center;align-items: center;font-size: 14px;margin-left: 0px;text-align:center;padding: 0px 10px;color: #217dfd;line-height: 22px;"-->
        <!--@click="onChangeLevel">-->
        <!--<img src="../../../assets/image/icon/关卡.png" style="width: 20px;height: 20px;" alt=" ">-->
        <!--更换关卡-->
      <!--</p>-->
    </div>
  </div>
</template>

<script>

  import Cell from './components/TestHomeCell.vue'

  export default {
    components: {Cell},
    data() {
      return {
        selectedIndex: 0,
        answer: []
      }
    },
    methods: {
      onSelectClick(index) {
        if (11 > this.selectedIndex) {
          this.answer[this.selectedIndex] = index;
          this.selectedIndex++;
        } else {
          this.answer[this.selectedIndex] = index;
          this.selectedIndex++;
          this.$router.push({name: 'result',query:{type:'logic',id:'no1'},params: {level: this.level, answer: this.answer}})
        }
      },
      onBackClick() {
        if (this.selectedIndex > 0)
          this.selectedIndex--;
      },
      onChangeLevel() {
        this.push()
      }

    },
    computed: {
      fullImage() {
        return require('../../../assets/image/level' + this.level + '/图片' + (this.selectedIndex + 1) + '.png');
      },
      level() {
        return (this.$route.params && this.$route.params.level ) ? this.$route.params.level : 1;
      }
    },
    mounted() {
      this.wxShare(this.$wechat, location.href);
      this.$refs.container.parentNode.style.paddingBottom = 0;
    }
  }
</script>

<style scoped>
  .item-container {
    display: flex;
    background-color: white;
    width: 100%;
    height: 100%;
    flex-direction: column;

  }

  i {
    width: 90%;
    height: 55.6vw;
    align-self: center;
    object-fit: cover;
    top: 20px;
  }

  p {
    font-size: 22px;
    font-weight: normal;
    text-align: center;
    font-stretch: normal;
    align-self: center;
    margin-top: 30px;
    line-height: 23px;
    letter-spacing: 0px;
    color: #217dfd;
    margin-bottom: 20px;
  }

  .question {
    background-image: url("../../../assets/image/icon/圆角矩形9@2x.png");
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    width: 200px;
    align-items: flex-end;
    justify-content: center;
    height: 34px;

  }
</style>
