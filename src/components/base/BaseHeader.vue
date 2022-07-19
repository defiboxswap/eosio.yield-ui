<template>
  <div>
    <div class="BaseHeader BaseHeaderPCFixed flex flex-align-center flex-jus-between" v-if="isMobile">
      <img src="@/assets/img/BaseHeader/logo.png" class="BaseHeader-logo" @click="$router.push('/')" />
      <!-- <img src="@/assets/img/svg/caidan.svg" class="BaseHeader-listIcon" /> -->
      <v-menu nudge-width="0" nudge-top="-8" v-model="accountVisible" offset-y rounded="lg">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <div class="flexc" style="width: 120px; margin-right: -50px">
              <img src="@/assets/img/svg/more-b.svg" style="width: 20px" class="BaseHeader-listIcon" />
              <!-- <img src="@/assets/img/svg/more-b.svg" style="width: 25px;" v-if="!$route.meta.HeaderDark" class="BaseHeader-listIcon"> -->
              <!-- <img src="@/assets/img/svg/more-w.svg" style="width: 25px;" v-else class="BaseHeader-listIcon"> -->
            </div>
          </div>
        </template>
        <div class="accountMenu">
          <div class="accountMenu-item flext flex-align-center flex-jus-center" v-for="(item, index) in tabList" :key="index" @click.prevent="gotoRouter(item)">{{ $t(item.name) }}</div>

          <div class="accountMenu-item flext flex-align-center flex-jus-center flex-column" @click="languageVisible = true">
            <div class="flexc">
              <span>{{ $t("yield.yield9") }}</span>
            </div>
          </div>
          <!-- Node -->
          <div class="accountMenu-item flext flex-align-center flex-jus-center" @click="nodeVisible = true">{{ $t("yield.yield133") }}</div>

          <div class="accountMenu-item flext flex-align-center flex-jus-center flex-column" v-if="$store.state.app.accountInfo.account">
            <div class="flexc">
              <span>{{ $store.state.app.accountInfo.account }}</span>
            </div>
          </div>

          <div class="accountMenu-item flext flex-align-center flex-jus-center flex-column">
            <div class="flexc">
              <span v-if="$store.state.app.accountInfo.account" @click="handleLoginOut">{{ $t("yield.yield59") }}</span>
              <span v-else @click="handleWalletLogin">{{ $t("yield.yield10") }}</span>
            </div>
          </div>
        </div>
      </v-menu>
    </div>

    <div class="BaseHeaderPCFixed BaseHeaderPC flex flex-align-center" :class="{ BaseHeaderPCDark: $route.meta.HeaderDark }" v-else-if="!isMobile">
      <div class="BaseHeaderPC-Layout flex flex-align-center flex-jus-between">
        <div class="flex flex-align-center">
          <img src="@/assets/img/BaseHeader/logoDark.png" class="BaseHeaderPC-logo" @click="$router.push('/')" v-if="$route.meta.HeaderDark" />
          <img src="@/assets/img/BaseHeader/logo.png" class="BaseHeaderPC-logo" @click="$router.push('/')" v-else />

          <a class="BaseHeaderPC-tab" :href="item.url" :class="{ 'BaseHeaderPC-tabActive': item.routerName == $route.name }" v-for="(item, index) in tabList" :key="index" @click.prevent="gotoRouter(item)">{{ $t(item.name) }}</a>
        </div>

        <v-menu nudge-width="0" nudge-top="-10" nudge-left="70" v-model="accountVisible" offset-y rounded="lg">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <div style="width: 120px; margin-right: -40px" class="flex flex-jus-end">
                <div class="flexc" style="padding-left: 20px">
                  <img src="@/assets/img/svg/more-b.svg" style="width: 20px" v-if="!$route.meta.HeaderDark" />
                  <img src="@/assets/img/svg/more-w.svg" style="width: 20px" v-else />
                </div>
              </div>
            </div>
          </template>
          <div class="accountMenu">
            <div class="accountMenu-item flext flex-align-center flex-jus-center flex-column" @click="languageVisible = true">
              <div class="flexc">
                <span>{{ $t("yield.yield9") }}</span>
              </div>
            </div>
            <!-- Node -->
            <div class="accountMenu-item flext flex-align-center flex-jus-center" @click="nodeVisible = true">{{ $t("yield.yield133") }}</div>

            <div class="accountMenu-item flext flex-align-center flex-jus-center flex-column" v-if="$store.state.app.accountInfo.account">
              <div class="flexc">
                <span>{{ $store.state.app.accountInfo.account }}</span>
              </div>
            </div>

            <div class="accountMenu-item flext flex-align-center flex-jus-center flex-column">
              <div class="flexc">
                <span v-if="$store.state.app.accountInfo.account" @click="handleLoginOut">{{ $t("yield.yield59") }}</span>
                <span v-else @click="handleWalletLogin">{{ $t("yield.yield10") }}</span>
              </div>
            </div>
          </div>
        </v-menu>
      </div>
    </div>
    <div class="BaseHeaderPC" v-if="!isMobile"></div>

    <!-- BaseLanguage -->
    <v-dialog width="90%" max-width="420px" v-model="languageVisible"><BaseLanguage :visible.sync="languageVisible" /></v-dialog>
    <!-- BaseNode -->
    <v-dialog width="90%" max-width="420px" v-model="nodeVisible"><BaseNode :visible.sync="nodeVisible" /></v-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex"
