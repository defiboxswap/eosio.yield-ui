<template>
  <div>
    <div class="Join" v-if="isMobile">
      <div class="Join-layout">
        <!-- Projects -->
        <div class="Join-title">{{ $t("yield.yield4") }}</div>

        <div class="Join-basicInfo" id="basic">
          <!-- *Basic Information -->
          <div class="basicInfo-title">{{ $t("yield.yield60") }}</div>
          <div class="basicInfo-box">
            <!-- project name -->
            <div class="basicInfo-subtitle">{{ $t("yield.yield116") }}</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.name" @change="formWrongTips.name = false" />
            <div class="basicInfo-wrongTips" v-if="formWrongTips.name">{{ $t("yield.yield120") }}</div>
          </div>

          <div class="basicInfo-box">
            <!-- Protocols contract -->
            <div class="basicInfo-subtitle flex">
              {{ $t("yield.yield78") }}
              <v-tooltip bottom v-model="tipsShow" :openOnHover="false" :openOnFocus="false" :attach="true">
                <template v-slot:activator="{ on, attrs }">
                  <div class="flex curPoint" v-bind="attrs" v-on="on">
                    <!-- {{ $t('yield.yield61') }} -->
                    <v-icon class="" size="16" style="margin: 0 0 -2px 4px">mdi-information-outline</v-icon>
                  </div>
                </template>
                <div style="width: 300px">
                  {{ $t("yield.yield131") }}
                  <span class="curPoint" @click="openWindow('https://yield-docs-seven.vercel.app/docs/contracts/eosio.yield')">{{ $t("yield.yield132") }} ></span>
                </div>
              </v-tooltip>
            </div>
            <input type="text" class="basicInfo-input1" disabled v-model="eosAccount" />
          </div>

          <!-- Project description -->
          <div class="basicInfo-box">
            <div class="basicInfo-subtitle">{{ $t("yield.yield63") }}</div>
            <textarea class="basicInfo-input1" maxlength="1024" v-model="form.description" @change="formWrongTips.description = false"></textarea>
            <div class="basicInfo-wrongTips" v-if="formWrongTips.description">{{ $t("yield.yield122") }}</div>
          </div>

          <div class="basicInfo-box">
            <!-- Project website -->
            <div class="basicInfo-subtitle">{{ $t("yield.yield64") }}</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.website" @change="formWrongTips.website = false" :placeholder="$t('yield.yield140')" />
            <div class="basicInfo-wrongTips" v-if="formWrongTips.website">{{ $t("yield.yield121") }}</div>
          </div>

          <div class="basicInfo-box">
            <!-- Token contract -->
            <div class="basicInfo-subtitle">{{ $t("yield.yield141") }}</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.tokenCode" @change="formWrongTips.tokenCode = false" />
            <!-- <div class="basicInfo-wrongTips" v-if="formWrongTips.website">{{ $t('yield.yield121') }}</div> -->
          </div>

          <div class="basicInfo-box">
            <!-- Token name -->
            <div class="basicInfo-subtitle">{{ $t("yield.yield142") }}</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.tokenSymcode" @change="formWrongTips.tokenSymcode = false" />
            <!-- <div class="basicInfo-wrongTips" v-if="formWrongTips.website">{{ $t('yield.yield121') }}</div> -->
          </div>

          <div class="basicInfo-box">
            <!-- Project category -->
            <div class="basicInfo-subtitle">{{ $t("yield.yield61") }}</div>
            <!-- <v-select class="basicInfo-input1 select-all" :items="categoryList" v-model="categoryItem" label="" solo :attach="true" :full-width="true"></v-select> -->
            <div class="basicInfo-input1">
              <div class="flex curPoint" @click="categoryShow = !categoryShow">
                <div class="flex-1" style="padding: 0 10px">{{ categoryItem }}</div>
                <v-icon v-if="!categoryShow">mdi-menu-down</v-icon>
                <v-icon v-else>mdi-menu-up</v-icon>
              </div>

              <!-- <div class="input1-selectList" v-if="categoryShow == true">
                <div class="selectList-item" v-for="(item, index) in categoryDesList" :key="index" @click="select(index)">
                  <div>{{ categoryList[index] }}</div>
                  <div class="item-text">{{ $t(item) }}</div>
                </div>
              </div> -->
              <v-list class="input1-selectList" dense v-if="categoryShow == true">
                <v-list-item-group color="primary">
                  <v-list-item v-for="(item, index) in categoryDesList" :key="index">
                    <v-list-item-content @click="select(index)">
                      <v-list-item-title v-html="categoryList[index]"></v-list-item-title>
                      <v-list-item-subtitle v-html="$t(item)" style="overflow: visible; text-overflow: initial; white-space: normal"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </div>

          <div class="basicInfo-box">
            <!-- Project logo (300*300) -->
            <div class="basicInfo-subtitle">{{ $t("yield.yield65") }}</div>

            <div class="basicInfo-logo flex flex-jus-center" v-loading="uploadLoading">
              <img :src="'https://ipfs.pink.gg/ipfs/' + form.logo" v-if="form.logo" style="width: 100%; height: 100%" />
              <img src="@/assets/img/add.png" v-show="!form.logo" style="width: 15px; height: 15px; vertical-align: middle" :key="form.logo" />
              <input type="file" accept="image/*" @change="fileImage" title="" />
            </div>

            <div class="basicInfo-wrongTips" v-if="formWrongTips.logo">{{ $t("yield.yield123") }}</div>
          </div>
        </div>

        <div class="Join-basicInfo">
          <!-- *Contract security -->
          <div class="basicInfo-title">{{ $t("yield.yield68") }}</div>

          <div class="basicInfo-box">
            <!-- Recover+ project ID -->
            <!-- ( What is Recover + ? ) -->
            <div class="basicInfo-subtitle">
              {{ $t("yield.yield73") }}
              <span @click="openWindow('https://eosrecover.com/')" class="curPoint">{{ $t("yield.yield74") }}</span>
            </div>
            <input type="number" class="basicInfo-input1" maxlength="1024" v-model="form.recover" />
          </div>

          <div class="basicInfo-box">
            <div class="basicInfo-subtitle">{{ $t("yield.yield75") }}</div>
            <div class="flex">
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.audits" />
              <!-- <img src="@/assets/img/svg/add_circled.svg" class="basicInfo-addSvg" /> -->
            </div>
          </div>
        </div>

        <div class="Join-basicInfo">
          <!-- *Analytics -->
          <div class="basicInfo-title">{{ $t("yield.yield130") }}</div>

          <div class="basicInfo-box">
            <!-- CoinMarketCap -->
            <div class="basicInfo-subtitle">CoinMarketCap</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.cmc" :placeholder="$t('yield.yield153')" />
          </div>
          <div class="basicInfo-box">
            <!--  CoinGecko -->
            <div class="basicInfo-subtitle">CoinGecko</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.coingecko" :placeholder="$t('yield.yield154')" />
          </div>

          <div class="basicInfo-box">
            <!-- DefiLlama -->
            <div class="basicInfo-subtitle">DefiLlama</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.defillama" :placeholder="$t('yield.yield155')" />
          </div>

          <div class="basicInfo-box">
            <!--  DappRadar -->
            <div class="basicInfo-subtitle">DappRadar</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.dappradar" :placeholder="$t('yield.yield156')" />
          </div>
        </div>

        <div class="Join-basicInfo">
          <!-- Socials -->
          <div class="basicInfo-title">{{ $t("yield.yield129") }}</div>

          <div class="basicInfo-box">
            <!-- Twitter -->
            <div class="basicInfo-subtitle">Twitter</div>
            <input type="text" class="basicInfo-input1" v-model="form.twitter" :placeholder="$t('yield.yield158')" />
          </div>
          <div class="basicInfo-box">
            <!-- Discord -->
            <div class="basicInfo-subtitle">Discord</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.discord" :placeholder="$t('yield.yield159')" />
          </div>
          <div class="basicInfo-box">
            <!-- Telegram -->
            <div class="basicInfo-subtitle">Telegram</div>
            <input type="text" class="basicInfo-input1" v-model="form.telegram" :placeholder="$t('yield.yield157')" />
          </div>
          <div class="basicInfo-box">
            <!-- Github -->
            <div class="basicInfo-subtitle">Github</div>
            <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.github" :placeholder="$t('yield.yield160')" />
          </div>
        </div>
      </div>

      <!-- SUBMIT -->
      <div class="Join-footer flex flex-align-center flex-jus-center">
        <v-btn class="footer-button" @click="submit" :loading="btnLoading">{{ $t("yield.yield83") }}</v-btn>
      </div>
    </div>
    <div class="JoinPC" v-else>
      <div class="JoinPC-overLay">
        <div class="JoinPC-layout flex flex-jus-between">
          <!-- Projects -->
          <div class="overLay-title">{{ $t("yield.yield4") }}</div>
        </div>
      </div>

      <div class="JoinPC-layout">
        <!-- Projects -->
        <div class="JoinPC-basicInfo JoinPC-basicInfoTop" id="basic">
          <!-- *Basic Information -->
          <div class="basicInfo-title">{{ $t("yield.yield60") }}</div>

          <div class="flext marb-25">
            <div class="basicInfo-left">
              <!-- project name -->
              <div class="basicInfo-subtitle">{{ $t("yield.yield116") }}</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.name" @change="formWrongTips.name = false" />
              <div class="basicInfo-wrongTips" v-if="formWrongTips.name">{{ $t("yield.yield120") }}</div>
            </div>
            <div>
              <!-- Project website -->
              <div class="basicInfo-subtitle">{{ $t("yield.yield64") }}</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.website" @change="formWrongTips.website = false" :placeholder="$t('yield.yield140')" />
              <div class="basicInfo-wrongTips" v-if="formWrongTips.website">{{ $t("yield.yield121") }}</div>
            </div>
          </div>

          <div class="flext marb-25">
            <div class="basicInfo-left">
              <!-- Protocols contract -->
              <div class="basicInfo-subtitle flex" @click="tipsShow = !tipsShow">
                {{ $t("yield.yield78") }}

                <v-tooltip bottom v-model="tipsShow" :openOnHover="false" :openOnFocus="false" :attach="true">
                  <template v-slot:activator="{ on, attrs }">
                    <div class="flex curPoint" v-bind="attrs" v-on="on">
                      <!-- {{ $t('yield.yield61') }} -->
                      <v-icon class="" size="16" style="margin: 0 0 -2px 4px">mdi-information-outline</v-icon>
                    </div>
                  </template>
                  <div style="width: 400px">
                    {{ $t("yield.yield131") }}
                    <span class="curPoint" @click="openWindow('https://yield-docs-seven.vercel.app/docs/contracts/eosio.yield')">{{ $t("yield.yield132") }} ></span>
                  </div>
                </v-tooltip>
              </div>
              <input type="text" class="basicInfo-input1" disabled v-model="eosAccount" />
            </div>
            <div>
              <!-- Project category -->
              <div class="basicInfo-subtitle">{{ $t("yield.yield61") }}</div>
              <!-- <v-select class="basicInfo-input1 select-all" :items="categoryList" v-model="categoryItem" label="" solo :attach="true" :full-width="true" :menu-props="{ offsetY: true, offsetOverflow: true, transition: false }"></v-select> -->
              <div class="basicInfo-input1">
                <div class="flex curPoint" @click="categoryShow = !categoryShow">
                  <div class="flex-1" style="padding: 0 10px">{{ categoryItem }}</div>
                  <v-icon v-if="!categoryShow">mdi-menu-down</v-icon>
                  <v-icon v-else>mdi-menu-up</v-icon>
                </div>

                <!-- <div class="input1-selectList" v-if="categoryShow == true">
                  <div class="selectList-item" v-for="(item, index) in categoryDesList" :key="index" @click="select(index)">
                    <div>{{ categoryList[index] }}</div>
                    <div class="item-text">{{ $t(item) }}</div>
                  </div>
                </div> -->

                <v-list class="input1-selectList" dense v-if="categoryShow == true">
                  <v-list-item-group color="primary">
                    <v-list-item v-for="(item, index) in categoryDesList" :key="index">
                      <v-list-item-content @click="select(index)">
                        <v-list-item-title v-html="categoryList[index]"></v-list-item-title>
                        <v-list-item-subtitle v-html="$t(item)" style="overflow: visible; text-overflow: initial; white-space: normal"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </div>
          </div>

          <div class="flext marb-25">
            <div class="basicInfo-left">
              <!-- 	Token contract code -->
              <div class="basicInfo-subtitle">{{ $t("yield.yield141") }}</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.tokenCode" @change="formWrongTips.tokenCode = false" />
              <!-- <div class="basicInfo-wrongTips" v-if="formWrongTips.tokenSymcode">{{ $t('yield.yield120') }}</div> -->
            </div>
            <div>
              <!-- 	Token symbol code -->
              <div class="basicInfo-subtitle">{{ $t("yield.yield142") }}</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.tokenSymcode" @change="formWrongTips.tokenSymcode = false" />
              <!-- <div class="basicInfo-wrongTips" v-if="formWrongTips.tokenCode">{{ $t('yield.yield121') }}</div> -->
            </div>
          </div>

          <div class="flext marb-25">
            <div class="basicInfo-left">
              <!-- Project logo (300*300) -->
              <div class="basicInfo-subtitle">{{ $t("yield.yield65") }}</div>
              <div class="basicInfo-logo flex flex-jus-center" v-loading="uploadLoading">
                <img :src="'https://ipfs.pink.gg/ipfs/' + form.logo" v-if="form.logo" style="width: 100%; height: 100%" />
                <img src="@/assets/img/add.png" v-show="!form.logo" style="width: 15px; height: 15px; vertical-align: middle" :key="form.logo" />
                <input type="file" accept="image/*" @change="fileImage" title="" />
              </div>
              <div class="basicInfo-wrongTips" v-if="formWrongTips.logo">{{ $t("yield.yield123") }}</div>
            </div>
          </div>

          <div class="marb-25">
            <!-- Project description -->
            <div class="basicInfo-subtitle">{{ $t("yield.yield63") }}</div>
            <textarea class="basicInfo-textarea" maxlength="1024" v-model="form.description" @change="formWrongTips.description = false"></textarea>
            <div class="basicInfo-wrongTips" v-if="formWrongTips.description">{{ $t("yield.yield122") }}</div>
          </div>
        </div>

        <div class="JoinPC-basicInfo">
          <!-- *Contract security -->
          <div class="basicInfo-title">{{ $t("yield.yield68") }}</div>

          <div class="flex marb-25">
            <div class="basicInfo-left">
              <!-- Recover+ project ID -->
              <!-- ( What is Recover + ? ) -->
              <div class="basicInfo-subtitle">
                {{ $t("yield.yield73") }}
                <span @click="openWindow('https://eosrecover.com/')" class="curPoint">{{ $t("yield.yield74") }}</span>
              </div>
              <input type="number" class="basicInfo-input1" maxlength="1024" v-model="form.recover" />
            </div>
            <div>
              <!-- Security Audits of smart contracts  (URL) -->
              <div class="basicInfo-subtitle">{{ $t("yield.yield75") }}</div>
              <div class="flex">
                <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.audits" />
                <!-- <img src="@/assets/img/svg/add_circled.svg" class="basicInfo-addSvg" /> -->
              </div>
            </div>
          </div>
        </div>

        <div class="JoinPC-basicInfo">
          <!-- *Analytics -->
          <div class="basicInfo-title">{{ $t("yield.yield130") }}</div>

          <div class="flext marb-25">
            <div class="basicInfo-left">
              <!-- CoinMarketCap -->
              <div class="basicInfo-subtitle">CoinMarketCap</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.cmc" :placeholder="$t('yield.yield153')" />
            </div>
            <div>
              <!--  CoinGecko -->
              <div class="basicInfo-subtitle">CoinGecko</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.coingecko" :placeholder="$t('yield.yield154')" />
            </div>
          </div>

          <div class="flext marb-25">
            <div class="basicInfo-left">
              <!-- DefiLlama -->
              <div class="basicInfo-subtitle">DefiLlama</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.defillama" :placeholder="$t('yield.yield155')" />
            </div>
            <div>
              <!--  DappRadar -->
              <div class="basicInfo-subtitle">DappRadar</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.dappradar" :placeholder="$t('yield.yield156')" />
            </div>
          </div>
        </div>

        <div class="JoinPC-basicInfo">
          <!-- Socials -->
          <div class="basicInfo-title">{{ $t("yield.yield129") }}</div>

          <div class="flext marb-25">
            <div class="basicInfo-left">
              <!-- Twitter -->
              <div class="basicInfo-subtitle">Twitter</div>
              <input type="text" class="basicInfo-input1" v-model="form.twitter" :placeholder="$t('yield.yield158')" />
            </div>
            <div>
              <!-- Discord -->
              <div class="basicInfo-subtitle">Discord</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.discord" :placeholder="$t('yield.yield159')" />
            </div>
          </div>

          <div class="flext marb-25">
            <div class="basicInfo-left">
              <!-- Telegram -->
              <div class="basicInfo-subtitle">Telegram</div>
              <input type="text" class="basicInfo-input1" v-model="form.telegram" :placeholder="$t('yield.yield157')" />
            </div>
            <div>
              <!-- Github -->
              <div class="basicInfo-subtitle">Github</div>
              <input type="text" class="basicInfo-input1" maxlength="1024" v-model="form.github" :placeholder="$t('yield.yield160')" />
            </div>
          </div>
        </div>
      </div>

      <div class="JoinPC-footer">
        <div class="JoinPC-layout flex flex-jus-end flex-align-center" style="height: 100%">
          <!-- SUBMIT -->
          <v-btn class="footer-button" @click="submit" :loading="btnLoading">{{ $t("yield.yield83") }}</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import axios from "axios"
