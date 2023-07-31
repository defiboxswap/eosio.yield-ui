<template>
  <div>
    <!-- mobile -->
    <div
      class="Protocols"
      v-if="isMobile"
      >
      <div class="Protocols-title">
        <div class="Protocols-layout">
          <div class="title-select flex mb specil-cls">
            <div class="select-audit flex">
              <div
                class="audit-tips1"
                style="color: #000"
                @click="clickInfoTab('TVLRankings')"
              >{{ $t("yield.yield50") }}</div>
              <div class="audit-line"></div>
              <div
                class="audit-tips2"
                style="color: #999"
                @click="clickInfoTab('Audit')"
              >{{ $t("yield.yield51") }}</div>
            </div>
          </div>
          <div class="flex mb">
            <div class="title-search">
              <img src="@/assets/img/svg/sousuo.svg" />
              <input
                type="text"
                class="flex-1"
                :placeholder="$t('yield.yield56')"
                v-model="search"
              />
              <v-select
                class="select-all select-all-mobile flex-1"
                :items="items"
                v-model="selectVal"
                label="All"
                solo
                :attach="true"
                :full-width="true"
                :menu-props="{ offsetY: true, offsetOverflow: true, transition: false }"
              ></v-select>
            </div>

            <v-select
              class="select-all"
              style="border-radius: 10px"
              :items="chains"
              v-model="networkVal"
              item-text="text"
              item-value="value"
              label="All"
              solo
              :attach="true"
              :full-width="true"
              :menu-props="{ offsetY: true, offsetOverflow: true, transition: false }"
            ></v-select>

            <!-- <div class="title-select flex unit-cls">
              <div class="select-audit flex">
                <div
                  class="audit-tips1 flex-1"
                  :style="{ color: (unitBoolean ? '#000' : '#999')}"
                  @click="handleUnit('USD')"
                >USD</div>
                <div
                  class="audit-tips2 flex-1"
                  :style="{ color: (!unitBoolean ? '#000' : '#999')}"
                  @click="handleUnit('EOS')"
                >EOS</div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="Protocols-projectList">
        <template v-if="protocolsList && protocolsList.length > 0">
          <div
            v-for="(item, index) in protocolsList"
            :key="index"
            @click.prevent="$router.push(item.nameUrlencode)"
          >
            <div class="projectList-box">
              <div class="flex">
                <div class="box-left flex">
                  <div class="box-index">{{ index + 1 }}</div>
                  <img
                    :src="item.logo"
                    class="box-avatar"
                    :onerror="errImg"
                  />
                </div>
                <div class="flex-1">
                  <div class="box-name">{{ item.metadata_name }}</div>
                  <div class="flex flex-wrap">
                    <div class="box-label">{{ handleCategory(item.category) }}</div>
                    <!-- <div
                      class="box-label maxTagCls"
                      v-if="item.maxTag"
                    >{{ $t("yield.yield202") }}</div>
                    <div
                      class="box-label midTagCls"
                      v-if="item.midTag"
                    >{{ $t("yield.yield201") }}</div>
                    <div
                      class="box-label minTagCls"
                      v-if="item.minTag"
                    >{{ $t("yield.yield200") }}</div> -->
                    <!-- <div class="box-label">Corss-chain</div> -->
                    <!-- <div class="box-label"  v-if="handleGrade(item.tvl_eos)">{{ handleGrade(item.tvl_eos) }}</div> -->
                  </div>
                </div>
              </div>

              <div class="box-data">
                <div class="flext">
                  <div class="data-box flex-1">
                    <div
                      class="data-name"
                      :style="{'color': order === 'tvl_usd' ? '#000' : ''}"
                      @click.stop="handleOrderType('tvl_usd')"
                    >
                      {{ $t("yield.yield53") }}
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg"
                        v-if="order === 'tvl_usd' && order_type === 'desc'"
                      />
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg rotate180"
                        v-else-if="order === 'tvl_usd' && order_type === 'asc'"
                      />
                      <img
                        src="@/assets/img/svg/downFail.png"
                        class="svg"
                        v-else
                      />
                    </div>
                    <div class="data-number">{{ unitBoolean ? `$${getKMBUnit(item.tvl_usd)}` : `${getKMBUnit(item.tvl_eos)} EOS` }}</div>
                  </div>
                  <div class="data-box flex-1">
                    <div
                      class="data-name"
                      :style="{'color': order === 'tvl_usd_change_8h' ? '#000' : ''}"
                      @click.stop="handleOrderType('tvl_usd_change_8h')"
                    >
                      {{ $t("yield.yield175") }}
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg"
                        v-if="order === 'tvl_usd_change_8h' && order_type === 'desc'"
                      />
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg rotate180"
                        v-else-if="order === 'tvl_usd_change_8h' && order_type === 'asc'"
                      />
                      <img
                        src="@/assets/img/svg/downFail.png"
                        class="svg"
                        v-else
                      />
                    </div>
                    <div
                      class="data-number"
                      :class="getColor(item.tvl_usd_change_8h)"
                    >{{ item.tvl_usd_change_8h }}</div>
                  </div>
                  <div class="data-box flex-1" style="flex: 1.2">
                    <div
                      class="data-name"
                      :style="{'color': order === 'tvl_usd_change_day' ? '#000' : ''}"
                      @click.stop="handleOrderType('tvl_usd_change_day')"
                    >
                      {{ $t("yield.yield208") }}
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg"
                        v-if="order === 'tvl_usd_change_day' && order_type === 'desc'"
                      />
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg rotate180"
                        v-else-if="order === 'tvl_usd_change_day' && order_type === 'asc'"
                      />
                      <img
                        src="@/assets/img/svg/downFail.png"
                        class="svg"
                        v-else
                      />
                    </div>
                    <div
                      class="data-number"
                      :class="getColor(item.tvl_usd_change_day)"
                    >{{ item.tvl_usd_change_day }}</div>
                  </div>
                </div>
                <div class="flext">
                  <div class="data-box flex-1">
                    <div
                      class="data-name"
                      :style="{'color': order === 'tvl_usd_change_week' ? '#000' : ''}"
                      @click.stop="handleOrderType('tvl_usd_change_week')"
                    >
                      {{ $t("yield.yield176") }}
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg"
                        v-if="order === 'tvl_usd_change_week' && order_type === 'desc'"
                      />
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg rotate180"
                        v-else-if="order === 'tvl_usd_change_week' && order_type === 'asc'"
                      />
                      <img
                        src="@/assets/img/svg/downFail.png"
                        class="svg"
                        v-else
                      />
                    </div>
                    <div
                      class="data-number"
                      :class="getColor(item.tvl_usd_change_week)"
                    >{{ item.tvl_usd_change_week }}</div>
                  </div>
                  <div class="data-box flex-1">
                    <div class="data-name">{{ $t("yield.yield177") }}</div>
                    <div class="data-number">
                      <img
                        width="70"
                        height="50"
                        alt="7d chart"
                        :src="getImgUrl(item.name)"
                      />
                    </div>
                  </div>
                  <div class="data-box flex-1" style="flex: 1.2">
                    <div
                      class="data-name"
                      :style="{'color': order === 'agg_rewards' ? '#000' : ''}"
                      @click.stop="handleOrderType('agg_rewards')"
                    >
                      {{ $t("yield.yield54") }}
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg"
                        v-if="order === 'agg_rewards' && order_type === 'desc'"
                      />
                      <img
                        src="@/assets/img/svg/down.png"
                        class="svg rotate180"
                        v-else-if="order === 'agg_rewards' && order_type === 'asc'"
                      />
                      <img
                        src="@/assets/img/svg/downFail.png"
                        class="svg"
                        v-else
                      />
                    </div>
                    <div class="data-number">{{ unitBoolean ? `$${toFixed(item.agg_rewards_change, 2)}` : `${toFixed(item.agg_rewards_change, 4)} EOS` }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="item.maxTips && order === 'tvl_usd' && order_type === 'desc'"
              class="tipsBack"
            >{{ $t("yield.yield196") }}</div>
            <div
              v-if="item.minTips && order === 'tvl_usd' && order_type === 'desc'"
              class="tipsBack"
            >{{ $t("yield.yield197") }}</div>
          </div>
          <div
            id="pagesBox"
            class="pagesbox"
            v-if="isMore"
            @click="nextList"
          >{{ $t("yield.yield57") }}</div>
        </template>
        <div v-else-if="!loading">
          <BaseNoData></BaseNoData>
        </div>
      </div>
    </div>
    <!-- pc -->
    <div
      class="ProtocolsPC"
      v-else
    >
      <div class="ProtocolsPC-overLay">
        <div class="ProtocolsPC-layout flex flex-jus-between">
          <!-- Projects -->
          <div class="overLay-title">
            <!-- {{ $t("yield.yield195") }} -->
            <div class="select-audit flex flex-align-center">
              <!-- TVL Rankings -->
              <div
                class="audit-tips1 flex-1"
                style="color: #fff"
                @click="clickInfoTab('TVLRankings')"
              >{{ $t("yield.yield50") }}</div>
              <div class="audit-line"></div>
              <!-- Audit -->
              <div
                class="audit-tips2 flex-1"
                style="color: #999"
                @click="clickInfoTab('Audit')"
              >{{ $t("yield.yield51") }}</div>
            </div>
          </div>

          <div class="overLay-select flex">
            <v-select
              class="select-all"
              :items="items"
              v-model="selectVal"
              item-text="text"
              item-value="value"
              label="All"
              solo
              :attach="true"
              :full-width="true"
              :menu-props="{ offsetY: true, offsetOverflow: true, transition: false }"
            ></v-select>

            <v-select
              class="select-all"
              :items="chains"
              v-model="networkVal"
              item-text="text"
              item-value="value"
              label="All"
              solo
              :attach="true"
              :full-width="true"
              :menu-props="{ offsetY: true, offsetOverflow: true, transition: false }"
            ></v-select>

            <!-- <div class="select-audit flex flex-align-center unit-cls" style="margin-right: 8px;">
              unit usd
              <div
                class="audit-tips1 flex-1"
                :style="{ color: (unitBoolean ? '#000' : '#999')}"
                @click="handleUnit('USD')"
              >USD</div>
              <div class="audit-line"></div>
              unit eos
              <div
                class="audit-tips2 flex-1"
                :style="{ color: (!unitBoolean ? '#000' : '#999')}"
                @click="handleUnit('EOS')"
              >EOS</div>
            </div> -->

            <div class="select-search flex">
              <!-- <div class="flex-1">{{ $t("yield.yield56") }}</div> -->
              <input
                type="text"
                class="flex-1"
                :placeholder="$t('yield.yield56')"
                v-model="search"
              />
              <img
                src="@/assets/img/svg/sousuo.svg"
                class="svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="ProtocolsPC-projectList">
        <div class="ProtocolsPC-layout">
          <div class="projectList-box">
            <div class="box-title flex flex-align-center">
              <!-- PROTOCOLS NAME -->
              <div
                class="box-1"
                style="text-align: left; padding-left: 20px; width: 380px;"
              >{{ $t("yield.yield52") }}</div>
              <div
                class="box-2 flex flex-jus-center"
                @click="handleOrderType('tvl_usd')"
              >
                <!-- TVL -->
                <span :style="{'color': order === 'tvl_usd' ? '#000' : ''}">{{ $t("yield.yield53") }}</span>
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg"
                  v-if="order === 'tvl_usd' && order_type === 'desc'"
                />
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg rotate180"
                  v-else-if="order === 'tvl_usd' && order_type === 'asc'"
                />
                <img
                  src="@/assets/img/svg/downFail.png"
                  class="svg"
                  v-else
                />
              </div>
              <!-- CHANGE(24H) -->
              <!-- <div class="box-3 flex flex-jus-center" @click="order = 'tvl_usd_change'">
                <span>{{ $t("yield.yield42") }}</span>
                <img src="@/assets/img/svg/down.png" class="svg" v-if="order === 'tvl_usd_change'" />
                <img src="@/assets/img/svg/downFail.png" class="svg" v-else />
              </div> -->
              <!-- 8h -->
              <div
                class="box-3 flex flex-jus-center"
                @click="handleOrderType('tvl_usd_change_8h')"
              >
                <span :style="{'color': order === 'tvl_usd_change_8h' ? '#000' : ''}">{{ $t("yield.yield175") }}</span>
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg"
                  v-if="order === 'tvl_usd_change_8h' && order_type === 'desc'"
                />
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg rotate180"
                  v-else-if="order === 'tvl_usd_change_8h' && order_type === 'asc'"
                />
                <img
                  src="@/assets/img/svg/downFail.png"
                  class="svg"
                  v-else
                />
              </div>
              <!-- 24h -->
              <div
                class="box-3 flex flex-jus-center"
                @click="handleOrderType('tvl_usd_change_day')"
              >
                <span :style="{'color': order === 'tvl_usd_change_day' ? '#000' : ''}">{{ $t("yield.yield208") }}</span>
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg"
                  v-if="order === 'tvl_usd_change_day' && order_type === 'desc'"
                />
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg rotate180"
                  v-else-if="order === 'tvl_usd_change_day' && order_type === 'asc'"
                />
                <img
                  src="@/assets/img/svg/downFail.png"
                  class="svg"
                  v-else
                />
              </div>
              <!-- 7day -->
              <div
                class="box-3 flex flex-jus-center"
                @click="handleOrderType('tvl_usd_change_week')"
              >
                <span :style="{'color': order === 'tvl_usd_change_week' ? '#000' : ''}">{{ $t("yield.yield176") }}</span>
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg"
                  v-if="order === 'tvl_usd_change_week' && order_type === 'desc'"
                />
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg rotate180"
                  v-else-if="order === 'tvl_usd_change_week' && order_type === 'asc'"
                />
                <img
                  src="@/assets/img/svg/downFail.png"
                  class="svg"
                  v-else
                />
              </div>
              <!-- Last 7 Days -->
              <div class="box-3 flex flex-jus-center">
                <span style="cursor: text;">{{ $t("yield.yield177") }}</span>
              </div>
              <div
                class="box-4 flex flex-jus-center"
                @click="handleOrderType('agg_rewards')"
              >
                <!-- REWARD(EOS) -->
                <span :style="{'color': order === 'agg_rewards' ? '#000' : ''}">{{ $t("yield.yield54") }}</span>
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg"
                  v-if="order === 'agg_rewards' && order_type === 'desc'"
                />
                <img
                  src="@/assets/img/svg/down.png"
                  class="svg rotate180"
                  v-else-if="order === 'agg_rewards' && order_type === 'asc'"
                />
                <img
                  src="@/assets/img/svg/downFail.png"
                  class="svg"
                  v-else
                />
              </div>
              <!-- MARKET CAP -->
              <!-- <div class="box-5 flex flex-jus-center">
                <span>{{ $t("yield.yield55") }}</span>
                <img src="@/assets/img/svg/down.svg" class="svg" />
              </div> -->
            </div>

            <template v-if="protocolsList && protocolsList.length > 0">
              <a
                :href="item.nameUrlencode"
                v-for="(item, index) in protocolsList"
                :key="index"
                @click.prevent="$router.push(item.nameUrlencode)"
              >
                <div class="box-item flex flex-align-center">
                  <div class="box-1 flex flex-align-center">
                    <div class="item-index">{{ index + 1 }}</div>
                    <div class="item-avatar">
                      <img
                        :src="item.logo"
                        alt=""
                        :onerror="errImg"
                      />
                    </div>
                    <div>
                      <div class="item-name">{{ item.metadata_name }}</div>
                      <div class="flex">
                        <div class="item-label">{{ handleCategory(item.category) }}</div>
                        <!-- <div
                          class="item-label maxTagCls"
                          v-if="item.maxTag"
                        >{{ $t("yield.yield202") }}</div>
                        <div
                          class="item-label midTagCls"
                          v-if="item.midTag"
                        >{{ $t("yield.yield201") }}</div>
                        <div
                          class="item-label minTagCls"
                          v-if="item.minTag"
                        >{{ $t("yield.yield200") }}</div> -->
                      </div>
                    </div>
                  </div>

                  <div class="box-2">{{ unitBoolean ? `$${getKMBUnit(item.tvl_usd)}` : `${getKMBUnit(item.tvl_eos)} EOS` }}</div>
                  <div
                    class="box-3"
                    :class="getColor(item.tvl_usd_change_8h)"
                  >{{ item.tvl_usd_change_8h }}</div>
                  <div
                    class="box-3"
                    :class="getColor(item.tvl_usd_change_day)"
                  >{{ item.tvl_usd_change_day }}</div>
                  <div
                    class="box-3"
                    :class="getColor(item.tvl_usd_change_week)"
                  >{{ item.tvl_usd_change_week }}</div>
                  <div class="box-3">
                    <img
                      width="135"
                      height="50"
                      alt="7d chart"
                      :src="getImgUrl(item.name)"
                    />
                  </div>
                  <div class="box-4">{{ unitBoolean ? `$${toFixed(item.agg_rewards_change, 2)}` : `${toFixed(item.agg_rewards_change, 4)} EOS` }}</div>
                  <!-- <div class="box-5">$123.43M</div> -->
                </div>
                <div
                  v-if="item.maxTips && order === 'tvl_usd' && order_type === 'desc'"
                  class="tipsBack"
                >{{ $t("yield.yield196") }}</div>
                <div
                  v-if="item.minTips && order === 'tvl_usd' && order_type === 'desc'"
                  class="tipsBack"
                >{{ $t("yield.yield197") }}</div>
              </a>

              <div
                id="pagesBox"
                class="pagesbox"
                v-if="isMore"
                @click="nextList"
              >{{ $t("yield.yield57") }}</div>
            </template>
            <div v-else-if="!loading">
              <BaseNoData></BaseNoData>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import CustomPagination from "@/utils/pagination"
import { mapState } from "vuex"
import { protocols } from "@/service"
import { baseURL } from "../../config";
import DApp from "@/utils/wallet/index"

export default {
  name: "Protocols",
  data() {
    return {
      infoTab: "TVLRankings",
      pageNo: 1,
      pageSize: 20,
      search: "",
      order: "tvl_usd",
      order_type: "desc",
      isMore: true,
      protocolsList: [],
      searchTimer: null,
      loading: false,

      statusToLanguage: {
        active: "yield.yield163",
        pending: "yield.yield162",
        denied: "yield.yield164",
      },
      items: [
        {
          text: this.$t('yield.yield174'),
          value: undefined
        },
        {
          text: 'CDP',
          value: 'CDP'
        },
        {
          text: 'Lending',
          value: 'Lending'
        },
        {
          text: 'Dexes',
          value: 'Dexes'
        },
        {
          text: 'Yield',
          value: 'Yield'
        },
        {
          text: 'Liquid Staking',
          value: 'Liquid Staking'
        }
      ],
      chains:[
        {
          text: this.$t('yield.yield174'),
          value: undefined
        },
        {
          text: 'EOS',
          value: 1
        },
        {
          text: 'EOS EVM',
          value: 2
        },
      ],
      selectVal: this.$t('yield.yield174'),
      networkVal: this.$t('yield.yield174'),
      hasParams: false,
      annualRate: 0,
      unit: 'USD',
      eosRateUsdVal: 1
    }
  },
  props: {},
  watch: {
    search: function () {
      clearTimeout(this.searchTimer)
      this.searchTimer = setTimeout(() => {
        this.initList()
      }, 500)
    },
    // order: function () {
    //   this.initList()
    // },
    selectVal: function (oldVal, newVal) {
      if (oldVal === newVal) return
      if (oldVal === this.$route?.query?.category) return
      if (this.selectVal === this.$t('yield.yield174')) {
        this.$router.push({
          name: 'Protocols'
        })
      } else {
        this.$router.push({
          name: 'Protocols',
          query: {
            category: this.selectVal
          }
        })
      }
      this.initList()
    },
    networkVal: function (oldVal, newVal) {
      if (oldVal === newVal) return
      this.initList()
    },
    "$store.state.app.uint": function change(val) {
      // console.log(val, 'val')
      this.unit = val
      this.initList()
    },
  },
  computed: {
    unitBoolean() {
      if (this.unit === 'USD') return true
      else return false
    },
    ...mapState({
      isMobile: state => state.app.isMobile,
      uint: (state) => state.app.uint,
    }),
  },
  async created() {
    this.unit = this.uint
    await this.getRate()
    await this.eosRateUsd()
    this.initList()
  },
  mounted() {
  },
  beforeDestroy() { },
  methods: {
    async getRate() {
      try {
        const params = {
          code: this.contractE,
          scope: this.contractE,
          json: true,
          limit: -1,
          table: 'config',
        }
        let res = await DApp.getTableRows(params)
        if (res.length > 0) {
          this.annualRate = res[0].annual_rate
        }
      } catch (error) {
        console.log(error, 'error');
      }
    },
    async eosRateUsd() {
      try {
        const params = {
          code: 'oracle.defi',
          scope: 'oracle.defi',
          json: true,
          limit: -1,
          table: 'prices',
          lower_bound: 1,
          upper_bound: 1,
        }
        let res = await DApp.getTableRows(params)
        if (res.length > 0) {
          this.eosRateUsdVal = this.accDiv(res[0].avg_price, 10000)
        }
      } catch (error) {
        console.log(error, 'error');
      }
    },
    async getsparkline() {
      let result = await protocols.sparkline('ballp.defi')
      return result
    },
    clickInfoTab(infoTab) {
      if (this.infoTab == infoTab) return
      this.infoTab = infoTab
      if (infoTab !== 'TVLRankings') {
        this.$router.push({
          name: 'Audit'
        })
      }
    },
    initList() {
      this.isMore = true
      this.pageNo = 1
      this.pageSize = 20
      this.protocolsList = []
      this.getList()
    },
    nextList() {
      this.pageNo++
      this.getList()
    },
    async getList() {
      if (this.$route?.query?.category) {
        this.selectVal = this.$route?.query?.category
      }
      let category = undefined
      if (this.selectVal === this.$t('yield.yield174')) {
        category = undefined
      } else {
        category = this.selectVal
      }
      let network = undefined
      if (this.networkVal === this.$t('yield.yield174')) {
        network = undefined
      } else {
        network = this.networkVal
      }

      try {
        this.loading = true
        let result = await protocols.list({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          search: this.search.replace(/(^\s*)|(\s*$)/g, ""),
          order: this.order,
          status: 'active',
          category,
          network,
          order_type: 'desc'
        })
        if (result?.code === 200 && result.data) {
          result.data.forEach((item, index) => {
            if (item.tvl_eos > 6000000) {
              item.maxTag = true
              item.agg_rewards_change = this.unitBoolean ?
                this.accMul(this.accDiv(this.accDiv(this.accMul(6000000, this.annualRate), 365), 10000), this.eosRateUsdVal)
                : this.accDiv(this.accDiv(this.accMul(6000000, this.annualRate), 365), 10000)
            } else if (item.tvl_eos < 200000) {
              item.agg_rewards_change = 0
              item.minTag = true
            } else {
              item.agg_rewards_change = this.unitBoolean ?
                this.accMul(this.accDiv(this.accDiv(this.accMul(item.tvl_eos, this.annualRate), 365), 10000), this.eosRateUsdVal)
                : this.accDiv(this.accDiv(this.accMul(item.tvl_eos, this.annualRate), 365), 10000)
              item.midTag = true
            }
            // item.logo = ""
            item.nameUrlencode = `/protocols/${encodeURIComponent(item.name)}`
            // item.nameUrlencode = "/ProtocolsDetails?name=" + encodeURIComponent(item.name)
            item.logo = `https://ipfs.pink.gg/ipfs/${item.metadata.logo}`
            if (this.unit === 'USD') {
              item.tvl_usd_changeDayOld = item.tvl_usd_change_day
              item.tvl_usd_change8hOld = item.tvl_usd_change_8h
              item.tvl_usd_changeWeekOld = item.tvl_usd_change_week
              // item.tvl_usd_change_day = item.tvl_usd_change_day/(tvl_usd-tvl_usd_change_day)*100
              if (this.accSub(item.tvl_usd, item.tvl_usd_change_day) != 0 && this.accSub(item.tvl_usd, item.tvl_usd_change_day)) item.tvl_usd_change_day = this.accDiv(item.tvl_usd_change_day, this.accDiv(this.accSub(item.tvl_usd, item.tvl_usd_change_day), 100))
              if (this.accSub(item.tvl_usd, item.tvl_usd_change_8h) != 0 && this.accSub(item.tvl_usd, item.tvl_usd_change_8h)) item.tvl_usd_change_8h = this.accDiv(item.tvl_usd_change_8h, this.accDiv(this.accSub(item.tvl_usd, item.tvl_usd_change_8h), 100))
              if (this.accSub(item.tvl_usd, item.tvl_usd_change_week) != 0 && this.accSub(item.tvl_usd, item.tvl_usd_change_week)) item.tvl_usd_change_week = this.accDiv(item.tvl_usd_change_week, this.accDiv(this.accSub(item.tvl_usd, item.tvl_usd_change_week), 100))

              item.tvl_usd_change_day = this.toFixed(item.tvl_usd_change_day, 2)
              item.tvl_usd_change_8h = this.toFixed(item.tvl_usd_change_8h, 2)
              item.tvl_usd_change_week = this.toFixed(item.tvl_usd_change_week, 2)
              if (item.tvl_usd_change_day > 0) item.tvl_usd_change_day = `+${item.tvl_usd_change_day}%`
              else item.tvl_usd_change_day = `${item.tvl_usd_change_day}%`
              if (item.tvl_usd_change_8h > 0) item.tvl_usd_change_8h = `+${item.tvl_usd_change_8h}%`
              else item.tvl_usd_change_8h = `${item.tvl_usd_change_8h}%`
              if (item.tvl_usd_change_week > 0) item.tvl_usd_change_week = `+${item.tvl_usd_change_week}%`
              else item.tvl_usd_change_week = `${item.tvl_usd_change_week}%`
              if (item.tvl_usd_changeDayOld == item.tvl_usd) item.tvl_usd_change_day = '0.00%'
              if (item.tvl_usd_change8hOld == item.tvl_usd) item.tvl_usd_change_8h = '0.00%'
              if (item.tvl_usd_changeWeekOld == item.tvl_usd) item.tvl_usd_change_week = '0.00%'
            } else {
              item.tvl_usd_changeDayOld = item.tvl_eos_change_day
              item.tvl_usd_change8hOld = item.tvl_eos_change_8h
              item.tvl_usd_changeWeekOld = item.tvl_eos_change_week
              // item.tvl_usd_change_day = item.tvl_usd_change_day/(tvl_usd-tvl_usd_change_day)*100
              if (this.accSub(item.tvl_eos, item.tvl_eos_change_day) != 0 && this.accSub(item.tvl_eos, item.tvl_eos_change_day)) item.tvl_usd_change_day = this.accDiv(item.tvl_eos_change_day, this.accDiv(this.accSub(item.tvl_eos, item.tvl_eos_change_day), 100))
              if (this.accSub(item.tvl_eos, item.tvl_eos_change_8h) != 0 && this.accSub(item.tvl_eos, item.tvl_eos_change_8h)) item.tvl_usd_change_8h = this.accDiv(item.tvl_eos_change_8h, this.accDiv(this.accSub(item.tvl_eos, item.tvl_eos_change_8h), 100))
              if (this.accSub(item.tvl_eos, item.tvl_eos_change_week) != 0 && this.accSub(item.tvl_eos, item.tvl_eos_change_week)) item.tvl_usd_change_week = this.accDiv(item.tvl_eos_change_week, this.accDiv(this.accSub(item.tvl_eos, item.tvl_eos_change_week), 100))

              item.tvl_usd_change_day = this.toFixed(item.tvl_usd_change_day, 2)
              item.tvl_usd_change_8h = this.toFixed(item.tvl_usd_change_8h, 2)
              item.tvl_usd_change_week = this.toFixed(item.tvl_usd_change_week, 2)
              if (item.tvl_usd_change_day > 0) item.tvl_usd_change_day = `+${item.tvl_usd_change_day}%`
              else item.tvl_usd_change_day = `${item.tvl_usd_change_day}%`
              if (item.tvl_usd_change_8h > 0) item.tvl_usd_change_8h = `+${item.tvl_usd_change_8h}%`
              else item.tvl_usd_change_8h = `${item.tvl_usd_change_8h}%`
              if (item.tvl_usd_change_week > 0) item.tvl_usd_change_week = `+${item.tvl_usd_change_week}%`
              else item.tvl_usd_change_week = `${item.tvl_usd_change_week}%`
              if (item.tvl_usd_changeDayOld == item.tvl_eos) item.tvl_usd_change_day = '0.00%'
              if (item.tvl_usd_change8hOld == item.tvl_eos) item.tvl_usd_change_8h = '0.00%'
              if (item.tvl_usd_changeWeekOld == item.tvl_eos) item.tvl_usd_change_week = '0.00%'
            }
            result.data.forEach((items, indexs) => {
              if (item.tvl_eos > 6000000) {
                if (indexs === index + 1 && items.tvl_eos <= 6000000) {
                  item.maxTips = true
                }
              } else if (item.tvl_eos > 200000) {
                if (indexs === index + 1 && items.tvl_eos <= 200000) {
                  item.minTips = true
                }
              }
            })
          })
          if (result.data.length < this.pageSize) this.isMore = false
          this.protocolsList = [...this.protocolsList, ...result.data]

          this.loading = false
        } else {
          this.loading = false
          this.isMore = false
        }
      } catch (error) {
        this.loading = false
        this.isMore = false
      }
    },
    handleOrderType(type) {
      if (type === this.order) {
        this.order_type === 'desc' ? this.order_type = 'asc' : this.order_type = 'desc'
      } else {
        this.order_type = 'desc'
      }

      if (type === 'tvl_usd_change_8h' && this.order_type === 'desc') {
        this.protocolsList = this.protocolsList.sort(function (a, b) { return parseFloat(b.tvl_usd_change_8h) - parseFloat(a.tvl_usd_change_8h) });
      } else if (type === 'tvl_usd_change_8h' && this.order_type === 'asc') {
        this.protocolsList = this.protocolsList.sort(function (a, b) { return parseFloat(a.tvl_usd_change_8h) - parseFloat(b.tvl_usd_change_8h) });
      }
      if (type === 'tvl_usd_change_day' && this.order_type === 'desc') {
        this.protocolsList.sort(function (a, b) { return parseFloat(b.tvl_usd_change_day) - parseFloat(a.tvl_usd_change_day) });
      } else if (type === 'tvl_usd_change_day' && this.order_type === 'asc') {
        this.protocolsList.sort(function (a, b) { return parseFloat(a.tvl_usd_change_day) - parseFloat(b.tvl_usd_change_day) });
      }
      if (type === 'tvl_usd_change_week' && this.order_type === 'desc') {
        this.protocolsList.sort(function (a, b) { return parseFloat(b.tvl_usd_change_week) - parseFloat(a.tvl_usd_change_week) });
      } else if (type === 'tvl_usd_change_week' && this.order_type === 'asc') {
        this.protocolsList.sort(function (a, b) { return parseFloat(a.tvl_usd_change_week) - parseFloat(b.tvl_usd_change_week) });
      }
      if (type === 'agg_rewards' && this.order_type === 'desc') {
        this.protocolsList.sort(function (a, b) { return b.agg_rewards - a.agg_rewards });
      } else if (type === 'agg_rewards' && this.order_type === 'asc') {
        this.protocolsList.sort(function (a, b) { return a.agg_rewards - b.agg_rewards });
      }
      if (type === 'tvl_usd' && this.order_type === 'desc' && this.unit === 'USD') {
        this.protocolsList.sort(function (a, b) { return b.tvl_usd - a.tvl_usd });
      } else if (type === 'tvl_usd' && this.order_type === 'asc' && this.unit === 'USD') {
        this.protocolsList.sort(function (a, b) { return a.tvl_usd - b.tvl_usd });
      } else if (type === 'tvl_usd' && this.order_type === 'desc' && this.unit === 'EOS') {
        this.protocolsList.sort(function (a, b) { return b.tvl_eos - a.tvl_eos });
      } else if (type === 'tvl_usd' && this.order_type === 'asc' && this.unit === 'EOS') {
        this.protocolsList.sort(function (a, b) { return a.tvl_eos - b.tvl_eos });
      }
      this.order = type
    },
    // handleUnit(item) {
    //   this.unit = item
    //   this.initList()
    // },
    getImgUrl(name) {
      return `${baseURL}/v1/protocols/${name}/sparkline?tvl_type=tvl_${this.unit.toLowerCase()}`
    },
    getColor(item) {
      const val = item.slice(0, item.length - 1)
      if (val > 0) {
        return 'color-green'
      } else if (val < 0) {
        return 'color-red'
      } else {
        return ''
      }
    },
    handleGrade(item) {
      if (item < 200000) {
        return ''
      } else if (item >= 200000 && item < 750000) {
        return 'Bronze'
      } else if (item >= 750000 && item < 1500000) {
        return 'Siver'
      } else if (item >= 1500000 && item < 3000000) {
        return 'Gold'
      } else {
        return 'Dimond'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.Protocols {
  background-color: #f9fafb;

  .tipsBack {
    background: rgba(0, 0, 0, 0.05);
    padding: 4px 0 4px 4px;
    color: #333;
    font-size: 14px;
    text-align: center;
  }
  .Protocols-layout {
    max-width: 420px;
    margin: 0 auto;
  }

  .Protocols-title {
    width: 100%;
    height: 140px;
    background-color: #f9fafb;
    padding: 17px 20px;
    .title-search {
      position: relative;
      width: 100%;
      height: 45px;
      line-height: 45px;
      border: 1px solid #000;
      padding: 0 8px 0 17px;
      border-radius: 10px;
      margin-right: 10px;
      img,
      svg {
        margin-right: 10px;
        width: 20px;
        display: inline-block;
        vertical-align: middle;
        margin-top: -3px;
      }
      ::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        color: #999;
        font-size: 14px;
      }
      :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #999;
        font-size: 14px;
      }
      ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #999;
        font-size: 14px;
      }
      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #999;
        font-size: 14px;
      }
      .select-all-mobile {
        position: absolute;
        right: 0;
        top: 0;
        border: none;
        background: transparent;
        ::v-deep .v-input__slot {
          background: transparent !important;
          padding-left: 0 !important;
          box-shadow: none !important;
        }

        ::v-deep .v-select__selections {
          font-size: 14px;
          width: 70px;
          padding-left: 16px;
          border-left: 1px solid rgba(153, 153, 153, 0.15);
        }
      }
    }

    .title-select {
      gap: 10px;
      .select-audit {
        flex: 3;
        height: 45px;
        line-height: 45px;
        padding: 9px 0 9px 15px;
        border-radius: 10px;
        border: 1px solid #000;

        .audit-line {
          width: 1px;
          height: 100%;
          background-color: rgba(153, 153, 153, 0.15);
        }
        .audit-tips1 {
          font-size: 14px;
          text-align: center;
          font-weight: 500;
          color: #000000;
        }
        .audit-tips2 {
          width: 60px;
          text-align: center;
          // text-align: right;
          padding-right: 25px;
          font-size: 14px;
          font-weight: 500;
          color: #999999;
        }
      }
      &.unit-cls {

        .select-audit {
          padding: 9px 2px;
        }
        .audit-tips2 {
          padding-right: 0;
        }
      }
      &.specil-cls {
        .select-audit {
          border: 0;
          padding: 9px 0 0px;
        }
        .audit-line {
          margin: 0 15px;
          height: 60%;
        }
        .audit-tips1, .audit-tips2 {
          font-size: 18px;
        }
      }
    }
    .select-all {
      flex: 1;
      height: 45px;
      line-height: 45px;
      border-radius: 25px;
      border: 1px solid #000;
      background: transparent;
      ::v-deep .v-input__control {
        // min-width: 80px;
        width: 25vw;
        height: 45px;
        min-height: 45px;
        margin-bottom: 0;
      }
      ::v-deep .v-input__slot {
        margin-bottom: 0;
        box-shadow: none;
        min-height: 43px;
        background: transparent;
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
        // min-width: 80px;
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
  }

  .Protocols-projectList {
    width: 100%;
    border-radius: 25px 25px 0 0;
    // height: 900px;
    background-color: #fff;
    padding: 0 17px;
    padding-bottom: 50px;
    min-height: calc(100vh - 168px - 220px);
    .projectList-box {
      padding: 35px 0;
      border-bottom: 1px solid #efefef;
      .box-left {
        width: 92px;
        .box-index {
          width: 28px;
          font-size: 18px;
          font-weight: 500;
          color: #000000;
        }
        .box-avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          img {
            border-radius: 50%;
          }
        }
      }

      .box-name {
        font-size: 18px;
        font-weight: 600;
        color: #000000;
        margin-bottom: 2px;
      }

      .box-label {
        // min-width: 77px;
        // padding: 0 10px;
        height: 22px;
        line-height: 22px;
        border-radius: 15px;
        margin-right: 8px;
        margin-bottom: 3px;
        font-size: 10px;
        font-weight: 400;
        color: #999;
        // color: #000000;
        // border: 1px solid #d9d9d9;
        text-align: center;
      }

      .maxTagCls {
        color: #13a57a !important;
        border: 1px solid #13a57a !important;
        font-weight: bold !important;
      }
      .midTagCls {
        color: #13a57a;
        border: 1px solid #13a57a;
      }
      .minTagCls {
        color: rgba(234, 87, 60, 1);
        border: 1px solid rgba(234, 87, 60, 1);
      }

      .box-data {
        // padding-left: 92px;
        .data-box {
          margin-top: 25px;
        }
        .data-name {
          // display: flex;
          font-size: 13px;
          font-weight: 400;
          color: #666666;
          margin-bottom: 5px;
          .svg {
            width: 16px;
            margin: -2px 0 0 -7px;
            vertical-align: middle;
          }
        }
        .data-number {
          font-size: 17px;
          font-weight: 500;
          color: #000000;
        }
        &.audit-font {
          .data-number {
            font-size: 14px !important;
          }
          .plcl {
            text-align: right;
          }
        }
      }
    }
  }
}
::v-deep .v-list-item__title {
  font-size: 14px !important;
}

::v-deep .v-select__selection {
  font-size: 14px !important;
}

.ProtocolsPC {
  padding-bottom: 110px;
  .ProtocolsPC-layout {
    width: 1200px;
    margin: 0 auto;
  }
  .tipsBack {
    background: rgba(0, 0, 0, 0.05);
    padding: 4px 0 4px 120px;
    color: #333;
    font-size: 14px;
    text-align: center;
  }

  .ProtocolsPC-overLay {
    width: 100%;
    background-color: #000;
    height: 240px;
    padding-top: 30px;
    .overLay-title {
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
      .audit-tips1, .audit-tips2{
        cursor: pointer;
      }
      .audit-line {
        width: 1px;
        margin: 0 15px;
        height: 20px;
        background-color: #999;
      }
    }

    .overLay-select {
      .select-audit {
        padding: 9px 0 9px 15px;
        width: 204px;
        height: 38px;
        border-radius: 8px;
        background-color: #ffffff;
        cursor: pointer;
        .audit-line {
          width: 1px;
          height: 100%;
          background-color: rgba(153, 153, 153, 0.15);
        }
        .audit-tips1 {
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #000000;
        }
        .audit-tips2 {
          width: 70px;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #999999;
        }

        &.unit-cls {
          width: 150px;
          padding: 9px 10px 9px 10px;
        }
      }

      .select-all {
        &:nth-child(2){
          margin: 0 8px;
        };
        // width: 71px;
        // height: 38px;
        border-radius: 8px;
        // background-color: #ffffff;
        // cursor: pointer;
        // margin-left: 8px;
        // margin-right: 8px;
        ::v-deep .v-input__control {
          min-width: 80px;
          height: 38px;
          min-height: 38px;
          margin-bottom: 0;
        }
        ::v-deep .v-input__slot {
          margin-bottom: 0;
          box-shadow: none;
          min-height: 38px;
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

      .select-search {
        padding: 11px 15px;
        width: 228px;
        height: 38px;
        font-size: 14px;
        font-weight: 500;
        color: #000000;
        border-radius: 8px;
        background-color: #ffffff;
        // cursor: pointer;
        .svg {
          width: 17px;
          margin-left: 4px;
        }
        input {
          // flex-basis: 80px;
          // width: 80px;
          flex: 1 0 70px;
          width: auto;
          min-width: 10px;
          display: block;
        }
      }
    }
  }

  .ProtocolsPC-projectList {
    .projectList-box {
      width: 100%;
      min-height: 1048px;
      background-color: #fff;
      margin-top: -130px;
      border-radius: 24px;
      padding: 0 25px;
      // border: 1px solid #d9d9d9;
      border: 1px solid #efefef;
      padding-bottom: 20px;
      .box-title {
        height: 64px;
        border-bottom: 1px solid #efefef;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        color: #999999;
        .svg {
          width: 14px;
          // margin-left: 5px;
        }
        span,
        img {
          cursor: pointer;
        }
      }
      .box-1 {
        width: 400px;
        padding-left: 20px;
      }
      .box-2 {
        width: 150px;
      }
      .box-3 {
        width: 150px;
      }
      .box-4 {
        width: 275px;
      }
      .box-5 {
        width: 265px;
      }

      .box-item {
        display: flex;
        min-height: 84px;
        padding: 21px 0;
        border-bottom: 1px solid #efefef;
        text-align: center;
        font-size: 16px;
        // font-weight: 500;
        color: #000000;
        cursor: pointer;
        .item-index {
          width: 32px;
          text-align: left;
        }
        .item-avatar {
          width: 42px;
          height: 42px;
          margin-right: 8px;
          border-radius: 50%;
          // background-color: antiquewhite;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .item-name {
          text-align: left;
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 4px;
        }
        .item-label {
          // min-width: 77px;
          // padding: 0 10px;
          height: 22px;
          line-height: 22px;
          border-radius: 15px;
          // margin-right: 8px;
          font-size: 10px;
          font-weight: 400;
          color: #999;
          // color: #000000;
          // border: 1px solid #d9d9d9;
        }
        .maxTagCls {
          color: #13a57a;
          border: 1px solid #13a57a !important;
          font-weight: bold !important;
        }
        .midTagCls {
          color: #13a57a;
          border: 1px solid #13a57a;
        }
        .minTagCls {
          color: rgba(234, 87, 60, 1);
          border: 1px solid rgba(234, 87, 60, 1);
        }
      }
    }
    #pagesBox {
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
input {
  &::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #999 !important;
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #999 !important;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #999 !important;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #999 !important;
  }
}
.rotate180 {
  transform: rotate(180deg);
}
</style>
