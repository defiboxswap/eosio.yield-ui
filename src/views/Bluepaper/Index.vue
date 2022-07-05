<template>
  <div>
    <div class="Bluepaper" v-if="isMobile"></div>
    <div class="BluepaperPC" v-else>
      <div class="BluepaperPC-layout">
        <div class="BluepaperPC-title">Projects</div>

        <div class="BluepaperPC-box1 flext">
          <div class="box1-left">
            <img src="../../assets/img/svg/defibox_logo.svg" class="box1-logo">
            <div class="box1-text1">PNETWORK</div>
            <div class="flex flex-wrap">
              <div class="box1-label">Corss-chain</div>
              <div class="box1-label">Corss-chain</div>
            </div>
          </div>

          <div class="box1-line"></div>

          <div class="flex-1">

            <div class="box1-info flext flex-jus-between">
              <div>
                <div class="info-title">Ranking</div>
                <div class="info-text">$2.3 B</div>
              </div>
              <div>
                <div class="info-title">Ranking</div>
                <div class="info-text">$2.3 B</div>
              </div>
              <div>
                <div class="info-title">Ranking</div>
                <div class="info-text">$2.3 B</div>
              </div>
              <div>
                <div class="info-title">Ranking</div>
                <div class="info-text">$2.3 B</div>
              </div>
            </div>


            <div>Swap is decentralized token swap and AMM (automatic market-making) protocol. The protocol was launched on EOS chain on July 21, 2020 and was launched on BSC chain on July 21, 2021. It provides swap prices in real time through the constant product algorithm, and users can also create ...  More</div>
          </div>

        </div>

        <div class="BluepaperPC-box2"></div>

        <div>
          <div class="BluepaperPC-box3Title">Information</div>
          <div class="BluepaperPC-box3 flext">
            <div class="box3-left flext flex-jus-between">
              <div>
                <div class="box3-title">{{ $t('yield.yield142') }}</div>
                <div class="box3-text">BOX</div>
              </div>
              <div>
                <div class="box3-title">ADDRESS</div>
                <div class="box3-text">TOKEN.DEFI</div>
              </div>
            </div>
            <div class="box3-line"></div>
            <div class="box3-center flext flex-jus-between">
              <div>
                <div class="box3-title">OPEN SURCE</div>
                <div class="box3-text">NO</div>
              </div>
              <div>
                <div class="box3-title">MULTI-SIG</div>
                <div class="box3-text">YES</div>
              </div>
              <div>
                <div class="box3-title">SECURITY AUDITS</div>
                <div class="box3-text">YES DETAILS</div>
              </div>
            </div>
            <div class="box3-line"></div>
            <div class="box3-right flext flex-jus-between">
              <div>
                <div class="box3-title">WHITEPAPER</div>
                <div class="box3-text">TEAM INTRODUCTION</div>
              </div>
            </div>
          </div>
        </div>


        <div class="BluepaperPC-footer">
          <div class="BluepaperPC-layout flex flex-align-center flex-jus-between">
            <div>
              <div class="footer-text1">Rewards Available</div>
              <div class="footer-text2 flex">
                <div>3234.4543</div>
                <div class="text2-symbol"> EOS</div>
              </div>
            </div>

            <div class="flex">
              <v-btn class="footer-button1">CLAIM</v-btn>
              <v-btn class="footer-button2">EDIT</v-btn>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Bluepaper',
  data() {
    return {
    }
  },
  components: {},
  props: {},
  watch: {},
  computed: mapState({
    isMobile: state => state.app.isMobile
  }),
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.BluepaperPC {
  padding: 40px 0 180px;
  .BluepaperPC-layout {
    width: 1200px;
    margin: 0 auto;
  }
  .BluepaperPC-title {
    font-size: 30px;
    font-weight: 600;
    color: #101010;
    margin-bottom: 20px;
  }

  .BluepaperPC-box1 {
    width: 100%;
    min-height: 243px;
    padding: 34px 73px 34px 56px;
    border-radius: 15px;
    border: 1px solid #E8E8E8;
    margin-bottom: 20px;
    .box1-left {
      width: 260px;
    }
    .box1-line {
      width: 1px;
      height: 100%;
      background-color: #E8E8E8;
      margin-left: 10px;
      margin-right: 72px;
      min-height: 210px;
      align-self: center;
    }
    .box1-logo {
      width: 180px;
      margin-bottom: 40px;
      margin-top: 30px;
    }
    .box1-text1 {
      font-size: 20px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 10px;
    }
    .box1-label {
      min-width: 77px;
      padding: 0 10px;
      height: 26px;
      line-height: 26px;
      border-radius: 15px;
      margin-right: 8px;
      font-size: 10px;
      font-weight: 400;
      color: #000000;
      border: 1px solid #d9d9d9;
    }

    .box1-info {
      padding: 12px 40px 0 0;
      margin-bottom: 40px;
      font-size: 14px;
      font-weight: 400;
      color: #000000;
      .info-title {
        font-size: 14px;
        font-weight: 500;
        color: #999999;
        height: 28px;
        line-height: 28px;
      }
      .info-text {
        font-size: 26px;
        font-weight: 600;
        color: #000000;
      }
    }
  }

  .BluepaperPC-box2 {
    width: 100%;
    height: 452px;
    border-radius: 15px;
    border: 1px solid #E8E8E8;
    background-color: #fff;
  }

  .BluepaperPC-box3Title {
    margin-top: 38px;
    margin-bottom: 26px;
    font-size: 30px;
    font-weight: 600;
    color: #101010;
  }
  .BluepaperPC-box3 {
    width: 100%;
    min-height: 141px;
    border-radius: 15px;
    border: 1px solid #E8E8E8;
    background-color: #fff;
    padding: 20px 50px;
    .box3-line {
      width: 1px;
      height: 100%;
      background-color: #E8E8E8;
      min-height: 110px;
      align-self: center;
    }
    .box3-left {
      width: 260px;
      padding-right: 40px;
    }
    .box3-center {
      flex: 1;
      padding: 0 55px;
    }
    .box3-right {
      width: 220px;
      padding-left: 40px;
    }
    .box3-title {
      height: 60px;
      line-height: 60px;
      font-size: 14px;
      font-weight: 500;
      color: #999999;
    }
    .box3-text {
      font-size: 14px;
      font-weight: 600;
      color: #000000;
    }
  }

  .BluepaperPC-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    .BluepaperPC-layout {
      padding: 0 26px 0 58px;
      height: 100%;
    }
    .footer-text1 {
      font-size: 16px;
      font-weight: 400;
      color: #000000;
      margin-bottom: 10px;
    }
    .footer-text2 {
      font-size: 26px;
      font-weight: 600;
      color: #000000;
      .text2-symbol {
        font-size: 18px;
        margin-left: 3px;
        font-weight: 500;
      }
    }
   .footer-button1 {
     display: block;
     min-width: 190px;
     height: 53px;
     line-height: 53px;
     text-align: center;
     padding: 0 10px;
     background-color: #1C1DFF;
     font-size: 16px;
     font-weight: 500;
     color: #FFFFFF;
     border-radius: 5px;
     cursor: pointer;
     margin-right: 23px;
   }
   .footer-button2 {
     display: block;
     min-width: 190px;
     height: 53px;
     line-height: 53px;
     text-align: center;
     padding: 0 10px;
     background-color: #fff;
     font-size: 16px;
     font-weight: 500;
     color: #666;
     border-radius: 5px;
     cursor: pointer;
    border: 1px solid #e8e8e8;
   }
  }
}
</style>