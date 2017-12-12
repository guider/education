<template>

  <div class="container" ref="box">

    <div v-if="state!==3" style="    overflow: hidden;position: absolute;bottom: 10px;margin:auto;margin-left: 10px;">
      <img src="../../../assets/image/test_dad_mom/底图@2x.png" alt="">
    </div>

    <div
      v-if="!(state===1||state===2||state===3)"
      class="container" style="flex-direction: column;z-index: 100;position: absolute;">
      <p class="title">作为父母 你合格了吗?</p>
      <p class="desc">
        在我们家长的心中，总是认为让孩子吃最好的，<br>
        穿最好的，有房住，有车坐，这些才是最重要的。<br>
        但是这真的是孩子最需要的吗？<br>
        孩子心中合格父母的标准又是怎样的呢？<br>
        快来测一测，你是不是孩子心中的合格父母吧！<br>
      </p>
      <img
        @click="start"
        :src="require('../../../assets/image/test_dad_mom/按钮.png')" style="width: 170px;height: 40px;margin-top: 30px">
    </div>

    <div
      v-if="state===1"
      class="container" style="flex-direction: column;z-index: 100;position: absolute;">
      <p style="margin-top: 30px;width: 150px;height: 36px;background-color: #d0dbed;border-radius: 18px;
      font-weight: bold;
      font-size: 18px;color: #333;display: flex;justify-content: center;align-items: center;">第&nbsp;{{selectedIndex+1}}&nbsp;题</p>
      <p class="desc" style="margin-top:40px; font-size: 17px;">
        {{item.question}}
      </p>
      <div style="height: 20px;"></div>
      <div v-for="itemObj,index in item.answer" style="width: 100%;height: 50px;">
        <p
          @click="doAnswer(itemObj,index)"
          style="margin-left: 30px;margin-right: 20px;align-items: center;display: flex;height: 50px;">
          {{index===0?'A':(index===1?'B':'C')}}&nbsp;{{itemObj}} </p>
      </div>

    </div>

    <div
      v-if="state===2"
      class="container" style="flex-direction: column;z-index: 100;position: absolute;"

    >
      <div
        style="width: 70%;height: 100%;background-repeat: no-repeat;background-size: 100%;margin-top: 50px;"
        :style="{backgroundImage:'url('+require('../../../assets/image/截图分享朋友圈@2x.png')+')'}"
      ></div>
    </div>


    <div
      v-if="state===3"
      class="container" style="flex-direction: column;z-index: 100;position: absolute;">
      <p class="title">你的最终得分</p>
      <p class="title" style="font-size: 50px;margin-top: 0;">{{result.score}}</p>
      <p class="desc" style="font-size: 15px;margin-top: 0px;">
        {{result.comment}}
      </p>

      <div style="flex: 10;"></div>
      <img style="	width: 115px;height: 115px;"
           src="../../../assets/image/icon/qrcode.jpg"/>
      <div style="flex: 1;"></div>
      <ul style="list-style: none;">
        <li >
          关注公众号:
        </li>
        <li>
          1.回复"靠谱"测试是不是靠谱家长
        </li>
        <li>
          2.回复"逻辑"测试孩子的逻辑推理能力
        </li>
      </ul>
      <div style="flex: 2;"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "test_dad_mom",
    data() {
      return {
        state: 0,
        selectedIndex: 0,
        answers: [],
        questions: require('./json/test_dad_mom_json').default,
        result: {
          score: 0,
          comment: '',
          comments:
            ['恭喜你，你已经超越合格，成为了优秀的父母，看来你在教育孩子方面很有心得～关注公众号，我们有更多分享哦',
            '恭喜你，你是合格的父母啦～你有成为优秀父母的潜质哦～关注公众号，我们有更多关于孩子的分享哦',
            'Sorry,你是不合格的父母哦～看来你需要多多努力啦。关注公众号，我们有更多关于孩子的的分享哦～']
        }
      }
    },
    methods: {
      start() {
        this.state = 1;
      },
      doAnswer(item, index) {
        if (this.selectedIndex < 10) {
          this.answers[this.selectedIndex] = index;
          if (this.selectedIndex < 9) {
            this.selectedIndex++;
          } else {
            this.state = 2;
            this.answers.forEach((item) => {
              this.result.score += Math.floor(10 / (parseInt(item) + 1))
            });
            let index = (Math.floor(this.result.score / 80)) ? 0 : ((Math.floor(this.result.score / 60)) ? 1 : 2);
            this.result.comment = this.result.comments[index];
          }
        }
      }
    },
    computed: {
      item() {
        return this.questions[this.selectedIndex];
      }
    },
    mounted() {
      this.$refs.box.style.paddingBottom = 0;
      this.wxShare(this.$wechat, location.href, () => {
        this.state = 3;
      });
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  img {
    width: calc(100vw - (20px));
    height: auto;

  }

  .title {
    font-family: fztcghjw;
    font-size: 30px;
    margin-top: 30px;
    color: #4e5d75;
  }

  .desc {
    font-size: 15px;
    line-height: 28px;
    color: #3c4a62;
    text-align: center;
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 23px;
  }

</style>
