import { toFixed } from "@/utils/public"
import moment from "moment"

import * as echarts from "echarts/core"

import { TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, DatasetComponent } from "echarts/components"
import { LineChart, PieChart } from "echarts/charts"
import { UniversalTransition, LabelLayout } from "echarts/features"
import { CanvasRenderer } from "echarts/renderers"

echarts.use([TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer, UniversalTransition, DatasetComponent, PieChart, LabelLayout])

export default {
  vueThis: null,
  chartsData: [],
  init(options) {
    this.vueThis = options.self
    this.chartsData = options.data

    // this.poolChartAction();
    this.vueThis.$nextTick(() => {
      this.poolChartAction()
    })
  },
  poolChartAction() {
    let myChart = echarts.init(document.getElementById("view1Data"))
    myChart.setOption({
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        // data: this.chartsData.map(item => moment(item.line_id * 1000).format('YYYY-MM-DD')),
        data: this.chartsData.map((item) => moment(item.line_id * 1000).format("YYYY-MM-DD")),
      },
      grid: [
        {
          // left: document.body.clientWidth < 1200 ?'18%': '10%',
          bottom: "20%",
        },
      ],
      yAxis: {
        type: "value",
        alignTicks: true,
        boundaryGap: false,
        axisLabel: {
          fontSize: 12,
          formatter: (value) => {
            return this.vueThis.getKMBUnit(value, 0)
          },
        },
      },
      series: [
        {
          data: this.chartsData.map((item) => toFixed(item.tvl_usd, 2)),
          type: "line",
          areaStyle: {},
        },
      ],
    })

    window.addEventListener("resize", () => {
      myChart.resize()
    })
  },
}
