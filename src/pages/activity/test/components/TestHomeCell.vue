<template>
  <div class="container">
    <div @click="onSelect(message.index?'D':'A')">
      <p>{{message.index?'D':'A'}}</p>
      <i :style="{backgroundImage: 'url('+'/src/assets/image/level2/图片1.png'+')'}"
         style="background-position: 2px 71.5%;background-repeat: no-repeat;background-size: 300%;"></i>
    </div>
    <div @click="onSelect(message.index?'E':'B')">
      <p>{{message.index?'E':'B'}}</p>
      <i :style="{backgroundImage: 'url('+'/src/assets/image/level2/图片1.png'+')'}"
         style="background-position:48% 71.5%;background-repeat: no-repeat;background-size: 300%;"></i>
    </div>
    <div @click="onSelect(message.index?'F':'C')">
      <p>{{message.index?'F':'C'}}</p>
      <i :style="{backgroundImage: 'url('+'/src/assets/image/level2/图片1.png'+')'}"
         style="background-position: 98% 71.5%;background-repeat: no-repeat;background-size: 300%;"></i>

      <!--<img :src="(message.item[2])" alt=" ">-->
    </div>

  </div>
</template>

<script>
  export default {
    props: ['message'],
    components: {},
    data() {
      return {}
    },
    methods: {
      onSelect(item){
        this.$emit('onClick',item)
      }
    },
    computed: {

    },
    mounted() {
    }
  }
</script>

<style scoped>

  .container {
    display: flex;
    background-color: white;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;

  }

  p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #666666;
    text-align: center;
  }

  i {
    width: 100px;
    height: 50px;
    display: block;
    overflow: hidden;
    object-fit: cover;
  }

</style>
