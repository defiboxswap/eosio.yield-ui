import * as echarts from "echarts/core"
import moment from "moment"
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
    let myChart = echarts.init(document.getElementById("view2Data"))
    if (myChart != null) {
      myChart.dispose()
    }
    myChart = echarts.init(document.getElementById("view2Data"))
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
      title: {
        // text: "Stacked Area Chart",
        text: "",
      },
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
      // toolbox: {
      //   // feature: {
      //   //   saveAsImage: {},
      //   // },
      // },
      grid: {
        left: document.body.clientWidth < 1200 ?'3%': '3%',
        top: document.body.clientWidth < 1200 ? ((this.chartsData[0].length / 3 * 12) + '%') : ((Math.floor(this.chartsData[0].length / 10 + 1) * 13) + '%'),
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: this.chartsData[0].splice(1).map((i) => moment(i * 1000).format("YYYY-MM-DD")),
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            fontSize: 12,
            formatter: (value) => {
              return '$' + this.vueThis.getKMBUnit(value, 0)
            },
          },
        },
      ],
      series: series,
    })

    window.addEventListener("resize", () => {
      myChart.resize()
    })
  },
}
