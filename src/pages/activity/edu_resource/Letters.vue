<template>
  <div style="width: 100%;height: 100%;">
    <div v-for="item in list"  style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
      <p style="width: 80%;text-align: start;">音图: {{item.letter}}</p>
      <p  style="width: 80%;text-align: start;">国际音标: {{item.phonogram}}</p>
        <video  :src="videoSrc(item)" controls="controls" style="width: 80%;height: 60vw;padding: 5px 10px;"
                poster="http://o7lzjfyxl.bkt.clouddn.com/20171129151192583431557.jpg"></video>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        baseUrl: 'http://o7lzjfyxl.bkt.clouddn.com/edu/letters/',
        list: [
          {
            letter: 'a',
            phonogram: '[æ]、[ei]、[a:]、[ɔ:]、[ɔ]'
          }, {
            letter: 'b',
            phonogram: '[b]'
          }, {
            letter: 'c',
            phonogram: '[k]、[s]'
          }, {
            letter: 'd',
            phonogram: '[d]'
          }, {
            letter: 'e',
            phonogram: '[e]、[i:]'
          }, {
            letter: 'f',
            phonogram: '[f]'
          }, {
            letter: 'g',
            phonogram: '[g]、[dʒ]'
          }, {
            letter: 'h',
            phonogram: '[h]'
          }, {
            letter: 'i',
            phonogram: '[i]、[ai]'
          }, {
            letter: 'j',
            phonogram: '[dʒ]'
          }, {
            letter: 'k',
            phonogram: '[k]'
          }, {
            letter: 'l',
            phonogram: '[l]'
          }, {
            letter: 'm',
            phonogram: '[m]'
          }, {
            letter: 'n',
            phonogram: '[n]'
          }, {
            letter: 'o',
            phonogram: '[ɔ]、[əu]、[u:]、[ʌ]'
          }, {
            letter: 'p',
            phonogram: '[p]'
          }, {
            letter: 'qu',
            phonogram: 'kw]、[k]'
          }, {
            letter: 'r',
            phonogram: '[r]'
          }, {
            letter: 's',
            phonogram: '[s]、[z]'
          }, {
            letter: 't',
            phonogram: '[t]'
          }, {
            letter: 'u',
            phonogram: '[ʌ]、[u:/ju:]、[u]'
          }, {
            letter: 'v',
            phonogram: '[v]'
          }, {
            letter: 'w',
            phonogram: '[w]'
          }, {
            letter: 'x',
            phonogram: '[ks]、[z]'
          }, {
            letter: 'y',
            phonogram: '[i]、[ai]、[j]'
          }, {
            letter: 'z',
            phonogram: '[z]'
          }
        ]
      }
    },
    methods: {
      videoSrc(item) {
        return this.baseUrl + item.letter + '.mp4';
      }
    },
    computed: {},
    mounted() {

    }
  }
</script>

<style scoped>

</style>
