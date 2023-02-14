<template>
  <div>
    <div
      class="Overview"
      v-if="isMobile"
    >
      <div class="Overview-layout">
        <div class="Overview-dataList">
          <div class="dataList-title">Overview</div>
          <div class="datalist-box">
            <div class="box-des">
              <div class="flex flex-wrap">
                <!-- Total TVL -->
                <div class="des-w flex">
                  <div class="des-1">{{ $t("yield.yield41") }}</div>
                  <div class="des-2">${{ getKMBUnit(overViewData.tvl_usd, 2) }}</div>
                </div>
                <!-- Change (24h) -->
                <div class="des-w flex">
                  <div class="des-1">{{ $t("yield.yield42") }}</div>
                  <div
                    class="des-2"
                    :class="getColor(overViewData.tvl_usd_change)"
                  >{{ overViewData.tvl_usd_change }}</div>
                </div>
                <!-- Projects -->
                <div class="des-w flex">
                  <div class="des-1">{{ $t("yield.yield7") }}</div>
                  <div class="des-2">{{ overViewData.agg_protocol_count }}</div>
                </div>
                <!-- Assets -->
                <div class="des-w flex">
                  <div class="des-1">{{ $t("yield.yield207") }}</div>
                  <div class="des-2">2</div>
                </div>
              </div>
            </div>
            <div class="tabCls flexb" style="flex-direction: row;">
              <div class="sup-assets">
                {{ $t("yield.yield203") }}
                <img src="@/assets/img/usdt.png" alt="" @click="handleLink('USD')">
                <img src="@/assets/img/eos.png" alt="" @click="handleLink('EOS')">
              </div>
              <BaseTab v-model="checkedVal1" />
            </div>
            <div
              class="box-data"
              id="view1Data"
            ></div>
          </div>
        </div>

        <!-- TVL Distribution -->
        <div class="Overview-tvl">
          <div class="tvl-title">
            <div>{{ $t("yield.yield43") }}</div>
            <div class="mt">
              <Select
                v-model="charts2Value"
                :list="charts2Items"
              />
            </div>
          </div>

          <!-- <div class="tvl-box" id="view2Data" :style="{'height': 650 + (this.chart2Data[0].length / 4 * 400) + 'px'}"></div> -->
          <div
            class="tabCls"
            style="margin-bottom: 15px; margin-top: -20px;"
          >
            <BaseTab v-model="checkedVal2" />
          </div>
          <div
            class="tvl-box"
            id="view2Data"
          >
          </div>
          <div class="mt">
            <Select
              v-model="charts3Value"
              :list="charts3Items"
            />
          </div>
          <div
            class="tvl-box"
            id="view3Data"
          ></div>
        </div>

        <!-- Report -->
        <div class="Overview-report">
          <div class="report-title">{{ $t("yield.yield5") }}</div>
          <div class="Overview-report-wrap mb15" v-for="(item, index) in reportList" :key="index" @click="openWindow(item.jumpLink)">
            <div class="Overview-report-wrap__item">
              <img :src="item.imgUrl" alt="">
              <div class="report-name">
                {{ item.name }}
              </div>
              <div class="report-word">{{ item.title }}</div>
              <div class="report-read flex">
                <v-icon
                  color="#000"
                  size="18"
                >mdi-clock-outline</v-icon>
                <span class="ml5">{{ item.readTime }} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="OverviewPC"
    >
      <!-- <div style="height: 100px;background-color: black;"></div> -->
      <div class="OverviewPC-overLay">
        <div class="OverviewPC-layout">
          <div class="overLay-title">{{ $t("yield.yield2") }}</div>

          <div class="overLay-dataList flex">
            <div class="dataList-data flex flex-align-end">
              <!-- Total TVL -->
              <div class="data-text1">{{ $t("yield.yield41") }}</div>
              <div class="data-text2">${{ getKMBUnit(overViewData.tvl_usd, 2) }}</div>
            </div>

            <div class="dataList-data flex flex-align-end">
              <!-- Change (24h) -->
              <div class="data-text1">{{ $t("yield.yield42") }}</div>
              <div
                class="data-text2"
                :class="getColor(overViewData.tvl_usd_change)"
              >{{ overViewData.tvl_usd_change }}</div>
            </div>

            <div class="dataList-data flex flex-align-end">
              <!-- Projects -->
              <div class="data-text1">{{ $t("yield.yield7") }}</div>
              <div class="data-text2">{{ overViewData.agg_protocol_count }}</div>
            </div>

            <div class="dataList-data flex flex-align-end">
              <!-- Assets -->
              <div class="data-text1">{{ $t("yield.yield207") }}</div>
              <div class="data-text2">2</div>
            </div>
          </div>
        </div>
      </div>

      <div class="OverviewPC-view1">
        <div class="OverviewPC-layout">
          <div class="tabCls flexb" style="flex-direction: row;">
            <div class="sup-assets">
              {{ $t("yield.yield203") }}
              <img src="@/assets/img/usdt.png" alt="" @click="handleLink('USD')">
              <img src="@/assets/img/eos.png" alt="" @click="handleLink('EOS')">
            </div>
            <BaseTab v-model="checkedVal1" />
          </div>
          <div id="view1Data"></div>
        </div>
      </div>

      <div class="OverviewPC-view2">
        <div class="view2-title flexb">
          <span>{{ $t("yield.yield43") }}</span>
          <div style="width: 200px">
            <Select
              v-model="charts2Value"
              :list="charts2Items"
            />
          </div>
        </div>
        <div
          class="OverviewPC-layout"
          style="margin-bottom: 28px; height: 550px"
        >
          <div
            class="tabCls"
            style="padding-right: 75px"
          >
            <BaseTab v-model="checkedVal2" />
          </div>
          <div id="view2Data"></div>
        </div>

        <div class="flex flex-row-reverse view2-title">
          <div style="width: 200px;">
            <Select
              v-model="charts3Value"
              :list="charts3Items"
            />
          </div>
        </div>
        <div class="OverviewPC-layout">
          <div id="view3Data"></div>
        </div>
      </div>

      <div class="OverviewPC-report">
        <div class="OverviewPC-layout">
          <!-- Report -->
          <div class="report-title">{{ $t("yield.yield5") }}</div>
          <div class="OverviewPC-report-wrap">
            <div class="OverviewPC-report-wrap__item" v-for="(item, index) in reportList" :key="index" @click="openWindow(item.jumpLink)">
              <img :src="item.imgUrl" alt="">
              <div class="report-name">
                {{ item.name }}
              </div>
              <div class="report-word">{{ item.title }}</div>
              <div class="report-read flex">
                <v-icon
                  color="#000"
                  size="18"
                >mdi-clock-outline</v-icon>
                <span class="ml5">{{ item.readTime }} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { lines } from "@/service"
