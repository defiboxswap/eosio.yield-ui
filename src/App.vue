<template>
  <v-app id="app">
    <div ref="main">
      <router-view class="routerView" :class="{'pt70': isMobile1}"></router-view>
    </div>
  </v-app>
</template>
<script>

import DApp from "@/utils/wallet/index"
import { AppInit } from "@/utils/publicApi"
import { commons } from "@/service"
import { getUrlParams } from "@/utils/public"
import { mapState } from "vuex"
export default {
  name: "App",
  data() {
    return {
      isMobile: !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),
      urlQueryObj: {},
    }
  },
  watch: {
    "$store.state.app.language": {
      handler: function () {
        document.title = "Yield+"
        this.setDocumentTitle()
      },
      immediate: true,
    },
    "$store.state.app.accountInfo": {
      handler: function listen(newVal) {
        if (newVal) {
          localStorage.setItem("token", "")
        }
      },
      deep: true,
    },
  },
  computed: {
    ...mapState({
      node: (state) => state.sys.node,
      accountInfo: (state) => state.app.accountInfo,
      language: (state) => state.app.language,
      isMobile1: (state) => state.app.isMobile,
    }),
  },
  components: {},
  beforeCreate() {
    // Delete the clear cache button
    document.getElementById("clearCacheClass").style.display = "none"
    localStorage.setItem("locationSearch", location.search)
  },
  async created() {
    this.handleUrlQuery()
    this.checkMobile()
    this.handleGetChannel()
    window.addEventListener("resize", this.checkMobile)
    try {
      if (this.$store.state.app.themeDark === false) {
        this.$vuetify.theme.dark = false
      } else {
        this.$vuetify.theme.dark = true
      }
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile)
  },
  async mounted() {
    try {
      // handleGetLocaLanguage
      this.handleGetLocaLanguage()
      document.getElementsByTagName("body")[0].className = !this.$vuetify.theme.dark ? "whiteTheme" : "darkTheme"
      // handleGetCommonParam
      this.handleGetCommonParam()
      // AppInit
      AppInit(({ source }) => {
        if (source) {
          if (["web", "ios", "android"].includes(source)) {
            // this.$embed = true
            this.$embed = false
          }
        }
      })
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  },
  methods: {
    // handleUrlQuery
    handleUrlQuery() {
      if (!location.search) return
      let search = location.search.substr(1).split("&")
      let urlQueryObj = {}
      search.forEach((item) => {
        urlQueryObj[item.split("=")[0]] = item.split("=")[1]
      })
      this.urlQueryObj = urlQueryObj
    },
    // first handleGetLocaLanguage
    handleGetLocaLanguage() {
      if (this.urlQueryObj?.lang && ["zh-TW", "ko", "en"].includes(this.urlQueryObj.lang)) {
        // this.urlQueryObj.lang
        this.$store.dispatch("setLanguage", this.urlQueryObj.lang)
        this.$i18n.locale = this.urlQueryObj.lang
        return
      }

      // if (this.language) {
      //   return
      // }
      let lang = "en"
      // if (navigator.language == "zh-CN") {
      //   lang = "zh-TW"
      // } else if (navigator.language == "zh-TW") {
      //   lang = "zh-TW"
      // } else if (navigator.language == "ko") {
      //   lang = "ko"
      // } else {
      //   lang = "en"
      // }
      this.$store.dispatch("setLanguage", lang)
      this.$i18n.locale = lang
    },
    // handleGetCommonParam
    async handleGetCommonParam() {
      let oldNodeList = this.$store.state.sys.node

      // if not node list set new node
      if (!oldNodeList) {
        const { status, result } = await commons.getNodeList()

        if (status) {
          let eosNode = null
          result.data.map((item) => {
            item.chainId = item.chain_id
            const url = new URL(item.url)
            item.host = url.hostname
            item.port = url.port ? url.port : url.protocol === "https:" ? 443 : 80
            item.protocol = url.protocol.substr(0, url.protocol.length - 1)
            if (item.is_default == 1) eosNode = item
            return item
          })

          const nodeList = {
            httpEndpoint: eosNode.url,
            protocol: eosNode.protocol,
            host: eosNode.host,
            port: Number(eosNode.port),
            chainId: eosNode.chainId,
            area: eosNode.area,
          }

          // setNode
          this.$store.dispatch("setNode", nodeList).then(() => {
            let oldNodeList = this.$store.state.sys.node

            let chainParams = {
              embed: this.$embed || false,
              chain: "eos",
              needScatterInit: false,
              channel: this.accountInfo.wallet || "scatter",
              node: oldNodeList,
            }

            chainParams.node = oldNodeList

            DApp.init(chainParams, () => {
              if (this.isMobile || this.accountInfo.wallet === "cloudWallet") {
                this.handleGetAccount()
              }
            })

            const urlParams = getUrlParams(window.location.href) || {}
            // set channel
            let channel = urlParams.channel
            let source = urlParams.utm_source
            if (!channel) {
              channel = localStorage.getItem("channel") || "scatter"
            }
            localStorage.setItem("channel", channel || source)
            this.$store.dispatch("setChannel", channel || source)
          })
        }
      } else {
        let chainParams = {
          embed: this.$embed || false,
          chain: "eos",
          needScatterInit: false,
          channel: this.accountInfo.wallet || "scatter",
          node: oldNodeList,
        }

        chainParams.node = oldNodeList

        DApp.init(chainParams, () => {
          if (this.isMobile || this.accountInfo.wallet === "cloudWallet") {
            this.handleGetAccount()
          }
        })
      }
    },
    // handleGetAccount
    async handleGetAccount() {
      const account = await DApp.getAccount()
      if (account) {
        // account.account_name = account.account;
        this.$store.dispatch("setAccountInfo", account)
      }
    },
    checkMobile() {
      let isMobile = false
      if (document.body.clientWidth >= 1200) isMobile = false
      else isMobile = true
      this.$store.dispatch("setIsMobile", isMobile)
    },
    // Document.tition solution that cannot be changed in certain apps
    setDocumentTitle() {
      setTimeout(() => {
        //Use iframe's online event to refresh the page
        let iframe = document.createElement("iframe")
        iframe.style.visibility = "hidden"
        iframe.style.display = "none"
        iframe.style.width = "1px"
        iframe.style.height = "1px"
        iframe.onload = () => {
          setTimeout(() => {
            document.body.removeChild(iframe)
          }, 0)
        }
        document.body.appendChild(iframe)
      }, 0)
    },
    // handleGetChannel
    handleGetChannel() {
      const urlParams = getUrlParams(window.location.href) || {}
      let channel = urlParams.channel
      let source = urlParams.utm_source
      if (!channel && !source) {
        channel = localStorage.getItem("channel") || source || "scatter"
      }
      localStorage.setItem("channel", channel || source)
    },
  },
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
::v-deep .v-dialog {
  margin: 0;
  border-radius: 15px;
  position: absolute;
  background: #fff;
}

::v-deep .v-dialog--scrollable {
  margin: 0;
  position: absolute;
  bottom: 0;
  border-radius: 15px 15px 0 0;
}
@media screen and (max-width: 1200px) {
  #app {
    overflow-x: hidden;
  }
}
.pt70 {
  padding-top: 70px;
}
</style>
