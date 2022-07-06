<template>
  <div>
    <div class="Home" v-if="isMobile">
      <div class="Home-part1">
        <div class="Home-Layout">
          <div class="part1-text">
            <div class="text-1">
              <!-- Yield+  Plan is on -->
              {{ $t('yield.yield6') }}
              <br />
              <span class="text-2">{{ agg_protocol_count }}</span>
              <!-- Projects -->
              {{ $t('yield.yield7') }}
              <br />
              <span class="text-2">{{ claimed }}</span>
              <!-- Claimed -->
              Eos {{ $t('yield.yield8') }}
            </div>
            <v-btn class="text-button"  @click="$router.push('/Join')">{{ $t('yield.yield4') }}</v-btn>
          </div>
        </div>
        <!-- <img src="@/assets/img/Home/par1BG.png" class="part1-bg" /> -->
        <video src="@/assets/video/home/447.mp4" class="part1-bg" loop autoplay  muted />
      </div>

      <div class="Home-part2">
        <div class="Home-Layout">
          <div class="part2-text">
            <!-- What is  Yield+ ? -->
            <div class="text-2">{{ $t('yield.yield11') }}</div>
            <div style="line-height: 25px;">{{ $t('yield.yield12') }}</div>
          </div>
        </div>
        <img src="@/assets/img/Home/part2BG.png" class="part2-bg" />
      </div>

      <div class="Home-part3">
        <div class="Home-Layout">
          <div class="part3-text" :key="infoTab">{{ $t('yield.yield14', { num: infoTab == 'Launch'?'625K':'2.5M'}) }}</div>


          <div class="part3-buttonList flex flex-jus-around">
            <!-- <v-btn class="buttonList-button1">Launch</v-btn>
            <v-btn class="buttonList-button2">Accelerate</v-btn> -->
            <!-- Launch -->
            <v-btn class="buttonList-button1" :class="{'buttonList-button2': infoTab != 'Launch'}" @click="infoTab = 'Launch'">{{ $t('yield.yield15') }}</v-btn>
            <!-- Accelerate -->
            <v-btn class="buttonList-button1" :class="{'buttonList-button2': infoTab != 'Accelerate'}" @click="infoTab = 'Accelerate'">{{ $t('yield.yield16') }}</v-btn>
          </div>

          <div class="part3-tableLayout">
            <!-- <div class="part3-table">
              <div class="table-border1"></div>
              <div class="table-border2"></div>
              <div class="table-border3"></div>
              <div class="table-border4"></div>
              <div class="table-height1 flex" style="border-bottom: 1px solid RGBA(73, 78, 86, 1)">
                <div class="table-width"></div>
                <div class="table-width">{{ $t('yield.yield17') }}</div>
                <div class="table-width">{{ $t('yield.yield18') }}</div>
                <div class="table-width">{{ $t('yield.yield19') }}</div>
                <div class="table-width">{{ $t('yield.yield20') }}</div>
              </div>
              <div class="table-height2 flext" style="border-bottom: 1px solid RGBA(73, 78, 86, 1)">
                <div class="table-width">{{ $t('yield.yield21') }} {{ $t('yield.yield22') }}</div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].rewards[0]" :key="index">{{ item }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].rewards[1]" :key="index">{{ item }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].rewards[2]" :key="index">{{ item }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].rewards[3]" :key="index">{{ item }}</div>
                </div>
              </div>
              <div class="table-height2 flext" style="border-bottom: 1px solid RGBA(73, 78, 86, 1)">
                <div class="table-width">
                  <div>{{ $t('yield.yield112') }}</div>
                  <div :key="infoTab">{{ infoTab == 'Launch' ? $t('yield.yield113'): $t('yield.yield115') }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].minTvl[0]" :key="index">{{ item }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].minTvl[1]" :key="index">{{ item }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].minTvl[2]" :key="index">{{ item }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].minTvl[3]" :key="index">{{ item }}</div>
                </div>
              </div>
              <div class="table-height2 flext">
                <div class="table-width">
                  <div>{{ $t('yield.yield114') }}</div>
                  <div :key="infoTab">{{ infoTab == 'Launch' ? $t('yield.yield113'): $t('yield.yield115') }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].maxTvl[0]" :key="index">{{ item }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].maxTvl[1]" :key="index">{{ item }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].maxTvl[2]" :key="index">{{ item }}</div>
                </div>
                <div class="table-width">
                  <div v-for="(item, index) in info[infoTab].maxTvl[3]" :key="index">{{ item }}</div>
                </div>
              </div>
            </div> -->
            <div v-if="infoTab != 'Launch'">
              <img src="@/assets/img/Home/LaunchZh.png" class="part3-img" v-if="$store.state.app.language == 'zh-TW'">
              <img src="@/assets/img/Home/LaunchKo.png" class="part3-img" v-if="$store.state.app.language == 'ko'">
              <img src="@/assets/img/Home/LaunchEn.png" class="part3-img" v-else>
            </div>
            
            <div v-else>
              <img src="@/assets/img/Home/AccelerateZh.png" class="part3-img" v-if="$store.state.app.language == 'zh-TW'">
              <img src="@/assets/img/Home/AccelerateKo.png" class="part3-img" v-if="$store.state.app.language == 'ko'">
              <img src="@/assets/img/Home/AccelerateEn.png" class="part3-img" v-else>
            </div>
          </div>

          <div class="part3-tips">{{ $t('yield.yield23') }}</div>
        </div>
      </div>

      <div class="Home-part4">
        <div class="part4-p1">
          <img src="@/assets/img/Home/part4Img1.png" class="p1-img">
        </div>
        <div class="Home-Layout">
          <div class="part4-step">
            <!-- <div class="step-title">HOW TO <br/> JOIN YIELD+ ?</div> -->
            <div class="step-title">{{ $t('yield.yield24') }}</div>
            <!-- step1 -->
            <div class="step-tips1">{{ $t('yield.yield25') }} /</div>
            <div class="step-tips2">{{ $t('yield.yield27') }}</div>
            <!-- step2 -->
            <div class="step-tips1">{{ $t('yield.yield28') }} / </div>
            <div class="step-tips2">{{ $t('yield.yield30') }}</div>
            <!-- step3 -->
            <div class="step-tips1">{{ $t('yield.yield31') }} / </div>
            <div class="step-tips2">{{ $t('yield.yield33') }}</div>
            <!-- step4 -->
            <div class="step-tips1">{{ $t('yield.yield34') }} / </div>
            <div class="step-tips2">{{ $t('yield.yield36') }}</div>
          </div>

          <v-btn class="part4-submission" @click="$router.push('/Join')">{{ $t('yield.yield37') }}</v-btn>

          <!-- <div class="part4-email">If you have any questions please contact xxxxxx@gmail.com</div> -->
          <div class="part4-email"> </div>
        </div>

      </div>

    </div>
    <div class="HomePC" v-else>
      <div class="HomePC-part1">
        <div class="HomePC-Layout">
          <!-- <img src="@/assets/img/Home/par1BG.png" class="part1-bg" /> -->
          <video src="@/assets/video/home/447.mp4" class="part1-bg" style="top:-100px;width:800px;height:auto;object-fit: fill;"  loop autoplay  muted/>
          <div class="part1-text">
            <div class="text-1">
              <!-- Yield+  Plan is on -->
              {{ $t('yield.yield6') }}
              <br />
              <span class="text-2">{{ agg_protocol_count }}</span>
              <!-- Projects -->
              {{ $t('yield.yield7') }}
              <br />
              <span class="text-2">{{ claimed }}</span>
              <!-- Claimed -->
              EOS {{ $t('yield.yield8') }}
            </div>
            <!-- Join Yield + -->
            <v-btn class="text-button" @click="$router.push('/Join')">{{ $t('yield.yield4') }}</v-btn>
          </div>
        </div>
      </div>

      <div class="HomePC-part2">
        <div class="HomePC-Layout flext">
          <div class="part2-text">
            <!-- What is  Yield+ ? -->
            <div class="text-2">{{ $t('yield.yield11') }}</div>
            <div style="line-height: 25px;">{{ $t('yield.yield12') }}</div>
          </div>

          <img src="@/assets/img/Home/part2BG.png" class="part2-bg" />
        </div>
      </div>

      <div class="HomePC-part3">
        <div class="HomePC-Layout">
          <img src="@/assets/img/Home/part3Img1.png" class="part3-img1">
          <img src="@/assets/img/Home/part3Img2.png" class="part3-img2">
          <img src="@/assets/img/Home/part3Img3.png" class="part3-img3">
          <div class="part3-title">{{ $t('yield.yield13') }}</div>


          <div class="part3-buttonList flex flex-jus-center">
            <!-- Launch -->
            <v-btn class="buttonList-button1" :class="{'buttonList-button2': infoTab != 'Launch'}" @click="infoTab = 'Launch'">{{ $t('yield.yield15') }}</v-btn>
            <!-- Accelerate -->
            <v-btn class="buttonList-button1" :class="{'buttonList-button2': infoTab != 'Accelerate'}" @click="infoTab = 'Accelerate'">{{ $t('yield.yield16') }}</v-btn>
          </div>
          <div class="part3-text" :key="infoTab">{{ $t('yield.yield14', { num: infoTab == 'Launch'?'625K':'2.5M'}) }}</div>

          <div class="part3-table">
            <div class="table-border1"></div>
            <div class="table-border2"></div>
            <div class="table-border3"></div>
            <div class="table-border4"></div>
            <div class="table-height1 flex" style="border-bottom: 1px solid RGBA(73, 78, 86, 1)">
              <div class="table-width"></div>
              <div class="table-width" v-if="infoTab == 'Launch'">{{ $t('yield.yield17') }}</div>
              <div class="table-width">{{ $t('yield.yield18') }}</div>
              <div class="table-width">{{ $t('yield.yield19') }}</div>
              <div class="table-width">{{ $t('yield.yield20') }}</div>
              <div class="table-width" v-if="infoTab != 'Launch'">{{ $t('yield.yield119') }}</div>
            </div>
            <div class="table-height2 flext" style="border-bottom: 1px solid RGBA(73, 78, 86, 1)">
              <div class="table-width">{{ $t('yield.yield21') }} {{ $t('yield.yield22') }}</div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].rewards[0]" :key="index">{{ item }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].rewards[1]" :key="index">{{ item }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].rewards[2]" :key="index">{{ item }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].rewards[3]" :key="index">{{ item }}</div>
              </div>
            </div>
            <div class="table-height2 flext" style="border-bottom: 1px solid RGBA(73, 78, 86, 1)">
              <div class="table-width">
                <div>{{ $t('yield.yield112') }}</div>
                <div :key="infoTab">{{ infoTab == 'Launch' ? $t('yield.yield113'): $t('yield.yield115') }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].minTvl[0]" :key="index">{{ item }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].minTvl[1]" :key="index">{{ item }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].minTvl[2]" :key="index">{{ item }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].minTvl[3]" :key="index">{{ item }}</div>
              </div>
            </div>
            <div class="table-height2 flext">
              <div class="table-width">
                <div>{{ $t('yield.yield114') }}</div>
                <div :key="infoTab">{{ infoTab == 'Launch' ? $t('yield.yield113'): $t('yield.yield115') }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].maxTvl[0]" :key="index">{{ item }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].maxTvl[1]" :key="index">{{ item }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].maxTvl[2]" :key="index">{{ item }}</div>
              </div>
              <div class="table-width">
                <div v-for="(item, index) in info[infoTab].maxTvl[3]" :key="index">{{ item }}</div>
              </div>
            </div>
          </div>

          <div class="part3-tips">{{ $t('yield.yield23') }}</div>
        </div>
      </div>

      <div class="HomePC-part4">
        <div class="HomePC-Layout">
          <div class="part4-p1 flex">
            <img src="@/assets/img/Home/part4Img1.png" class="p1-img">
            <div class="p1-text">{{ $t('yield.yield24') }}</div>
          </div>

          <div class="part4-step flext flex-jus-between">
            <div class="step-width">
              <div class="step-title">{{ $t('yield.yield25') }} / </div>
              <div class="step-tips1">{{ $t('yield.yield26') }}</div>
              <div class="step-tips2">{{ $t('yield.yield27') }}</div>
            </div>
            <div class="step-width">
              <div class="step-title">{{ $t('yield.yield28') }} / </div>
              <div class="step-tips1">{{ $t('yield.yield29') }}</div>
              <div class="step-tips2">{{ $t('yield.yield30') }}</div>
            </div>
            <div class="step-width">
              <div class="step-title">{{ $t('yield.yield31') }} / </div>
              <div class="step-tips1">{{ $t('yield.yield32') }}</div>
              <div class="step-tips2">{{ $t('yield.yield33') }}</div>
            </div>
            <div class="step-width">
              <div class="step-title">{{ $t('yield.yield34') }} / </div>
              <div class="step-tips1">{{ $t('yield.yield35') }}</div>
              <div class="step-tips2">{{ $t('yield.yield36') }}</div>
            </div>
          </div>

          <v-btn class="part4-submission" @click="$router.push('/Join')">{{ $t('yield.yield37') }}</v-btn>


        </div>



      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { protocols } from '@/service'
