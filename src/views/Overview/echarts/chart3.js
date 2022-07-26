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
    var chartDom = document.getElementById("view3Data")
    var myChart = echarts.init(chartDom)
    var option

    this.chartsData[0] = this.chartsData[0].map((item, index) => {
      if (index > 0) return moment(item * 1000).format("MM-DD")
      return item
    })

    setTimeout(() => {
      option = {
        legend: {
          show: false
        },
        tooltip: {
          trigger: "axis",
          showContent: false,
        },
        dataset: {
          // source: [
          //   ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
          //   ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          //   ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          //   ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          //   ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
          // ],
          source: this.chartsData,
        },
        xAxis: { type: "category" },
        yAxis: {
          gridIndex: 0,
          axisLabel: {
            fontSize: 12,
            formatter: (value) => {
              return '$' + this.vueThis.getKMBUnit(value, 0);
            },
          }
        },
        grid: [
          {
            top: "60%",
            left: document.body.clientWidth < 1200 ? "18%" : "10%",
            bottom: "20%",
          },
        ],
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            emphasis: {
              focus: "self",
            },
            label: {
              // formatter: "{b}: {@2012} ({d}%)",
              // formatter: `{b}: {@${this.chartsData[0][this.chartsData[0].length - 1]}} ({d}%)`,
              // formatter: `{b}:  ({d}%)`,
              formatter: (value) => {
                let dimension = this.chartsData[0].length - 1
                let yValue = '$' + this.vueThis.getKMBUnit(value.value[dimension], 0);
                if (document.body.clientWidth > 1200) yValue = '$' + this.vueThis.getKMBUnit(value.value[dimension], 2)
                return `${value.name}: ${ value.percent }%(${ yValue })`
              },
              width: document.body.clientWidth > 1200? 500:100,
              overflow: 'break'
            },
            encode: {
              // itemName: "product",
              itemName: this.chartsData[0][0],
              // value: "2012",
              value: this.chartsData[0][this.chartsData[0].length - 1],
              // tooltip: "2012",
              tooltip: this.chartsData[0][this.chartsData[0].length - 1],
            },
          },
        ],
      }
      myChart.on("updateAxisPointer", (event) => {
        const xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1
          myChart.setOption({
            series: {
              id: "pie",
              label: {
                // formatter: "{b}: {@[" + dimension + "]} ({d}%)",
                formatter: (value) => {
                  // console.log('updateAxisPointer',value, dimension);
                  let yValue = '$' + this.vueThis.getKMBUnit(value.value[dimension], 2);
                  if (document.body.clientWidth > 1200) yValue = '$' + this.vueThis.getKMBUnit(value.value[dimension], 2)
                  return `${value.name}: ${ value.percent }%(${ yValue })`
                },
                width: document.body.clientWidth > 1200? 600:100,
                overflow: 'break'
              },
              encode: {
                value: dimension,
                tooltip: dimension,
              },
            },
          })
        }
      })
      myChart.setOption(option)
    })


    option && myChart.setOption(option)

    window.addEventListener("resize", () => {
      myChart.resize()
    })
  },
}
