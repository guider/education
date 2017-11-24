<template>
  <div class="container">
    <div @click="onSelect(message.index?'D':'A')">
      <p>{{message.index ? 'D' : 'A'}}</p>
      <i
        :style="{backgroundImage: 'url(' + bgImage+')',backgroundPosition:backgroundPosition(0),width:optionWith,
        backgroundSize: level<4 ?'300%':'400%'}"></i>
    </div>
    <div @click="onSelect(message.index?'E':'B')">
      <p>{{message.index ? 'E' : 'B'}}</p>
      <i
        :style="{backgroundImage: 'url(' +bgImage+')',backgroundPosition:backgroundPosition(1),width:optionWith,
        backgroundSize: level<4 ?'300%':'400%'}"></i>
    </div>
    <div @click="onSelect(message.index?'F':'C')">
      <p>{{message.index ? 'F' : 'C'}}</p>
      <i
        :style="{backgroundPosition:backgroundPosition(2),backgroundImage:'url('+bgImage+')',width:optionWith,
         backgroundSize: level<4 ?'300%':'400%'}"></i>
    </div>
    <div @click="onSelect(message.index?'F':'C')" v-if="level>=4">
      <p>{{message.index ? 'F' : 'C'}}</p>
      <i
        :style="{backgroundPosition:backgroundPosition(3),backgroundImage:'url('+bgImage+')',width:optionWith}"
        style="background-size: 400%;"></i>
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


        if (parseInt(this.level) < 4) {

          if (!index) {
            return this.message.index ? '-2% 97%' : '-2% 70%'
          }
          if (index == 1) {
            return this.message.index ? '48% 97%' : '48% 70%'
          }
          if (index == 2) {
            return this.message.index ? '97% 97%' : '97% 70%'
          }
        } else {
          if (!index) {
            return this.message.index ? '0.5% 96%' : '0.5% 69%'
          }
          if (index == 1) {
            return this.message.index ? '34% 96%' : '34% 69%'
          }
          if (index == 2) {
            return this.message.index ? '66% 96%' : '66% 69%'
          }
          if (index == 3) {
            return this.message.index ? '98% 96%' : '98% 69%'
          }
        }
      }
    },
    computed: {
      bgImage() {
        return this.message.item;
      },
      level() {
        return this.message.level;
      },
      optionWith() {
        return this.level < 4 ? '100px' : '75px';
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
    background-repeat: no-repeat;
    background-size: 300%;
    width: 100px;
    height: 60px;
    display: block;
    overflow: hidden;
    object-fit: cover;
  }

</style>