export default {
  name: 'Home', // Home
  data() {
    return {
      agg_protocol_count: '',
      claimed: '',

      infoTab: 'Launch',
      info: {
        Launch: {
          rewards: [['27.4 EOS'], ['102.5 EOS'], ['205 EOS'], ['410 EOS']],
          minTvl: [['200K EOS', '($500K)'], ['750K EOS', '($1.875M)'], ['1.50M EOS', '($3.75M)'], ['3M EOS', '($7.5M)']],
          maxTvl: [['N/A'], ['N/A'], ['N/A'], ['6M EOS', '($15M)']],
        },
        Accelerate: {
          rewards: [['102.5 EOS'], ['205 EOS'], ['410 EOS'], ['820 EOS']],
          minTvl: [['750K EOS', '($3.75M)'], ['1.50M EOS', '($7.5M)'], ['3M EOS', '($15M)'], ['6M EOS', '($30M)']],
          maxTvl: [['N/A'], ['N/A'], ['N/A'], ['12M EOS', '($60M)']],
        },
      }
    }
  },
  components: {},
  props: [],
  watch: {},
  computed: mapState({
    isMobile: state => state.app.isMobile
  }),
  created() {
    this.getStat()
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    getStat() {
      protocols.stat().then(res => {
        // console.log('res is ', res);
        if (res.code === 0) {
          this.claimed = this.formatNumber(res.data.claimed)
          this.agg_protocol_count =  res.data.agg_protocol_count
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.Home {
  .Home-Layout {
    max-width: 420px;
    margin: 0 auto;
  }
  .Home-part1 {
    width: 100%;
    padding-bottom: 60px;
    .Home-Layout {
      padding: 70px 45px 0 45px;
    }
    .part1-bg {
      display: block;
      width: 100%;
      max-width: 420px;
      margin: 0 auto;
    }
    .part1-text {
      .text-1 {
        font-size: 24px;
        font-weight: 600;
        color: #000000;
      }
      .text-2 {
        font-size: 29px;
        font-weight: 800;
        color: #000000;
      }
      .text-button {
        margin-top: 22px;
        width: 168px;
        height: 49px;
        line-height: 49px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        border-radius: 24px;
        background-color: #1c1dff;
      }
    }
  }

  .Home-part2 {
    width: 100%;
    background-color: #000000;
    .Home-Layout {
      padding: 30px;
      padding-top: 60px;
      font-weight: 400;
      color: #ffffff;
    }
    .part2-text {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      .text-2 {
        font-size: 52px;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 35px;
      }
    }
    .part2-bg {
      display: block;
      width: 100%;
      max-width: 420px;
      margin: 0 auto;
      margin-top: -40px;
    }
  }

  .Home-part3 {
    .Home-Layout {
      padding: 76px 20px 90px 20px;
    }
    .part3-text {
      width: 341px;
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      color: #000000;
      .text-1 {
        font-weight: bold;
      }
    }
    .part3-buttonList {
      margin-top: 30px;
      .buttonList-button1 {
        width: 160px;
        height: 51px;
        line-height: 51px;
        background-color: #1c1dff;
        font-size: 18px;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
        border-radius: 28px;
      }
      .buttonList-button2 {
        // margin-left: 9px;
        width: 160px;
        height: 51px;
        line-height: 51px;
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.2);
        font-size: 18px;
        font-weight: 500;
        color: #595959;
        text-align: center;
        border-radius: 28px;
      }
    }

    .part3-tableLayout {
      width: 100%;
      // overflow-x: auto;
    }
    .part3-img {
      width: 100%;
      height: auto;
      margin: 20px 0;
    }
    .part3-table {
      margin: 0 auto;
      margin-top: 39px;
      width: 725px;
      border-radius: 24px;
      background-color: #2c303a;
      text-align: center;
      position: relative;
      .table-border1 {
        position: absolute;
        left: 144px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: RGBA(73, 78, 86, 1);
      }
      .table-border2 {
        position: absolute;
        left: 289px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: RGBA(73, 78, 86, 1);
      }
      .table-border3 {
        position: absolute;
        left: 434px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: RGBA(73, 78, 86, 1);
      }
      .table-border4 {
        position: absolute;
        left: 589px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: RGBA(73, 78, 86, 1);
      }
      .table-width {
        width: 145px;
        flex: 0 0 145px;
      }
      .table-height1 {
        height: 91px;
        line-height: 91px;
        font-size: 23px;
        font-weight: 600;
        color: #ffffff;
      }
      .table-height2 {
        height: 105px;
        padding-top: 15px;
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
      }
    }

    .part3-tips {
      margin: 0 auto;
      // margin-top: 56px;
      width: 341px;
      font-size: 16px;
      font-weight: 400;
      color: #333333;
    }
  }

  .Home-part4 {
    width: 100%;
    background-color: #000000;
    .part4-p1 {
      width: 100%;
      height: 350px;
      position: relative;
      background-image: url(~@/assets/img/Home/part4BG.png);
      background-size: 100% 100%;
      .p1-img {
        position: absolute;
        left: calc(50% - 101px);
        bottom: -30px;
        width: 202px;
        height: 260px;
      }
    }
    .Home-Layout {
      padding: 80px 35px 60px;
    }
    .part4-step {
      .step-title {
        font-size: 49px;
        font-weight: bold;
        color: #FFFFFF;
      }
      .step-tips1 {
        margin-top: 70px;
        font-size: 37px;
        font-weight: 500;
        color: #FFFFFF;
      }
      .step-tips2 {
        margin-top: 18px;
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
    .part4-submission {
      display: block;
      margin: 0 auto;
      margin-top: 60px;
      min-width: 224px;
      padding: 0 15px;
      height: 50px;
      line-height: 50px;
      border-radius: 24px;
      background-color: #fff;
      text-align: center;
      font-size: 17px;
      font-weight: 500;
      color: #000000;
    }
    .part4-email {
      margin: 0 auto;
      margin-top: 25px;
      width: 250px;
      height: 33px;
      font-size: 13px;
      font-weight: 300;
      color: #FFFFFF;
      text-align: center;
    }
  }
}

.HomePC {
  .HomePC-Layout {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
  .HomePC-part1 {
    width: 100%;
    height: 606px;
    padding-top: 119px;
    position: relative;
    .part1-bg {
      position: absolute;
      top: 27px;
      right: 0;
      width: auto;
      height: 326px;
      z-index: 4;
    }
    .part1-text {
      width: 545px;
      position: relative;
      z-index: 5;
      .text-1 {
        font-size: 46px;
        font-weight: 600;
        color: #000000;
        line-height: 70px;
      }
      .text-2 {
        color: #1c1dff;
        font-size: 54px;
      }
      .text-button {
        margin-top: 46px;
        width: 295px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        font-size: 22px !important;
        font-weight: 500;
        color: #ffffff;
        background-color: #1c1dff;
        border-radius: 10px;
      }
    }
  }

  .HomePC-part2 {
    width: 100%;
    background-color: #000000;
    padding: 80px;
    .HomePC-Layout {
      padding: 43px 0px;
      font-weight: 400;
      color: #ffffff;
    }
    .part2-text {
      margin-top: 70px;
      width: 594px;
      font-size: 18px;
      font-weight: 500;
      color: #ffffff;
      .text-2 {
        font-size: 65px;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 15px;
        margin-top: 8px;
      }
    }
    .part2-bg {
      display: block;
      width: 556px;
    }
  }

  .HomePC-part3 {
    .HomePC-Layout {
      padding: 100px 0;
      position: relative;
      .part3-img1 {
        position: absolute;
        top: 227px;
        right: -50px;
        width: 84px;
        height: 75px;
      }
      .part3-img2 {
        position: absolute;
        left: -100px;
        bottom: 191px;
        width: 96px;
        height: 74px;
      }
      .part3-img3 {
        position: absolute;
        right: -100px;
        bottom: -60px;
        width: 229px;
        height: 124px;
      }
    }
    .part3-title {
      font-size: 65px;
      font-weight: bold;
      text-align: center;
    }
    .part3-text {
      width: 1010px;
      font-size: 26px;
      font-weight: bold;
      color: #000000;
      margin: 0 auto;
      margin-top: 39px;
      text-align: center;
    }
    .part3-buttonList {
      margin-top: 40px;
      .buttonList-button1 {
        width: 250px;
        height: 71px;
        line-height: 71px;
        background-color: #1c1dff;
        font-size: 28px;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
      }
      .buttonList-button2 {
        margin-left: 9px;
        width: 270px;
        height: 71px;
        line-height: 71px;
        background-color: transparent;
        font-size: 28px;
        font-weight: 500;
        color: #595959;
        text-align: center;
      }
    }

    .part3-table {
      margin: 0 auto;
      margin-top: 39px;
      width: 1010px;
      border-radius: 24px;
      background-color: #2c303a;
      text-align: center;
      position: relative;
      .table-border1 {
        position: absolute;
        left: 201px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: RGBA(73, 78, 86, 1);
      }
      .table-border2 {
        position: absolute;
        left: 404px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: RGBA(73, 78, 86, 1);
      }
      .table-border3 {
        position: absolute;
        left: 605px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: RGBA(73, 78, 86, 1);
      }
      .table-border4 {
        position: absolute;
        left: 807px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: RGBA(73, 78, 86, 1);
      }
      .table-width {
        width: 202px;
        flex: 0 0 202px;
      }
      .table-height1 {
        height: 111px;
        line-height: 111px;
        font-size: 23px;
        font-weight: 600;
        color: #ffffff;
      }
      .table-height2 {
        height: 127px;
        padding-top: 30px;
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
      }
    }

    .part3-tips {
      margin: 0 auto;
      margin-top: 34px;
      width: 1010px;
      font-size: 20px;
      font-weight: 400;
      color: #666666;

    }
  }

  .HomePC-part4 {
    background-color: #000000;
    .HomePC-Layout {
      padding: 137px 0 207px 0;
    }
    .part4-p1 {
      width: 1200px;
      height: 400px;
      background-image: url(~@/assets/img/Home/part4BG.png);
      background-size: 100% 100%;
      padding-left: 42px;
      .p1-img {
        // width: 360px;
        height: 500px;
        margin-right: 40px;
      }
      .p1-text {
        font-size: 84px;
        font-weight: bold;
        color: #FFFFFF;
      }
    }
    .part4-step {
      margin-top: 157px;
      padding: 0 5px;
      .step-width {
        width: 250px;
      }
      .step-tips1 {
        margin-top: 20px;
        height: 80px;
        font-size: 18px;
        font-weight: 500;
        color: #FFFFFF;
        padding: 0;
      }
      .step-tips2 {
        margin-top: 5px;
        font-size: 18px;
        font-weight: 500;
        color: #FFFFFF;
        padding: 0;
      }
      .step-title {
        font-size: 43px;
        font-weight: 500;
        color: #FFFFFF;
      }
    }

    .part4-submission {
      display: block;
      margin: 0 auto;
      margin-top: 90px;
      min-width: 432px;
      padding: 0 40px;
      height: 70px;
      line-height: 70px;
      border-radius: 12px;
      background-color: #fff;
      text-align: center;
      font-size: 28px;
      font-weight: 500;
      color: #000000;
    }
  }
}
</style>
