<template>
  <div>
    <div class="Protocols" v-if="isMobile">
      <div class="Protocols-title">
        <div class="Protocols-layout">
          <div class="title-search flex">
            <img src="@/assets/img/svg/sousuo.svg" />
            <input type="text" class="flex-1" :placeholder="$t('yield.yield56')" v-model="search" />
          </div>

          <div class="title-select flex">
            <div class="select-audit flex">
              <div class="audit-tips1 flex-1" :style="{ color: infoTab != 'TVLRankings' ? '#999999' : '#000' }" @click="infoTab = 'TVLRankings'">{{ $t("yield.yield50") }}</div>
              <div class="audit-line"></div>
              <!-- Audit -->
              <div class="audit-tips2 flex-1" :style="{ color: infoTab != 'Audit' ? '#999999' : '#000' }" @click="infoTab = 'Audit'">{{ $t("yield.yield51") }}</div>
            </div>

            <!-- <v-select class="select-all" :items="items" label="" solo :attach="true" :full-width="true" :menu-props="{ offsetY: true, offsetOverflow: true, transition: false }"></v-select> -->
          </div>
        </div>
      </div>

      <div class="Protocols-projectList" v-if="infoTab == 'TVLRankings'">
        <template v-if="protocolsList && protocolsList.length > 0">
          <div class="projectList-box" v-for="(item, index) in protocolsList" :key="index" @click.prevent="$router.push(item.nameUrlencode)">
            <div class="flex">
              <div class="box-left flex">
                <div class="box-index">{{ index + 1 }}</div>
                <img :src="item.logo" class="box-avatar" :onerror="errImg" />
              </div>
              <div class="flex-1">
                <div class="box-name">{{ item.name }}</div>
                <div class="flex flex-wrap">
                  <div class="box-label">{{ handleCategory(item.category) }}</div>
                  <!-- <div class="box-label">Corss-chain</div> -->
                </div>
              </div>
            </div>

            <div class="box-data">
              <div class="flext">
                <div class="data-box flex-1">
                  <div class="data-name">{{ $t("yield.yield53") }}</div>
                  <div class="data-number">${{ getKMBUnit(item.tvl_usd) }}</div>
                </div>
                <div class="data-box flex-1">
                  <div class="data-name">{{ $t("yield.yield42") }}</div>
                  <div class="data-number">{{ item.tvl_usd_change }}</div>
                </div>
              </div>

              <div class="flext">
                <div class="data-box flex-1">
                  <div class="data-name">{{ $t("yield.yield54") }}</div>
                  <div class="data-number">{{ getKMBUnit(item.agg_rewards) }}</div>
                </div>
                <div class="data-box flex-1">
                  <!-- <div class="data-name">{{ $t("yield.yield55") }}</div> -->
                  <!-- <div class="data-number">{{ item.agg_rewards }}</div> -->
                </div>
              </div>
            </div>
          </div>
          <div id="pagesBox" class="pagesbox" v-if="isMore" @click="nextList">MORE</div>
        </template>
        <div v-else-if="!loading">
          <BaseNoData></BaseNoData>
        </div>
      </div>

      <div class="Protocols-projectList" v-else>
        <template v-if="protocolsList && protocolsList.length > 0">
          <div class="projectList-box" v-for="(item, index) in protocolsList" :key="index" @click.prevent="$router.push(item.nameUrlencode)">
            <div class="flex">
              <div class="box-left flex">
                <div class="box-index">{{ index + 1 }}</div>
                <img :src="item.logo" class="box-avatar" />
              </div>
              <div class="flex-1">
                <div class="box-name">{{ item.name }}</div>
                <div class="flex flex-wrap">
                  <div class="box-label">{{ handleCategory(item.category) }}</div>
                  <!-- <div class="box-label">Corss-chain</div> -->
                </div>
              </div>
            </div>

            <div class="box-data">
              <div class="flex">
                <div class="data-box flex-1">
                  <div class="data-name">{{ $t("yield.yield86") }}</div>
                  <div class="data-number">{{ handleCategory(item.category) }}</div>
                </div>
                <div class="data-box flex-1">
                  <div class="data-name">{{ $t("yield.yield87") }}</div>
                  <div class="data-number">{{ item.create_at | dateFormatNYRSF }}</div>
                </div>
              </div>

              <div class="flex">
                <div class="data-box flex-1">
                  <div class="data-name">{{ $t("yield.yield88") }}</div>
                  <div class="data-number">{{ item.status }}</div>
                </div>
                <div class="data-box flex-1">
                  <!-- <div class="data-name">{{ $t("yield.yield89") }}</div>
                <div class="data-number">$123.43M</div> -->
                </div>
              </div>
            </div>
          </div>
          <div id="pagesBox" class="pagesbox" v-if="isMore" @click="nextList">MORE</div>
        </template>
        <div v-else-if="!loading">
          <BaseNoData></BaseNoData>
        </div>
      </div>
    </div>
    <div class="ProtocolsPC" v-else>
      <div class="ProtocolsPC-overLay">
        <div class="ProtocolsPC-layout flex flex-jus-between">
          <!-- Projects -->
          <div class="overLay-title">{{ $t("yield.yield3") }}</div>

          <div class="overLay-select flex">
            <div class="select-audit flex flex-align-center">
              <!-- TVL Rankings -->
              <div class="audit-tips1 flex-1" :style="{ color: infoTab != 'TVLRankings' ? '#999999' : '#000' }" @click="infoTab = 'TVLRankings'">{{ $t("yield.yield50") }}</div>
              <div class="audit-line"></div>
              <!-- Audit -->
              <div class="audit-tips2" :style="{ color: infoTab != 'Audit' ? '#999999' : '#000' }" @click="infoTab = 'Audit'">{{ $t("yield.yield51") }}</div>
            </div>

            <!-- <v-select class="select-all" :items="items" label="" solo :attach="true" :full-width="true" :menu-props="{ offsetY: true, offsetOverflow: true, transition: false }"></v-select> -->

            <div class="select-search flex" style="margin-left: 10px">
              <!-- <div class="flex-1">{{ $t("yield.yield56") }}</div> -->
              <input type="text" class="flex-1" :placeholder="$t('yield.yield56')" v-model="search" />
              <img src="@/assets/img/svg/sousuo.svg" class="svg" />
            </div>
          </div>
        </div>
      </div>

      <div class="ProtocolsPC-projectList">
        <div class="ProtocolsPC-layout">
          <div class="projectList-box" v-if="infoTab == 'TVLRankings'">
            <div class="box-title flex flex-align-center">
              <!-- PROTOCOLS NAME -->
              <div class="box-1" style="text-align: left; padding-left: 80px">{{ $t("yield.yield52") }}</div>
              <div class="box-2 flex flex-jus-center" @click="order = 'tvl_usd'">
                <!-- TVL -->
                <span>{{ $t("yield.yield53") }}</span>
                <img src="@/assets/img/svg/down.png" class="svg" v-if="order === 'tvl_usd'" />
                <img src="@/assets/img/svg/downFail.png" class="svg" v-else />
              </div>
              <!-- CHANGE(24H) -->
              <!-- <div class="box-3 flex flex-jus-center" @click="order = 'tvl_usd_change'">
                <span>{{ $t("yield.yield42") }}</span>
                <img src="@/assets/img/svg/down.png" class="svg" v-if="order === 'tvl_usd_change'" />
                <img src="@/assets/img/svg/downFail.png" class="svg" v-else />
              </div> -->
              <div class="box-3 flex flex-jus-center">
                <span>{{ $t("yield.yield42") }}</span>
              </div>
              <div class="box-4 flex flex-jus-center" @click="order = 'agg_rewards'">
                <!-- REWARD(EOS) -->
                <span>{{ $t("yield.yield54") }}</span>
                <img src="@/assets/img/svg/down.png" class="svg" v-if="order === 'agg_rewards'" />
                <img src="@/assets/img/svg/downFail.png" class="svg" v-else />
              </div>
              <!-- MARKET CAP -->
              <!-- <div class="box-5 flex flex-jus-center">
                <span>{{ $t("yield.yield55") }}</span>
                <img src="@/assets/img/svg/down.svg" class="svg" />
              </div> -->
            </div>

            <template v-if="protocolsList && protocolsList.length > 0">
              <a :href="item.nameUrlencode" class="box-item flex flex-align-center" v-for="(item, index) in protocolsList" :key="index" @click.prevent="$router.push(item.nameUrlencode)">
                <div class="box-1 flex flex-align-center">
                  <div class="item-index">{{ index + 1 }}</div>
                  <div class="item-avatar">
                    <img :src="item.logo" alt="" :onerror="errImg" />
                  </div>
                  <div>
                    <div class="item-name">{{ item.name }}</div>
                    <div class="flex flex-wrap">
                      <div class="item-label">{{ handleCategory(item.category) }}</div>
                      <!-- <div class="item-label">Corss-chain</div> -->
                    </div>
                  </div>
                </div>

                <div class="box-2">${{ getKMBUnit(item.tvl_usd) }}</div>
                <div class="box-3">{{ item.tvl_usd_change }}</div>
                <div class="box-4">{{ getKMBUnit(item.agg_rewards) }}</div>
                <!-- <div class="box-5">$123.43M</div> -->
              </a>

              <div id="pagesBox" class="pagesbox" v-if="isMore" @click="nextList">MORE</div>
            </template>
            <div v-else-if="!loading">
              <BaseNoData></BaseNoData>
            </div>
          </div>

          <div class="projectList-box" v-else>
            <div class="box-title flex flex-align-center">
              <!-- PROTOCOLS NAME -->
              <div class="box-1" style="text-align: left; padding-left: 80px">{{ $t("yield.yield52") }}</div>
              <div class="box-2 flex flex-jus-center">
                <!-- Type -->
                <span>{{ $t("yield.yield86") }}</span>
              </div>
              <div class="box-3 flex flex-jus-center">
                <!-- Apply Time -->
                <span>{{ $t("yield.yield87") }}</span>
              </div>
              <div class="box-4 flex flex-jus-center">
                <!-- State -->
                <span>{{ $t("yield.yield88") }}</span>
              </div>
              <div class="box-5 flex flex-jus-center">
                <!-- Action -->
                <span>{{ $t("yield.yield89") }}</span>
              </div>
            </div>

            <template v-if="protocolsList && protocolsList.length > 0">
              <a :href="item.nameUrlencode" class="box-item flex flex-align-center" v-for="(item, index) in protocolsList" :key="index" @click.prevent="$router.push(item.nameUrlencode)">
                <div class="box-1 flex flex-align-center">
                  <div class="item-index">{{ index + 1 }}</div>
                  <div class="item-avatar">
                    <img :src="item.logo" alt="" :onerror="errImg" />
                  </div>
                  <div>
                    <div class="item-name" style="margin-bottom: 0">{{ item.name }}</div>
                    <!-- <div class="flex flex-wrap">
                      <div class="item-label">{{ item.category }}</div>
                      <div class="item-label">Corss-chain</div>
                    </div> -->
                  </div>
                </div>

                <div class="box-2">{{ handleCategory(item.category) }}</div>
                <div class="box-3">{{ item.create_at | dateFormatNYRSF }}</div>
                <div class="box-4">{{ item.status }}</div>
                <div class="box-5 flex flex-align-center flex-jus-center">
                  <v-btn>details</v-btn>
                </div>
              </a>

              <div id="pagesBox" class="pagesbox" v-if="isMore" @click="nextList">MORE</div>
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
export default {
  name: "Protocols",
  data() {
    return {
      infoTab: "TVLRankings",
      pageNo: 1,
      pageSize: 10,
      search: "",
      order: "tvl_usd",
      isMore: true,
      protocolsList: [],
      searchTimer: null,
      loading: false,
    }
  },
  props: {},
  watch: {
    infoTab: function () {
      this.pagesBoxShow()
    },
    search: function () {
      clearTimeout(this.searchTimer)
      this.searchTimer = setTimeout(() => {
        this.initList()
      }, 500)
    },
    order: function () {
      this.initList()
    },
  },
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
  }),
  created() {
    this.initList()
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    initList() {
      this.isMore = true
      this.pageNo = 1
      this.pageSize = 10
      this.protocolsList = []
      this.getList()
    },
    nextList() {
      this.pageNo++
      this.getList()
    },
    async getList() {
      try {
        this.loading = true
        let result = await protocols.list({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          search: this.search,
          order: this.order,
        })
        if (result?.code === 0 && result.data) {
          result.data.forEach((item) => {
            item.logo = ""
            item.nameUrlencode = "/ProtocolsDetails?name=" + encodeURIComponent(item.name)
            if (!item.metadata) return
            item.metadataInfo = JSON.parse(item.metadata)

            item.metadataInfo.forEach((i) => {
              if (i.key == "logo") item.logo = `https://ipfs.pink.gg/ipfs/${i.value}`
            })
            // item.tvl_usd_change = item.tvl_usd_change/(tvl_usd-tvl_usd_change)*100
            if (this.accSub(item.tvl_usd, item.tvl_usd_change) != 0 && this.accSub(item.tvl_usd, item.tvl_usd_change)) item.tvl_usd_change = this.accDiv(item.tvl_usd_change, this.accDiv(this.accSub(item.tvl_usd, item.tvl_usd_change), 100))

            item.tvl_usd_change = this.toFixed(item.tvl_usd_change, 2)
            if (item.tvl_usd_change > 0) item.tvl_usd_change = `+${item.tvl_usd_change}%`
            else item.tvl_usd_change = `${item.tvl_usd_change}%`
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
    pagesBoxShow() {
      // this.$nextTick(() => {
      //   if (document.getElementById('pagesBox')) {
      //     new CustomPagination('#pagesBox', {
      //       total: Math.ceil(120 / 10), // 总页数
      //       changePage: () => {}
      //     })
      //   }
      // })
    },
  },
}
</script>
<style lang="scss" scoped>
.Protocols {
  background-color: #f9fafb;
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
      width: 100%;
      height: 45px;
      line-height: 45px;
      border: 1px solid #000;
      padding: 0 17px;
      margin-bottom: 16px;
      border-radius: 25px;
      img,
      svg {
        margin-right: 19px;
        width: 23px;
      }
      ::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        color: #999;
      }
      :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #999;
      }
      ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #999;
      }
      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #999;
      }
    }

    .title-select {
      gap: 10px;
      .select-audit {
        flex: 3;
        height: 45px;
        line-height: 45px;
        padding: 9px 0 9px 15px;
        border-radius: 25px;
        border: 1px solid #000;
        .audit-line {
          width: 1px;
          height: 100%;
          background-color: rgba(153, 153, 153, 0.15);
        }
        .audit-tips1 {
          font-size: 14px;
          // text-align: center;
          font-weight: 500;
          color: #000000;
        }
        .audit-tips2 {
          width: 70px;
          // text-align: center;
          text-align: right;
          padding-right: 25px;
          font-size: 14px;
          font-weight: 500;
          color: #999999;
        }
      }
      .select-all {
        flex: 1;
        height: 45px;
        line-height: 45px;
        border-radius: 25px;
        border: 1px solid #000;
        ::v-deep .v-input__control {
          min-width: 80px;
          height: 45px;
          min-height: 45px;
          margin-bottom: 0;
        }
        ::v-deep .v-input__slot {
          margin-bottom: 0;
          box-shadow: none;
          min-height: 43px;
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
        }
      }

      .box-name {
        font-size: 18px;
        font-weight: 600;
        color: #000000;
        margin-bottom: 2px;
      }

      .box-label {
        min-width: 77px;
        padding: 0 10px;
        height: 22px;
        line-height: 22px;
        border-radius: 15px;
        margin-right: 8px;
        margin-bottom: 3px;
        font-size: 10px;
        font-weight: 400;
        color: #000000;
        border: 1px solid #d9d9d9;
        text-align: center;
      }

      .box-data {
        padding-left: 92px;
        .data-box {
          margin-top: 25px;
        }
        .data-name {
          font-size: 13px;
          font-weight: 400;
          color: #666666;
          margin-bottom: 5px;
        }
        .data-number {
          font-size: 17px;
          font-weight: 500;
          color: #000000;
        }
      }
    }
  }
}

