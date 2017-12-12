<template>

  <div class="container" ref="box">

    <div
      v-if="!(state===1||state===3)"
      style="    overflow: hidden;position: absolute;bottom: 10px;margin:auto;margin-left: 10px;">
      <img src="../../../assets/image/test_reliable_parents/底图@2x.png"
           style="margin-left: calc(35vw - 14px);margin-bottom: -5px;" alt="">
    </div>

    <div
      v-if="!(state===1||state===2||state===3)"
      class="container border" style="flex-direction: column;z-index: 100;position: absolute;">
      <div style="display: flex;">
        <p
          style="height: 43px;	color: #6047ae;font-size: 14px;overflow: hidden;line-height: 15px;margin-top: 30px;margin-right: 10px;font-weight:bold;">
          测<br>一<br>测</p>
        <p class="title"
           style="	background-color: #6047ae;	border-radius: 4px;color: white;height: 43px;padding: 0px 10px;font-size: 24px;justify-content: center;align-items: center;display: flex;">
          你是靠谱的家长吗?</p>

      </div>

      <p class="desc" style="color: #6047ae;margin-top: 40px;">
        孩子的教育是家长们一生的事业，<br>父母都希望孩子长大后能有所成就。<br>在孩子的成长过程中，<br>我们既是孩子的家长，又是孩子的老师！<br>测测你是哪种家长吧~
      </p>
      <img
        @click="start"
        :src="require('../../../assets/image/test_dad_mom/按钮.png')" style="width: 170px;height: 40px;margin-top: 30px">
    </div>

    <div
      v-if="state===1"
      class="container border" style="flex-direction: column;z-index: 100;position: absolute;">
      <p style="margin-top: 30px;width: 150px;height: 36px;background-color: white;border: solid 1px #6047ae;
      font-size: 18px;color: #6047ae;display: flex;justify-content: center;align-items: center;">第&nbsp;{{selectedIndex+1}}&nbsp;题</p>

      <div
        style="width: calc(100vw - 14px);height: 7px;margin-top: 23px;"
        :style="{backgroundImage:'url('+require('../../../assets/image/test_reliable_parents/背景@2x.png')+')',backgroundPosition:(50*index+'%')+ ' 0%'  }"></div>

      <p class="desc" style="margin-top:40px; font-size: 17px;margin-bottom: 35px;">
        {{item.question}}
      </p>
      <div style="height: 20px;display: flex;">
        <div v-for="itemObj,index in 3" style="width: 30vw;height: 70vw;flex-direction: row;">
          <div
            @click="doAnswer(itemObj,index)"
            style="justify-content: center;display: flex;height: 100%;

        background-repeat: no-repeat; background-size: 300%"
            :style="{backgroundImage:'url('+require('../../../assets/image/test_reliable_parents/test'+selectedIndex+'.jpg')+')',backgroundPosition:(50*index+'%')+ ' 0%'  }"
          >
            <p style="margin-top: 30px;color: #262626;font-size: 20px;font-family: fztcghjw;">
            {{index===0?'A':(index===1?'B':'C')}}
            </p>

          </div>
        </div>
      </div>

    </div>

    <div
      v-if="state===2"
      class="container border" style="flex-direction: column;z-index: 100;position: absolute;"

    >
      <div
        style="width: 70%;height: 100%;background-repeat: no-repeat;background-size: 100%;margin-top: 50px;"
        :style="{backgroundImage:'url('+require('../../../assets/image/截图分享朋友圈@2x.png')+')'}"
      ></div>
    </div>


    <div
      v-if="state===3"
      class="container border" style="flex-direction: column;z-index: 100;position: absolute;">
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
          1.回复"合格"测试是不是合格的爸妈
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
        questions: require('./json/test_reliable_parrents_json').default,
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

  .border {
    width: calc(100vw - 14px);
    height: calc(100vh - 14px);
    border: solid 7px #6047ae;
  }

  img {
    width: 65%;
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