import chart1 from "./echarts/chart1.js"
import chart2 from "./echarts/chart2.js"
import chart3 from "./echarts/chart3.js"
import Select from "./components/Select"

export default {
  name: "Overview",
  data() {
    return {
      overViewData: {
        agg_protocol_count: 0,
        tvl_eos: 0,
        tvl_usd_change: "0.00",
      },
      chart1Data: [],
      chart2Data: [[]],
      chart3Data: [[]],
      charts2Items: [],
      charts2Value: [],
      charts3Items: [],
      charts3Value: [],
      checkedVal1: 'USD',
      checkedVal2: 'USD',
      reportList:[
        {
          name: 'Jan 13 · By EOS Network Foundation',
          title:'December 2022 Yield+ Report',
          readTime: 4,
          imgUrl: require('@/assets/img/report/report5.png'),
          jumpLink: 'https://eosnetwork.com/blog/december-2022-yield-report'
        },
        {
          name: 'Dec 9 · By EOS Network Foundation',
          title:'November 2022 Yield+ Report',
          readTime: 5,
          imgUrl: require('@/assets/img/report/report4.png'),
          jumpLink: 'https://eosnetwork.com/blog/november-2022-yield-report'
        },
        {
          name: 'Nov 8 · By EOS Network Foundation',
          title:'October 2022 Yield+ Report',
          readTime: 5,
          imgUrl: require('@/assets/img/report/report3.jpeg'),
          jumpLink: 'https://eosnetwork.com/blog/october-2022-yield-report'
        },
        {
          name: 'Oct 11 · By EOS Network Foundation',
          title:'September 2022 Yield+ Report',
          readTime: 5,
          imgUrl: require('@/assets/img/report/report2.png'),
          jumpLink: 'https://eosnetwork.com/blog/september-2022-yield-report'
        },
        {
          name: 'May 26 · By EOS Network Foundation',
          title:'EOS Yield+ Blue Paper',
          readTime: 3,
          imgUrl: require('@/assets/img/report/report1.png'),
          jumpLink: 'https://eosnetwork.com/blog/eos-yield-blue-paper'
        },
      ]
    }
  },
  components: {
    Select
  },
  props: {},
  watch: {
    "charts2Value": {
      handler: function (val) {
        try {
          let res = []
          const chartData = JSON.parse(JSON.stringify(this.chart2Data))
          chartData.forEach(v => {
            if (val.find(vv => vv === v[0])) {
              res.push(v)
            }
          });
          res.unshift(chartData[0])
          chart2.init({
            self: this,
            data: res,
            type: this.checkedVal2
          })
        } catch (error) {
          console.log(error)
        }
      },
      deep: true
    },
    "charts3Value": {
      handler: function (val) {
        try {
          let res = []
          const chartData = JSON.parse(JSON.stringify(this.chart3Data))
          chartData.forEach(v => {
            if (val.find(vv => vv === v[0])) {
              res.push(v)
            }
          });
          res.unshift(chartData[0])
          chart3.init({
            self: this,
            data: res,
          })
        } catch (error) {
          console.log(error)
        }
      },
      deep: true
    },
    'checkedVal1': {
      handler: async function (val) {
        try {
          chart1.init({
            self: this,
            data: this.chart1Data,
            type: val
          })
        } catch (error) {
          console.log(error)
        }
      }
    },
    'checkedVal2': {
      handler: async function (val) {
        try {
          let value = val
          if (val === 'USD') {
            value = 'tvl_usd'
          } else {
            value = 'tvl_eos'
          }
          let res = await lines.lines2('day', value)
          this.chart2Data = res.data
          let res1 = []
          const chartData = JSON.parse(JSON.stringify(this.chart2Data))
          chartData.forEach(v => {
            if (this.charts2Value.find(vv => vv === v[0])) {
              res1.push(v)
            }
          });
          res1.unshift(chartData[0])
          chart2.init({
            self: this,
            data: res1,
            type: val
          })
        } catch (error) {
          this.chart2Data = [[]]
          console.log(error)
        }
      }
    },
    'isMobile': {
      handler(val) {
        this.$nextTick(() => {
          if (!val) {
            if (document.querySelector('.dataList-data canvas')) {
              document.querySelector('.dataList-data canvas').style.display = 'none'
            }
          } else {
            if (document.querySelector('.Overview-dataList canvas')) {
              document.querySelector('.Overview-dataList canvas').style.display = 'block'
            }
          }
          this.initView1Data()
          this.initView2Data()
          this.initView3Data()
        })
      }
    }
  },
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
  }),
  created() { },
  mounted() {
    this.$nextTick(() => {
      this.getReportsList()
      this.initView1Data()
      this.initView2Data()
      this.initView3Data()
    })
  },
  beforeDestroy() { },
  methods: {
    async initView1Data() {
      try {
        let res = await lines.lines1()
        chart1.init({
          self: this,
          data: res.data,
          type: this.checkedVal1,
        })
        this.chart1Data = res.data
        if (res.data.length > 0) {
          let item = JSON.parse(JSON.stringify(res.data[res.data.length - 1]))
          item.tvl_usd_changeOld = item.tvl_usd_change
          // item.tvl_usd_change = item.tvl_usd_change/(tvl_usd-tvl_usd_change)*100
          if (this.accSub(item.tvl_usd, item.tvl_usd_change) != 0 && this.accSub(item.tvl_usd, item.tvl_usd_change)) item.tvl_usd_change = this.accDiv(item.tvl_usd_change, this.accDiv(this.accSub(item.tvl_usd, item.tvl_usd_change), 100))

          item.tvl_usd_change = this.toFixed(item.tvl_usd_change, 2)
          if (item.tvl_usd_change > 0) item.tvl_usd_change = `+${item.tvl_usd_change}%`
          else item.tvl_usd_change = `${item.tvl_usd_change}%`
          if (item.tvl_usd_changeOld == item.tvl_usd) item.tvl_usd_change = '0.00%'
          this.overViewData = item
        }
      } catch (error) {
        console.log(error)
      }
    },
    async initView2Data() {
      try {
        let res = await lines.lines2('day', 'tvl_usd')
        this.chart2Data = res.data
        this.charts2Items = this.chart2Data.map(v => v[0]).slice(1)
        this.charts2Value = this.chart2Data.map(v => v[0]).slice(1)
        // chart2.init({
        //   self: this,
        //   data: res.data,
        // })
      } catch (error) {
        this.chart2Data = [[]]
        console.log(error)
      }
    },
    async initView3Data() {
      try {
        let res = await lines.lines3()
        this.chart3Data = res.data
        this.chart3Data = this.chart3Data.map((item, index) => {
          if (index < 1) return item
          item = item.map((x, y) => {
            if (y < 1) {
              return this.typeLanguage(x)
            }
            return this.toFixed(x, 4)
          })
          return item
        })
        this.charts3Items = this.chart3Data.map(v => v[0]).slice(1)
        this.charts3Value = this.chart3Data.map(v => v[0]).slice(1)
        // chart3.init({
        //   self: this,
        //   data: list,
        // })
      } catch (error) {
        console.log(error)
      }
    },
    async getReportsList() {
      console.log(1111)
      try {
        let res = await lines.overviewReports()
        console.log(res, 'resresresresresresresresres')
      } catch (error) {
        console.log(error)
      }
    },
    handleLink(type) {
      if (type === 'USD') {
        window.open('https://coinmarketcap.com/currencies/tether/')
      } else {
        window.open('https://coinmarketcap.com/currencies/eos/')
      }
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
    typeLanguage(type) {
      let x = ''
      switch (type) {
        case 'cdp':
          x = 'CDP'
          break;
        case 'lending':
          x = 'Lending'
          break;
        case 'dexes':
          x = 'Dexes'
          break;
        case 'yield':
          x = 'Yield'
          break;
        default:
          x = 'Liquid Staking'
      }
      return x
    }
  },
}
</script>
<style lang="scss" scoped>
.Overview {
  background-color: #f9fafb;
  padding: 25px 16px 70px;
  ::v-deep .back-cls {
    background: rgb(86, 90, 105);
    padding: 4px;
    border-radius: 50%;
    width: 28px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    margin-right: 10px;
  }
  ::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
    border: none;
  }
  ::v-deep.v-select__slot {
    border: 1px solid rgba(72, 84, 85, 0.2);
    padding: 5px 10px;
    border-radius: 10px;
    .v-select__selections {
      padding-left: 2px;
    }
  }
  .Overview-layout {
    max-width: 420px;
    margin: 0 auto;
    .tabCls {
      display: flex;
      flex-direction: row-reverse;
      ::v-deep .change-tab_cont {
        padding: 3px;
        a {
          padding: 2px 4px;
          font-size: 10px;
        }
      }
      .sup-assets {
        display: flex;
        padding: 8px 0 0 10px;
        font-weight: bold;
        color: #000;
        cursor: pointer;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          margin-left: 10px;
        }
      }
    }
  }
  .Overview-dataList {
    .dataList-title {
      font-size: 21px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 13px;
    }
    .datalist-box {
      border: 1px solid #efefef;
      background-color: #fff;
      border-radius: 12px;
      .box-des {
        width: 100%;
        padding: 30px 30px 0 30px;
        border-bottom: 1px solid #efefef;
        .des-1 {
          min-width: 56px;
          font-size: 12px;
          font-weight: 500;
          color: #999999;
          margin-right: 12px;
        }
        .des-2 {
          font-size: 17px;
          font-weight: 500;
          color: #000000;
        }
        .des-w {
          // width: 50%;
          flex: 1;
          margin-right: 10px;
          margin-bottom: 18px;
        }
      }

      .box-data {
        width: 100%;
        height: 240px;
        padding: 0 15px;
      }
    }
  }

  .Overview-tvl {
    .tvl-title {
      font-size: 21px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 13px;
      margin-top: 30px;
    }
    .tvl-box {
      border: 1px solid #efefef;
      background-color: #fff;
      border-radius: 12px;
    }
    #view2Data {
      position: relative;
      width: 100%;
      // height: 100%;
      height: 60vh;
      margin-bottom: 10px;
      padding: 15px;
      overflow: hidden;
    }
    #view3Data {
      width: 100%;
      height: 500px;
      padding: 15px;
    }
  }

  .Overview-report {
    .report-title {
      font-size: 21px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 13px;
      margin-top: 30px;
    }
    &-wrap {
      display: flex;
      &__item {
        cursor: pointer;
        img {
          display: block;
          width: 100%;
          margin-bottom: 20px;
        }
        .report-name {
          font-size: 12px;
          color: #757575;
        }
        .report-word {
          font-size: 22px;
          color: #000;
          line-height: 46px;
        }
        .report-read {
          font-size: 12px;
          color: #000;
        }
      }
    }
  }
}

