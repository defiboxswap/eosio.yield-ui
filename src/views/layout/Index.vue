<template>
  <div id="appLayout" >
    <BaseHeader></BaseHeader>

    <router-view />


    <BaseFooter v-if="!$route.meta.noFooter"></BaseFooter>


    <!-- 用户登录 钱包选择 -->
    <v-dialog class="walletLoginDiaog" :persistent="true" @click:outside="handleOutside" v-model="walletLoginVisible" width="350"><BaseWalletLogin @listenWalletLoginClose="listenWalletLoginClose" :walletLoginShow="walletLoginVisible" /></v-dialog>

  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "appLayout",
  data() {
    return {
      screenWidth: document.body.clientWidth,
      showHeader: null, // 路由设置是否显示头部
      isScrolls: false, //屏幕是否滚动
      activityModel: false, // 活动窗口
      activityImg: '', // 活动图片链接
      go_activity: '', // 活动链接
      activityData: [], // 活动数据
      // loading: true,
    };
  },
  components: {},
  props: {},
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
      this.$store.dispatch("setScreenWidth", this.screenWidth);
      this.handlerInitHeader();
    },
    "$route.name": function change() {
      this.handlerInitHeader();
    },
  },
  computed: {
    ...mapState({
      walletLoginVisible: (state) => state.app.walletLoginVisible,
    }),
  },
  updated() {
    // let dom = document.getElementsByClassName("layout-content")[0];
    // dom.scrollTo(0, 0);
  },
  created() {
    this.checkScreenWidth();
    this.$store.dispatch("setScreenWidth", this.screenWidth);
    window.addEventListener("resize", this.checkScreenWidth);
    this.handlerInitHeader();
    // window.addEventListener("scroll", throttle(this.btn_poss, 100))
    // window.addEventListener("scroll",this.btn_poss)
  },
  mounted() {

  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  methods: {
    btn_poss() {
      //滚动条的高度
      const scrollTops = document.body.scrollTop || document.documentElement.scrollTop;
      // console.log(scrollTops, 'scrollTop666');
      if (scrollTops > 0) {
        this.isScrolls = true;
      } else {
        this.isScrolls = false;
      }
    },
    handleOutside() {
      this.$store.dispatch("setWalletLoginVisible", false);
    },
    // 钱包登录
    handleWalletLogin() {
      this.$store.dispatch("setWalletLoginVisible", true);
    },
    // 初始化头部
    handlerInitHeader() {
      if (this.$route.meta.hasHeader) {
        this.showHeader = true;
      } else {
        // this.showHeader = this.$store.state.app.isMobile ? false : true;
        // 判断是否屏幕小于501
        this.showHeader = document.body.clientWidth > 501 ? true : false;
      }
    },
    checkScreenWidth() {
      window.screenWidth = document.body.clientWidth;
      this.screenWidth = window.screenWidth;
    },
    // 监听钱包回调
    listenWalletLoginClose(val){
      this.$store.dispatch("setWalletLoginVisible", val);
    }
  },
};
</script>
<style lang="scss" scoped>
::v-deep .v-dialog {
  box-shadow: none;
}

.leftNavPosition {
  width: 200px;
  flex: 0 0 200px;
}

@media screen and (max-width: 1400px) {
  .leftNavPosition {
    display: none;
  }
}

.layout-content {
  .noHeader {
    max-height: calc(100vh - 60px);
  }
  .hasHeader {
    // header 70px + tabbar 56px
    // padding-top: 10px;
    // margin-top: -10px;
    // padding-bottom: 10px;
    // max-height: calc(100vh - 116px);
    // max-height: calc(100vh - 70px);
    max-height: calc(100vh - 70px);
    max-height: calc(100vh - 70px);
    overflow-y: auto;
    // &.bssHeader {
    //   max-height: calc(100vh - 70px);
    //   padding-bottom: 0;
    // }
  }
}
.boxShaos{
  background: red;
}
.walletLoginDiaog{
}
// 活动弹窗
.noticebox {
  width: 100%;
  line-height: 0;
  position: relative;
  img{
    width: 100%;
    height: auto;
  }
  .close{
    position: absolute;
    right: 15px;
    top: 15px;
  }
}
@media screen and (min-width: 751px) {
  .layout-content {
    .hasHeader {
      max-height: calc(100vh - 60px);
    }
  }
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .layout-content {
    .hasHeader {
      max-height: calc(100vh - 126px);
    }
  }
}

// @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
//   .layout-content {
//     .hasHeader {
//       max-height: calc(100vh - 140px);
//     }
//   }
// }
</style>
