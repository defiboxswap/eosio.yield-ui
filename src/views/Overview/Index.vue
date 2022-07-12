<template>
  <div>
    <div class="Overview" v-if="isMobile">
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
                  <div class="des-2">{{ overViewData.tvl_usd_change }}</div>
                </div>
                <!-- Projects -->
                <div class="des-w flex">
                  <div class="des-1">{{ $t("yield.yield7") }}</div>
                  <div class="des-2">{{ overViewData.agg_protocol_count }}</div>
                </div>
              </div>
            </div>

            <div class="box-data" id="view1Data"></div>
          </div>
        </div>

        <!-- TVL Distribution -->
        <div class="Overview-tvl">
          <div class="tvl-title">{{ $t("yield.yield43") }}</div>
          <!-- <div class="tvl-box" id="view2Data" :style="{'height': 650 + (this.chart2Data[0].length / 4 * 400) + 'px'}"></div> -->
          <div class="tvl-box" id="view2Data"></div>
          <div class="tvl-box" id="view3Data"></div>
        </div>

        <!-- Analysis report -->
        <div class="Overview-report">
          <div class="report-title">{{ $t("yield.yield44") }}</div>
          <!-- <div class="report-card" v-for="(item, index) in 5" :key="index">
            <div class="card-title">YEILD + DATA RESEARCH REPORT</div>
            <div class="card-time">03/23/2022</div>
            <v-btn class="card-button">View</v-btn>
          </div>
          <div class="report-add text-flex-center">Add</div> -->
          <div style="margin-top: -50px;">
            <BaseNoData></BaseNoData>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="OverviewPC">
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
              <div class="data-text2">{{ overViewData.tvl_usd_change }}</div>
            </div>

            <div class="dataList-data flex flex-align-end">
              <!-- Projects -->
              <div class="data-text1">{{ $t("yield.yield7") }}</div>
              <div class="data-text2">{{ overViewData.agg_protocol_count }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="OverviewPC-view1">
        <div class="OverviewPC-layout">
          <div id="view1Data"></div>
        </div>
      </div>

      <div class="OverviewPC-view2">
        <div class="view2-title">{{ $t("yield.yield43") }}</div>
        <div class="OverviewPC-layout" style="margin-bottom: 28px">
          <div id="view2Data"></div>
        </div>

        <div class="OverviewPC-layout">
          <div id="view3Data"></div>
        </div>
      </div>

      <div class="OverviewPC-report">
        <!-- Analysis Report -->
        <div class="report-title">{{ $t("yield.yield44") }}</div>

        <div class="OverviewPC-layout">
          <!-- <div class="flex flex-align-center flex-wrap">
            <div class="report-card" v-for="(item, index) in 4" :key="index">
              <div class="card-title">YEILD + DATA RESEARCH REPORT</div>
              <div class="card-time">03/23/2022</div>
              <v-btn class="card-button">View</v-btn>
            </div>

            <div class="report-add text-flex-center">Add</div>
          </div> -->
          <div style="margin-top: -50px;">
            <BaseNoData></BaseNoData>
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

export default {
  name: "Overview",
  data() {
    return {
      overViewData: {
        agg_protocol_count: 0,
        tvl_usd: 0,
        tvl_usd_change: "0.00",
      },
      chart2Data: [[]]
    }
  },
  components: {},
  props: {},
  watch: {},
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
  }),
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.initView1Data()
      this.initView2Data()
      this.initView3Data()
    })
  },
  beforeDestroy() {},
  methods: {
    async initView1Data() {
      try {
        let res = await lines.lines1()
        chart1.init({
          self: this,
          data: res.data,
        })
        if (res.data.length > 0) {
          let item = JSON.parse(JSON.stringify(res.data[res.data.length - 1]))
          if (this.accSub(item.tvl_usd, item.tvl_usd_change) != 0 && this.accSub(item.tvl_usd, item.tvl_usd_change)) item.tvl_usd_change = this.accDiv(item.tvl_usd_change, this.accDiv(this.accSub(item.tvl_usd, item.tvl_usd_change), 100))

          item.tvl_usd_change = this.toFixed(item.tvl_usd_change, 2)
          if (item.tvl_usd_change > 0) item.tvl_usd_change = `+${item.tvl_usd_change}%`
          else item.tvl_usd_change = `${item.tvl_usd_change}%`
          // console.log('tvl_usd_change', item.tvl_usd_change);

          this.overViewData = item
        }
      } catch (error) {
        console.log(error)
      }
    },
    async initView2Data() {
      try {
        let res = await lines.lines2()
        this.chart2Data = res.data
        chart2.init({
          self: this,
          data: res.data,
        })
      } catch (error) {
        this.chart2Data = [[]]
        console.log(error)
      }
    },
    async initView3Data() {
      try {
        let res = await lines.lines3()
        let list = res.data
        list = list.map((item, index) => {
          if (index < 1) return item
          item = item.map((x, y) => {
            if (y < 1) return x
            return this.toFixed(x, 4)
          })
          return item
        })

        chart3.init({
          self: this,
          data: list,
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.Overview {
  background-color: #f9fafb;
  padding: 25px 16px 70px;
  .Overview-layout {
    max-width: 420px;
    margin: 0 auto;
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
          min-width: 70px;
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
      width: 100%;
      // height: 650px;
      height: 67vh;
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
    .report-card {
      width: 100%;
      border: 1px solid #efefef;
      background-color: #fff;
      border-radius: 12px;
      padding: 40px;
      margin-bottom: 10px;
      .card-title {
        font-size: 22px;
        font-weight: 600;
        color: #000000;
      }
      .card-time {
        font-size: 18px;
        font-weight: 400;
        color: #000000;
        margin-top: 10px;
        margin-bottom: 30px;
      }
      .card-button {
        min-width: 98px;
        height: 43px;
        line-height: 43px;
        padding: 0 25px;
        border-radius: 20px;
        background-color: #1c1dff;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
      }
    }
    .report-add {
      border: 1px solid #efefef;
      background-color: #fff;
      border-radius: 12px;
      width: 100%;
      height: 258px;
      line-height: 258px;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: #000000;
      cursor: pointer;
    }
  }
}

.OverviewPC {
  padding-bottom: 110px;
  .OverviewPC-layout {
    width: 1200px;
    margin: 0 auto;
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
      height: 452px;
      border: 1px solid #efefef;
      border-radius: 24px;
      background-color: #fff;
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
      height: 452px;
      border: 1px solid #efefef;
      border-radius: 24px;
      background-color: #fff;
      #view2Data {
        width: 100%;
        height: 100%;
        padding: 40px;
      }
      #view3Data {
        width: 100%;
        height: 100%;
        padding: 40px;
        padding-bottom: 15px;
      }
    }
  }

  .OverviewPC-report {
    margin-top: 70px;
    .report-title {
      width: 1200px;
      margin: 0 auto;
      padding-left: 16px;
      font-size: 28px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 23px;
    }
    .OverviewPC-layout {
      padding-left: 20px;
    }
    .report-card {
      width: 374px;
      height: 244px;
      margin-right: 18px;
      margin-bottom: 18px;
      padding: 43px 43px 32px;
      border: 1px solid #e8e8e8;
      .card-title {
        font-size: 22px;
        font-weight: 600;
        color: #000000;
      }
      .card-time {
        font-size: 18px;
        font-weight: 400;
        color: #000000;
        margin-top: 10px;
        margin-bottom: 15px;
      }
      .card-button {
        min-width: 98px;
        height: 43px;
        line-height: 43px;
        padding: 0 25px;
        border-radius: 20px;
        background-color: #1c1dff;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
      }
    }
    .report-add {
      width: 374px;
      height: 244px;
      line-height: 244px;
      text-align: center;
      background-color: #f9fafb;
      font-size: 16px;
      font-weight: 600;
      color: #000000;
      margin-right: 18px;
      margin-bottom: 18px;
      cursor: pointer;
    }
  }
}
</style>