import DApp from "@/utils/wallet/index"
export default {
  name: "BaseHeader",
  data() {
    return {
      accountVisible: false,
      nodeVisible: false,
      languageVisible: false,
      tabList: [
        {
          // name: 'HOME',
          name: "yield.yield1",
          routerName: "Home",
          url: "/",
        },
        {
          // name: 'OVERVIEW',
          name: "yield.yield2",
          routerName: "Overview",
          url: "/Overview",
        },
        {
          // name: 'PROTOCOLS',
          name: "yield.yield3",
          routerName: "Protocols",
          url: "/Protocols",
        },
        {
          // name: 'JOIN YIELD',
          name: "yield.yield4",
          routerName: "Join",
          url: "/Join",
        },
        {
          // name: 'YIELD+ BLUEPAPER',
          name: "yield.yield5",
          routerName: "Bluepaper",
          url: "/Bluepaper",
        },
      ],
    }
  },
  components: {},
  props: {},
  watch: {},
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
  }),
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    gotoRouter(item) {
      if (item.routerName == "Bluepaper") {
        if (this.$store.state.app.language == "zh-TW") window.open("https://eosnetwork.com/zh/blog/eos-yield-blue-paper/")
        else window.open("https://eosnetwork.com/blog/eos-yield-blue-paper/")
        return
      }
      this.$router.push(item.url)
    },
    // 退出账号
    async handleLoginOut() {
      await DApp.forgetIdentity()
      this.$store.dispatch("setAccountInfo", {})
      const route = this.$route
      if (route && route.meta && route.meta.isUser) {
        this.$router.push("/")
        return
      }
      window.location.reload()
    },
    handleWalletLogin() {
      this.$store.dispatch("setWalletLoginVisible", true)
    },
  },
}
</script>
<style lang="scss" scoped>
.BaseHeader {
  width: 100%;
  padding: 0 18px;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  .BaseHeader-logo {
    width: 100px;
    // height: 33px;
    cursor: pointer;
  }
  .BaseHeader-listIcon {
    width: 28px;
    height: 22px;
    cursor: pointer;
  }
}

.BaseHeaderPCFixed {
  position: fixed;
  top: 0;
  z-index: 199;
}

.BaseHeaderPC {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  transition: 0.1s linear;
  .BaseHeaderPC-Layout {
    width: 1200px;
    margin: 0 auto;
  }
  .BaseHeaderPC-logo {
    width: 110px;
    // height: 38px;
    cursor: pointer;
    margin-right: 20px;
  }
  .BaseHeaderPC-tab {
    margin-left: 20px;
    margin-right: 20px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    display: block;
    color: #666666;
    cursor: pointer;
  }
  .BaseHeaderPC-tabActive {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    color: #1c1dff;
    &::after {
      content: " ";
      position: absolute;
      width: calc(100% + 10px);
      height: 2px;
      bottom: -1px;
      left: -5px;
      background-color: #1c1dff;
    }
  }
}
.BaseHeaderPCDark {
  background-color: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  .BaseHeaderPC-tab {
    font-size: 16px;
    font-weight: 500;
    color: #666666;
  }
  .BaseHeaderPC-tabActive {
    color: #fdfdff;
  }
}

.accountMenu {
  width: 150px;
  background-color: #fff;
  padding: 9px 9px 0px 9px;
  .accountMenu-item {
    width: 100%;
    text-align: center;
    height: 46px;
    border-bottom: 1px solid #eeeff0;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    color: #222222;
    svg {
      margin-right: 9px;
    }
    &:last-child {
      border-bottom: none;
    }
  }
  .h_accountMenu_item {
    height: 66px;
  }
}
</style>