.OverviewPC {
  padding-bottom: 110px;

  ::v-deep .back-cls {
    background: rgb(86, 90, 105);
    padding: 4px;
    border-radius: 50%;
    width: 28px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    margin-right: 10px;
  }
  ::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
    border: none;
  }
  ::v-deep.v-select__slot {
    border: 1px solid rgba(72, 84, 85, 0.2);
    padding: 5px 10px;
    border-radius: 10px;
    .v-select__selections {
      padding-left: 2px;
    }
  }
  .OverviewPC-layout {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    .tabCls {
      display: flex;
      flex-direction: row-reverse;
      padding-right: 110px;
      padding-top: 10px;
      .sup-assets {
        display: flex;
        padding: 0 30px 0 50px;
        font-weight: bold;
        color: #000;
        cursor: pointer;
        align-items: center;
        img {
          width: 30px;
          margin-left: 15px;
        }
      }
    }
  }
  .OverviewPC-overLay {
    width: 100%;
    background-color: #000;
    height: 240px;
    padding-top: 30px;
    .overLay-title {
      padding-left: 18px;
      font-size: 22px;
      font-weight: 600;
      color: #ffffff;
    }
    .overLay-dataList {
      margin-top: 30px;
      padding-left: 48px;
      .dataList-data {
        .data-text1 {
          font-size: 14px;
          font-weight: 500;
          color: #999999;
          margin-bottom: 3px;
        }
        .data-text2 {
          margin-left: 11px;
          font-size: 26px;
          font-weight: 600;
          color: #ffffff;
          margin-right: 80px;
        }
      }
    }
  }

  .OverviewPC-view1 {
    margin-top: -80px;

    .OverviewPC-layout {
      height: 500px;
      border: 1px solid #efefef;
      border-radius: 24px;
      background-color: #fff;
      overflow: hidden;
      #view1Data {
        width: 100%;
        height: 100%;
      }
    }
  }
  .OverviewPC-view2 {
    margin-top: 54px;
    .view2-title {
      width: 1200px;
      margin: 0 auto;
      padding-left: 16px;
      font-size: 28px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 23px;
    }
    .OverviewPC-layout {
      height: 700px;
      border: 1px solid #efefef;
      border-radius: 24px;
      background-color: #fff;
      #view2Data {
        width: 100%;
        // height: 100%;
        padding: 0px 40px 40px;
        height: 500px;
      }
      #view3Data {
        width: 100%;
        // height: 100%;
        height: 700px;
        padding: 40px;
        padding-bottom: 15px;
      }
    }
  }

  .OverviewPC-report {
    margin-top: 70px;
    .OverviewPC-layout {
      padding-left: 20px;
    }
    .report-title {
      font-size: 28px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 23px;
    }

    &-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &::after {
        content: '';
        width: calc(33.33% - 10px);
      }
      &__item {
        width: calc(33.33% - 10px);
        margin-bottom: 20px;
        cursor: pointer;
        img {
          display: block;
          width: 100%;
          margin-bottom: 20px;
        }
        .report-name {
          font-size: 12px;
          color: #757575;
        }
        .report-word {
          font-size: 22px;
          color: #000;
          line-height: 46px;
        }
        .report-read {
          font-size: 12px;
          color: #000;
        }
      }
    }
  }
}
</style>
