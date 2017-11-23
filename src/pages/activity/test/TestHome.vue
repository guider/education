<template>
  <div class="item-container" ref="container">

    <div>
      <p>Question {{selectedIndex + 1}}</p>
    </div>

    <i :style="{backgroundImage: 'url('+(fullImage)+')',
    }" style="background-position: -40px -20px;background-repeat: no-repeat;background-size: 125%;"></i>

    <div v-for="item,index in 2 " style="display: flex;flex-direction: column;background-color: white;">
      <cell :message="{item:fullImage, index:index}" @onClick="onSelectClick(index)"></cell>
    </div>

    <div style="width: 100%;display: flex;">
      <p
        style="font-size: 14px;text-align: left;margin-left: 40px;padding: 0px 10px;color: #78b7fd;
         border-radius: 12px;border: solid 1px #78b7fd;" @click="onBackClick">上一题</p>
    </div>

  </div>
</template>

<script>

  import Cell from './components/TestHomeCell.vue'

  export default {
    components: {Cell},
    data() {
      return {
        selectedIndex: 9,
        answer: []
      }
    },
    methods: {
      onSelectClick(index) {
        if (11 > this.selectedIndex) {
          this.selectedIndex++;
        }
      },
      onBackClick() {
        if (this.selectedIndex > 0)
          this.selectedIndex--;
      },

    },
    computed: {
      fullImage() {

        return  require('../../../assets/image/level1/图片'+(this.selectedIndex+1)+'.png');
      }
    },
    mounted() {
//      this.$refs.container.parentNode.style.paddingBottom = 0;
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

  i{
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
    margin-top: 40px;
    line-height: 23px;
    letter-spacing: 0px;
    color: #217dfd;
    margin-bottom: 20px;
  }
</style>