import DApp from "@/utils/wallet/index"
export default {
  name: "Join",
  data() {
    return {
      categoryShow: false,

      tipsShow: false,
      categoryItem: this.$t("yield.yield46"),
      categoryList: [this.$t("yield.yield46"), this.$t("yield.yield47"), this.$t("yield.yield48"), this.$t("yield.yield49"), this.$t("yield.yield149")],
      categoryDesList: ["yield.yield144", "yield.yield145", "yield.yield146", "yield.yield147", "yield.yield148"],

      btnLoading: false,
      uploadLoading: false,

      // eosAccount: this.$store.state.app.accountInfo ? this.$store.state.app.accountInfo.account : "",
      form: {
        audits: null,
        cmc: null,
        coingecko: null,
        dappradar: null,
        defillama: null,
        description: null,
        discord: null,
        github: null,
        logo: null,
        name: null,
        recover: null,
        telegram: null,
        twitter: null,
        website: null,
        tokenCode: null,
        tokenSymcode: null,
      },
      formRules: {
        website: { required: true, gotoId: "basic" },
        // logo: { required: true, gotoId: "basic" },
        // description: { required: true, gotoId: "basic" },
        name: { required: true, gotoId: "basic" },
      },
      formWrongTips: {
        tokenCode: false,
        tokenSymcode: false,
        audits: false,
        cmc: false,
        coingecko: false,
        dappradar: false,
        defillama: false,
        description: false,
        discord: false,
        github: false,
        logo: false,
        name: false,
        recover: false,
        telegram: false,
        twitter: false,
        website: false,
      },
    }
  },
  watch: {
    "$store.state.app.accountInfo": {
      handler: function () {
        // window.location.reload()
        this.$nextTick(() => {
          this.$forceUpdate()
        })
      },
    },
  },
  computed: {
    ...mapState({
      isMobile: (state) => state.app.isMobile,
    }),
    eosAccount() {
      // return this.$store.state.app.accountInfo ? this.$store.state.app.accountInfo.account : "",
      if (this.$store.state.app.accountInfo?.account) return this.$store.state.app.accountInfo.account
      return ""
    },
  },
  created() {
    if (!this.$store.state.app.accountInfo?.account) {
      this.handleWalletLogin()
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    select(index) {
      this.categoryShow = false
      this.categoryItem = this.categoryList[index]
    },
    async submit() {
      const formName = this.$store.state.app.accountInfo.account
      if (!formName) {
        this.handleWalletLogin()
        return
      }
      let gotoId = ""
      if (this.form.cmc) this.form.cmc = parseFloat(this.form.cmc)
      if (this.form.recover) this.form.recover = parseFloat(this.form.recover)
      for (let key in this.formRules) {
        if (this.formRules[key].required) {
          if (this.form[key] == null || this.form[key] == "") {
            this.formWrongTips[key] = true
            gotoId = this.formRules[key].gotoId
          }
        }
      }
      if (gotoId) {
        this.gotoId(gotoId)
        return
      }

      let metadata = []
      for (let key in this.form) {
        if (this.form[key] !== null && this.form[key] !== "") {
          let keyName = key
          if (keyName == "tokenCode") keyName = "token.code"
          if (keyName == "tokenSymcode") keyName = "token.symcode"
          metadata.push({
            key: keyName,
            value: this.form[key],
          })
        }
      }

      const permission = Array.isArray(this.$store.state.app.accountInfo.permissions) ? this.$store.state.app.accountInfo.permissions[0] : this.$store.state.app.accountInfo.permissions
      const params = {
        actions: [],
      }
      this.btnLoading = true
      params.actions.push({
        account: "d.e.yield",
        name: "regprotocol",
        authorization: [
          {
            actor: formName,
            permission: permission || "active",
          },
        ],
        data: {
          protocol: formName,
          metadata,
          category: this.handleCategoryTransform(this.categoryItem),
          // category: 'cdp',
        },
      })

      let result = await DApp.transactionApi({
        params,
      })

      this.btnLoading = false
      if (result && result.code !== 0) {
        console.log("result error is ", result)
        if (result?.error?.code == 3050003) {
          this.$toast(result.error.details[0].message)
          return
        }
        // error info
        DApp.handleScatterErrorBack(result, (type, text) => {
          type === "lang" ? this.$toast(this.$t(text)) : this.$toast(text)
        })
        return
      }

      this.$toast("submit success!")
    },
    fileImage(event) {
      // if(files.size/1024 > 200){
      //     // 200KB
      // }
      this.formWrongTips.logo = false
      let formData = new FormData()
      let files = event.target.files[0]
      formData.append("image", files, files.name)
      console.log(files)
      this.uploadLoading = true
      axios({
        url: "https://ipfs-gateway.pink.gg/v1/upload",
        method: "PUT",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          console.log(res, "---res---")
          this.uploadLoading = false
          if (res.data?.success) {
            this.form.logo = res.data.data
          } else {
            this.$toast("upload img fail")
          }
        })
        .catch((err) => {
          console.log(err)
          this.$toast("upload img fail, err is" + err)
          this.uploadLoading = false
        })
      event.target.value = null
    },

    gotoId(name) {
      if (!name) return
      // console.log(this.$el.querySelector(name).offsetTop, "this.$el.querySelector")
      document.documentElement.scrollTop = this.$el.querySelector("#" + name).offsetTop - 60
    },
    handleWalletLogin() {
      this.$store.dispatch("setWalletLoginVisible", true)
    },
  },
}
</script>

<style lang="scss" scoped>
.Join {
  background-color: #f9fafb;
  padding: 25px 15px;
  padding-bottom: 200px;
  .select-all {
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    border: 1px solid #000;

    ::v-deep .v-input__control {
      min-width: 80px;
      height: 50px;
      min-height: 50px;
      margin-bottom: 0;
    }
    ::v-deep .v-input__slot {
      margin-bottom: 0;
      box-shadow: none;
      min-height: 48px !important;
      box-shadow: none !important;
    }
    ::v-deep .v-select__selections input {
      display: none;
    }
    ::v-deep .v-select__slot label {
      min-width: 80px;
      width: fit-content;
      display: block;
      color: #000;
    }
    ::v-deep .v-select__selections {
      min-width: 80px;
      width: fit-content;
      display: block;
      min-height: auto;
      color: #000;
    }
    ::v-deep .v-select__selection {
      min-width: 40px;
      width: fit-content;
      color: #000;
    }
    ::v-deep .v-input__icon--append .primary--text {
      // background-image: url(~@/assets/img/svg/xiala.svg);
      // background-size: 100% 100%;
      color: #000 !important;
      caret-color: #000 !important;
    }
    ::v-deep .v-text-field__details {
      display: none;
    }
  }
  .Join-layout {
    max-width: 420px;
    margin: 0 auto;
  }
  .Join-title {
    font-size: 21px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 10px;
  }
  .Join-basicInfo {
    padding: 22px 25px;
    border: 1px solid #efefef;
    background-color: #fff;
    border-radius: 12px;
    margin-bottom: 10px;
    .basicInfo-title {
      font-size: 18px;
      font-weight: 600;
      color: #101010;
      margin-bottom: 40px;
    }

    .basicInfo-box {
      margin-bottom: 15px;
      .box-name,
      .basicInfo-subtitle {
        font-size: 15px;
        font-weight: 400;
        color: #666666;
        margin-bottom: 10px;
      }
      .box-input,
      .basicInfo-input1 {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        border: 1px solid #efefef;
        border-radius: 12px;
        position: relative;
        .input1-selectList {
          position: absolute;
          top: 50px;
          left: 0;
          width: 100%;
          padding: 15px;
          background-color: #fff;
          box-shadow: 0px 1px 6px rgba(126, 126, 126, 0.25);
          border-radius: 5px;
          z-index: 5;
          .selectList-item {
            font-weight: 400;
            font-size: 14px;
            margin-bottom: 10px;
            cursor: pointer;
            div {
              line-height: 1.2;
            }
            .item-text {
              font-weight: 400;
              font-size: 12px;
              color: #aaaaaa;
              line-height: 1;
              margin-top: 5px;
              margin-bottom: 15px;
            }
          }
        }
      }
      textarea {
        padding: 10px !important;
        height: 146px !important;
        line-height: normal !important;
      }
      .basicInfo-wrongTips {
        font-size: 12px;
        font-weight: 400;
        color: red;
        margin-top: 4px;
        margin-bottom: 5px;
        padding-left: 8px;
      }
      .box-logo,
      .basicInfo-logo {
        width: 124px;
        height: 124px;
        border: 1px solid #efefef;
        border-radius: 12px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        input {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
      }

      .box-radio {
        ::v-deep .v-messages {
          display: none;
        }
        ::v-deep .v-input__slot {
          margin-bottom: 0;
        }
        ::v-deep .v-input--selection-controls {
          margin-top: 0;
          // padding-top: 0;
        }
      }
      .box-addSvg,
      .basicInfo-addSvg {
        width: 24px;
        height: 24px;
        margin-left: 5px;
      }
    }
  }

  .Join-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 110px;
    background-color: #fff;
    border-top: 1px solid #e8e8e8;
    .footer-button {
      display: block;
      // margin-right: 50px;
      min-width: 190px;
      height: 53px;
      line-height: 53px;
      text-align: center;
      padding: 0 10px;
      background-color: #1c1dff;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      border-radius: 25px;
      cursor: pointer;
    }
  }
}

.JoinPC {
  width: 100%;
  background-color: #f9fafb;
  padding-bottom: 180px;

  .select-all {
    height: 40px;
    line-height: 40px;
    border-radius: 25px;
    border: 1px solid #000;

    ::v-deep .v-input__control {
      min-width: 80px;
      height: 40px;
      min-height: 40px;
      margin-bottom: 0;
    }
    ::v-deep .v-input__slot {
      margin-bottom: 0;
      box-shadow: none;
      min-height: 38px !important;
      box-shadow: none !important;
    }
    ::v-deep .v-select__selections input {
      display: none;
    }
    ::v-deep .v-select__slot label {
      min-width: 80px;
      width: fit-content;
      display: block;
      color: #000;
    }
    ::v-deep .v-select__selections {
      min-width: 80px;
      width: fit-content;
      display: block;
      min-height: auto;
      color: #000;
    }
    ::v-deep .v-select__selection {
      min-width: 40px;
      width: fit-content;
      color: #000;
    }
    ::v-deep .v-input__icon--append .primary--text {
      // background-image: url(~@/assets/img/svg/xiala.svg);
      // background-size: 100% 100%;
      color: #000 !important;
      caret-color: #000 !important;
    }
    ::v-deep .v-text-field__details {
      display: none;
    }
  }

  .JoinPC-layout {
    width: 1200px;
    margin: 0 auto;
  }
  .JoinPC-overLay {
    width: 100%;
    background-color: #000;
    height: 240px;
    padding-top: 30px;
    .overLay-title {
      font-size: 30px;
      font-weight: 600;
      color: #ffffff;
    }
  }
  .JoinPC-title {
    padding-left: 32px;
    font-size: 30px;
    font-weight: 600;
    color: #101010;
    margin-bottom: 18px;
  }
  .JoinPC-basicInfoTop {
    margin-top: -130px;
  }
  .JoinPC-basicInfo {
    width: 100%;
    padding: 40px 50px;
    background-color: #fff;
    margin-bottom: 20px;
    border: 1px solid #efefef;
    border-radius: 24px;
    input,
    textarea {
      outline: none;
      text-shadow: none;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      padding: 0 10px;
    }
    .basicInfo-left {
      width: 390px;
    }
    .basicInfo-title {
      font-size: 20px;
      font-weight: 600;
      color: #101010;
      margin-bottom: 25px;
    }
    .basicInfo-subtitle {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      font-weight: 500;
      color: #000000;
    }
    .basicInfo-wrongTips {
      height: 22px;
      line-height: 22px;
      font-size: 14px;
      font-weight: 400;
      color: red;
    }
    .marb-25 {
      margin-bottom: 25px;
    }
    .basicInfo-input1 {
      width: 339px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #e8e8e8;
      border-radius: 4px;
      position: relative;
      .input1-selectList {
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        padding: 15px;
        background-color: #fff;
        box-shadow: 0px 1px 6px rgba(126, 126, 126, 0.25);
        border-radius: 5px;
        z-index: 5;
        .selectList-item {
          font-weight: 400;
          font-size: 14px;
          margin-bottom: 10px;
          cursor: pointer;
          div {
            line-height: 1.2;
          }
          .item-text {
            font-weight: 400;
            font-size: 12px;
            color: #aaaaaa;
            line-height: 1;
            margin-top: 5px;
            margin-bottom: 15px;
          }
        }
      }
    }
    .basicInfo-textarea {
      width: 100%;
      height: 185px;
      border: 1px solid #e8e8e8;
      border-radius: 4px;
      padding: 10px;
    }
    .basicInfo-addSvg {
      width: 21px;
      height: 21px;
      margin-left: 10px;
      cursor: pointer;
    }

    .basicInfo-radio {
      ::v-deep .v-messages {
        display: none;
      }
      ::v-deep .v-input__slot {
        margin-bottom: 0;
      }
      ::v-deep .v-input--selection-controls {
        margin-top: 0;
        // padding-top: 0;
      }
    }

    .basicInfo-input2 {
      width: 339px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #e8e8e8;
      border-radius: 4px;
    }
    .basicInfo-logo {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      // margin-left: 36px;
      border: 1px solid #e8e8e8;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
    }
  }

  .JoinPC-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    .footer-button {
      display: block;
      margin-right: 50px;
      min-width: 190px;
      height: 53px;
      line-height: 53px;
      text-align: center;
      padding: 0 10px;
      background-color: #1c1dff;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}

input,
textarea {
  outline: none;
  text-shadow: none;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  &::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #c1c2c4 !important;
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #c1c2c4 !important;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #c1c2c4 !important;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c1c2c4 !important;
  }
}
input[disabled] {
  background-color: #f0f0f0;
  color: #000;
}

.v-tooltip__content {
  pointer-events: all !important;
}
</style>
