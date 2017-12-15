<template>
  <div class="container" ref="box">
    <i style="height: 40px; width:280px;margin-top: 50px;margin-bottom: 10px;background-repeat: no-repeat;"
       :style="{backgroundImage: 'url('+ imgurl +')'}"></i>
    <canvas ref="stage"></canvas>
    <div style="flex: 1; width: 100%;"></div>

    <p
      @click="drawLetter"
      style="width: 140px;height: 36px;background-color: #2c5f97;color: white;text-align: center;
        line-height: 36px;border-radius: 4px;font-size: 19px;">重播</p>
    <div style="flex: 1; width: 100%;"></div>
    <div style="display: flex;width: 100%;">
    </div>
    <div
      style="display: flex;flex: 1; width: 100%;height: 100px;flex-direction: row;justify-content: center;align-items: center;">
      <img
        @click="play"
        src="../../assets/image/letter/矢量智能对象@2x.png" style="width:26px;height: 26px;margin-right: 10px;" alt=" ">


      <audio autoplay="autoplay" ref="audio">
        <source :src="videoScore" type="audio/mpeg">
        <embed height="0" width="0" :src="videoScore">
      </audio>
      <div style="display: inline-block;font-size: 18px;color: #2c5f97;margin-right: 25px;">读音：<span
        style="font-weight: bold">{{letterObj.chinese.pinyin}}</span></div>
      <div style="display:inline-block ;font-size: 18px;color: #2c5f97;margin-right: 25px;">部首：<span
        style="font-weight: bold">{{letterObj.chinese.bushou}}</span></div>
      <div style="display:inline-block;font-size: 18px;color: #2c5f97">笔数：<span style="font-weight: bold">{{letterObj.chinese.bihua.length}}</span>
      </div>
    </div>
    <div style="flex: 1; width: 100%;"></div>
    <search
      @result-click="resultClick"
      v-model="value"
      @on-focus="onFocus"
      :auto-fixed="false"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
  </div>
</template>
<script>
  import fetch from "../../api/http.js";
  import {Search, Group, Cell, XButton} from 'vux'

  export default {
    components: {
      Search,
      Group,
      Cell,
      XButton
    },
    data() {
      return {
        value: '',
        scale: 5,
        chinese_word: '',
        content: '',
        id: '',
        imgurl: '',
        remote_id: '',
        letterObj: {
          chinese: {
            pinyin: '',
            bihua: [],
            bishun: [],
            bushou: ''
          }
        }
      };
    },
    methods: {

      play() {
        console.log(this.$refs.audio);
        this.$refs.audio.load()
        // this.$refs.audio.play()
      },
      setFocus() {
        this.$refs.search.setFocus()
      },
      resultClick(item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult(val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit() {
        this.$refs.search.setBlur();
        this.loadData();
      },
      onFocus() {
        console.log('on focus')
      },
      onCancel() {
        console.log('on cancel')
      },
      drawOneStroke(context, childArr) {
        if (!childArr || !childArr.length) {
          return;
        }
        let scale = this.scale;
        context.moveTo(childArr[0][0] / scale * 2, childArr[0][1] / scale);
        context.stroke();
        for (let i = 0; i <= childArr.length - 1; i++) {
          context.lineTo(childArr[i][0] / scale * 2, childArr[i][1] / scale);
        }
        // context.stroke();
      },
      drawOutline(context) {
        let arr = this.letterObj.chinese.bihua;
        context.strokeStyle = "#999999";
        context.fillStyle = "#999999";
        let self = this;

        arr.forEach(function (item, index) {
          self.drawOneStroke(context, item);
        });
        context.stroke();
      },
      drawWord(context) {
        let arr = this.letterObj.chinese.bishun;
        context.strokeStyle = "#000000";
        context.fillStyle = "#000000";
        let self = this;
        let count = 0;
        clearInterval(self.timer);
        self.timer = setInterval(() => {
          if (count < arr.length) {
            count++;
            let tmpArr = arr.slice(0, count);
            if (tmpArr && tmpArr.length > 0) {
              let childCount = 0;
              clearInterval(self.childTimer)
              self.childTimer = setInterval(() => {
                let tArr = tmpArr[tmpArr.length - 1];
                if (childCount < tArr.length / 25) {
                  childCount++;
                  let childArr = tArr.slice(0, childCount * 25);
                  self.drawOneStroke(context, childArr);
                } else {
                  self.drawOneStroke(context, tArr);
                  clearInterval(self.childTimer);
                  childCount = 0;
                }
              }, 45);
            }
          } else {
            clearInterval(self.timer);
            count = 0;
          }
        }, 1000);

      },
      loadData() {
        fetch("http://service.wx.prguanjia.com/edu/character", {
          type: "post",
          params: {word: this.value ? this.value : "字"}
        })
          .then(res => {
            if (!res.result) {
              this.content = res.data.content;
              this.chinese_word = res.data.chinese_word;
              this.id = res.data.id;
              this.imgurl = res.data.imgurl;
              this.remote_id = res.data.remote_id;
              this.drawLetter();
              this.$refs.audio.load();
            } else {
            }
            if (res.result) {
              this.$vux.toast.show({type: 'text', text: res.msg})
            }
          })
          .catch(err => {
          });
      },
      drawLetter() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        if (this.childTimer) {
          clearInterval(this.childTimer);
          this.childTimer = null;
        }
        this.clearLetter();
        this.letterObj = JSON.parse(this.content);
        this.drawOutline(this.$refs.stage.getContext("2d"));
        this.drawWord(this.$refs.stage.getContext("2d"));
      },
      clearLetter() {
        let context = this.$refs.stage.getContext('2d');
        context.clearRect(0, 0, 300, 300);
        context.beginPath();
        context.moveTo(0, 0);
      }
    },
    computed: {
      videoScore(){
        return 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=' + this.value;
      }
    },
    mounted() {
      this.loadData();
      this.$refs.box.parentNode.style.paddingBottom = 0;
      this.wxShare(this.$wechat)

    }
  };
</script>

<style scoped>
  .container {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }

  canvas {
    width: 260px;
    height: 260px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url("../../assets/image/letter/tiange.png");
    /*background-repeat: no-repeat;*/
    /*background-size: 100%;*/
    /*margin: 0 auto 0 auto;*/
  }
</style>
