<template>
  <div class="container">
    <div @click="onSelect(message.index?'D':'A')">
      <p>{{message.index?'D':'A'}}</p>
      <img :src="(message.item[0])" alt=" ">
    </div>
    <div @click="onSelect(message.index?'E':'B')">
      <p>{{message.index?'E':'B'}}</p>
      <img :src="(message.item[1])" alt=" ">
    </div>
    <div @click="onSelect(message.index?'F':'C')">
      <p>{{message.index?'F':'C'}}</p>
      <img :src="(message.item[2])" alt=" ">
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
        console.log(item)
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
    justify-content: center;
    align-items: center;

  }

  p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #666666;
    text-align: center;
  }

  img {
    width: 100px;
    height: 60px;
    overflow: hidden;
    object-fit: cover;
  }

</style>
