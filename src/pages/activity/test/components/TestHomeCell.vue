<template>
  <div class="container">
    <div @click="onSelect(message.index?'D':'A')">
      <p>{{message.index ? 'D' : 'A'}}</p>
      <i
        :style="{backgroundImage: 'url(' + bgImage+')',backgroundPosition:backgroundPosition(0)}"
        style="background-repeat: no-repeat;background-size: 300%;"></i>
    </div>
    <div @click="onSelect(message.index?'E':'B')">
      <p>{{message.index ? 'E' : 'B'}}</p>
      <i
        :style="{backgroundImage: 'url(' +bgImage+')',backgroundPosition:backgroundPosition(1)}"
        style="background-repeat: no-repeat;background-size: 300%;"></i>
    </div>
    <div @click="onSelect(message.index?'F':'C')">
      <p>{{message.index ? 'F' : 'C'}}</p>
      <i
        :style="{backgroundPosition:backgroundPosition(2),backgroundImage:'url('+bgImage+')'}"
        style="background-repeat: no-repeat;background-size: 300%;"></i>
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
      onSelect(item) {
        this.$emit('onClick', item)
      },

      backgroundPosition(index) {
        if (!index) {
          return this.message.index ? '2% 96%' : '2% 72%'
        }
        if (index == 1) {
          return this.message.index ? '48% 96%' : '48% 72%'
        }
        if (index == 2) {
          return this.message.index ? '97% 96%' : '97% 72%'
        }
      }
    },
    computed: {
      bgImage(){
        return this.message.item;
      }
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