.ProtocolsPC {
  padding-bottom: 110px;
  .ProtocolsPC-layout {
    width: 1200px;
    margin: 0 auto;
  }

  .ProtocolsPC-overLay {
    width: 100%;
    background-color: #000;
    height: 240px;
    padding-top: 30px;
    .overLay-title {
      font-size: 30px;
      font-weight: 600;
      color: #ffffff;
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
      }

      .select-all {
        // width: 71px;
        // height: 38px;
        border-radius: 8px;
        // background-color: #ffffff;
        // cursor: pointer;
        margin-left: 8px;
        margin-right: 8px;
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
        width: 114px;
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
        span {
          cursor: pointer;
        }
      }
      .box-1 {
        width: 310px;
      }
      .box-2 {
        width: 200px;
      }
      .box-3 {
        width: 200px;
      }
      .box-4 {
        width: 225px;
      }
      .box-5 {
        width: 215px;
      }

      .box-item {
        display: flex;
        min-height: 84px;
        padding: 21px 0;
        border-bottom: 1px solid #efefef;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
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
          // border-radius: 50%;
          // background-color: antiquewhite;
          img {
            width: 100%;
            height: 100%;
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
          min-width: 77px;
          padding: 0 10px;
          height: 22px;
          line-height: 22px;
          border-radius: 15px;
          margin-right: 8px;
          font-size: 10px;
          font-weight: 400;
          color: #000000;
          border: 1px solid #d9d9d9;
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
  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #999;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #999;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #999;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #999;
  }
}
</style>
