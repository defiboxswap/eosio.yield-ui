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
    this.type = options.type
    // this.poolChartAction();
    this.vueThis.$nextTick(() => {
      this.poolChartAction()
    })
  },
  poolChartAction() {
    let myChart = echarts.init(document.getElementById("view1Data"))
    if (myChart != null) {
      myChart.clear()
    }
    myChart = echarts.init(document.getElementById("view1Data"))
    let series = []
    let legendName = []
    this.chartsData.splice(1).forEach((item) => {
      legendName.push(item[0])
      series.push({
        name: item[0],
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: item.splice(1),
      })
    })
    myChart.setOption({
      tooltip: {
        confine: true,
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: [],
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        // data: this.chartsData.map(item => moment(item.line_id * 1000).format('YYYY-MM-DD')),
        data: this.chartsData[0].splice(1).map((i) => moment(i * 1000).format("MM-DD")),
      },
      grid: [
        {
          top: '10%',
          left: document.body.clientWidth < 1200 ? '18%': '10%',
          bottom: document.body.clientWidth < 1200 ? '18%': '30%',
        },
      ],
      yAxis: {
        type: "value",
        axisLabel: {
          fontSize: 12,
          formatter: (value) => {
            const val = this.type === 'USD' ? `$${this.vueThis.getKMBUnit(value, 0)}` : this.vueThis.getKMBUnit(value, 0)
            return val
          },
        },
      },
      series: series,
    })

    window.addEventListener("resize", () => {
      myChart.resize()
    })
  },
}
