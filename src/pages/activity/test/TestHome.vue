<template>
  <div class="item-container" ref="container">

    <div>
      <p>Question {{selectedIndex + 1}}</p>
    </div>

    <img :src="(question)" alt=" ">

    <div v-for="item,index in list " style="display: flex;flex-direction: column;background-color: white;">
      <cell :message="{item:item, index:index}" @onClick="onSelectClick(index)"></cell>
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
        selectedIndex: 0,
        data: require('./config/' + (this.query && this.query.path ? this.query.path : 'level1') + '.js').default,
        answer: []
      }
    },
    methods: {
      onSelectClick(index) {
        console.log('onSelectClick ')
        if (this.data.length - 1 > this.selectedIndex) {
          this.selectedIndex++;
        }
      },
      onBackClick() {
        if (this.selectedIndex > 0)
          this.selectedIndex--;
      },

    },
    computed: {
      question() {
        return this.data[this.selectedIndex].question;
      },
      list() {
        return this.data[this.selectedIndex].options;
      }
    },
    mounted() {
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

  img {
    width: 90%;
    height: 55.6vw;
    align-self: center;
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
