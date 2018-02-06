<template>
    <div class="container" ref="container">

      <img src="../../assets/image/教育海报.jpg" alt="" >


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
          this.wxShare(this.$wechat,location.href)
        }
    }
</script>

<style scoped>
  .container{
  }
  img{
    width:  100%;
    height: auto;
  }

</style>
