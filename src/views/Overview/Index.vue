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
                  <div class="des-2" :class="getColor(overViewData.tvl_usd_change)">{{ overViewData.tvl_usd_change }}</div>
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
          <div class="tvl-title">
            <div>{{ $t("yield.yield43") }}</div>
            <div class="mt">
              <v-select
                v-model="charts2Value"
                :items="charts2Items"
                label="Select Item"
                multiple
              >
                <template v-slot:selection="{ index }">
                  <span
                    v-if="index === 0"
                    class="grey--text text-caption flex"
                  >
                    <span class="back-cls">{{ charts2Value.length }}</span>
                    <span>Items</span>
                  </span>
                </template>
                <template v-slot:prepend-item>
                  <v-list-item
                    ripple
                    @mousedown.prevent
                    @click="toggle"
                  >
                    <v-list-item-action>
                      <v-icon :color="charts2Value.length > 0 ? 'indigo darken-4' : ''">
                        {{ icon }}
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>
                        Select All
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="mt-2"></v-divider>
                </template>
              </v-select>
            </div>
          </div>
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
              <div class="data-text2" :class="getColor(overViewData.tvl_usd_change)">{{ overViewData.tvl_usd_change }}</div>
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
        <div class="view2-title flexb">
          <span>{{ $t("yield.yield43") }}</span>
          <div style="width: 200px">
            <v-select
              v-model="charts2Value"
              :items="charts2Items"
              label="Select Item"
              multiple
            >
              <template v-slot:selection="{ index }">
                <span
                  v-if="index === 0"
                  class="grey--text text-caption flex"
                >
                  <span class="back-cls">{{ charts2Value.length }}</span>
                  <span>Items</span>
                </span>
              </template>
              <template v-slot:prepend-item>
                <v-list-item
                  ripple
                  @mousedown.prevent
                  @click="toggle"
                >
                  <v-list-item-action>
                    <v-icon :color="charts2Value.length > 0 ? 'indigo darken-4' : ''">
                      {{ icon }}
                    </v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      Select All
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="mt-2"></v-divider>
              </template>
            </v-select>
          </div>
        </div>
        <div class="OverviewPC-layout" style="margin-bottom: 28px; height: 500px">
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
      chart2Data: [[]],
      charts2Items: [],
      charts2Value: [],
    }
  },
  components: {},
  props: {},
  watch: {
    "charts2Value": {
      handler: function (val) {
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
          data: res
        })
        console.log(res.toString(), 'resres');
      },
      deep: true
    },
  },
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
    likesAllFruit () {
      return this.charts2Value.length === this.charts2Items.length
    },
    likesSomeFruit () {
      return this.charts2Value.length > 0 && !this.likesAllFruit
    },
    icon () {
      if (this.likesAllFruit) return 'mdi-close-box'
      if (this.likesSomeFruit) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
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
          item.tvl_usd_changeOld = item.tvl_usd_change
          // item.tvl_usd_change = item.tvl_usd_change/(tvl_usd-tvl_usd_change)*100
          if (this.accSub(item.tvl_usd, item.tvl_usd_change) != 0 && this.accSub(item.tvl_usd, item.tvl_usd_change)) item.tvl_usd_change = this.accDiv(item.tvl_usd_change, this.accDiv(this.accSub(item.tvl_usd, item.tvl_usd_change), 100))

          item.tvl_usd_change = this.toFixed(item.tvl_usd_change, 2)
          if (item.tvl_usd_change > 0) item.tvl_usd_change = `+${item.tvl_usd_change}%`
          else item.tvl_usd_change = `${item.tvl_usd_change}%`
          // console.log('tvl_usd_change', item.tvl_usd_change);
          if (item.tvl_usd_changeOld == item.tvl_usd) item.tvl_usd_change = '0.00%'
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
        console.log(list.toString(), 'listlist');
      } catch (error) {
        console.log(error)
      }
    },
    toggle () {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.charts2Value = []
        } else {
          this.charts2Value = this.charts2Items.slice()
        }
      })
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
    }
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
      .back-cls {
        background: rgb(86, 90, 105);
        padding: 4px;
        border-radius: 50%;
        width: 28px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        margin-right: 10px;
      }
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
      .back-cls {
        background: rgb(86, 90, 105);
        padding: 4px;
        border-radius: 50%;
        width: 28px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        margin-right: 10px;
      }
    }
    .OverviewPC-layout {
      height: 700px;
      border: 1px solid #efefef;
      border-radius: 24px;
      background-color: #fff;
      #view2Data {
        width: 100%;
        // height: 100%;
        padding: 40px;
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
