// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class ViewStatics extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end

    // Create chart instance
    let chart = am4core.create(this.chartDB.current, am4charts.XYChart)
    // Add data
    chart.data = [
      {
        date: "2018-01-1",
        price: 180,
      },
      {
        date: "2018-01-2",
        price: 252,
      },
      {
        date: "2018-01-3",
        price: 185,
      },
      {
        date: "2018-01-4",
        price: 189,
      },
      {
        date: "2018-01-5",
        price: 158,
      },
      {
        date: "2018-01-6",
        price: 200,
      },
      {
        date: "2018-01-7",
        price: 187,
      },
      {
        date: "2018-01-8",
        price: 180,
      },
      {
        date: "2018-01-9",
        price: 252,
      },
      {
        date: "2018-01-10",
        price: 185,
      },
      {
        date: "2018-01-11",
        price: 268,
      },
      {
        date: "2018-01-12",
        price: 158,
      },
      {
        date: "2018-01-13",
        price: 200,
      },
      {
        date: "2018-01-14",
        price: 187,
      },
      {
        date: "2018-01-15",
        price: 180,
      },
      {
        date: "2018-01-16",
        price: 252,
      },
      {
        date: "2018-01-17",
        price: 185,
      },
      {
        date: "2018-01-18",
        price: 250,
      },
      {
        date: "2018-01-19",
        price: 158,
      },
      {
        date: "2018-01-20",
        price: 200,
      },
      {
        date: "2018-01-21",
        price: 187,
      },
      {
        date: "2018-01-22",
        price: 180,
      },
      {
        date: "2018-01-23",
        price: 252,
      },
      {
        date: "2018-01-24",
        price: 185,
      },
      {
        date: "2018-01-25",
        price: 295,
      },
      {
        date: "2018-01-26",
        price: 158,
      },
      {
        date: "2018-01-27",
        price: 200,
      },
      {
        date: "2018-01-28",
        price: 90,
      },
    ]

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0
    dateAxis.renderer.grid.template.disabled = true
    dateAxis.startLocation = 0.6
    dateAxis.endLocation = 0.4
    dateAxis.renderer.labels.template.disabled = true
    dateAxis.renderer.inside = true

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.logarithmic = false
    valueAxis.renderer.minGridDistance = 1
    valueAxis.renderer.grid.template.disabled = true
    valueAxis.renderer.inside = true
    valueAxis.renderer.labels.template.disabled = true

    // Create series
    let series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = "price"
    series.dataFields.dateX = "date"
    series.strokeWidth = 3
    series.fillOpacity = 0.1
    series.tooltipText = "{valueY.value}"
    series.fill = am4core.color("#f44336")
    series.stroke = am4core.color("#f44336")
    series.strokeWidth = 3

    // Add cursor
    chart.cursor = new am4charts.XYCursor()
    chart.cursor.fullWidthLineX = true
    chart.cursor.lineX.strokeWidth = 0
    chart.cursor.lineX.fill = am4core.color("#fff")
    chart.cursor.lineX.fillOpacity = 0
    chart.padding(0, 0, 0, 0)
    this.chart = chart
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
  render() {
    return (
      <div
        ref={this.chartDB}
        style={{ width: this.props.width, height: this.props.height }}
      />
    )
  }
}
ViewStatics.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
ViewStatics.defaultProps = {
  width: "100%",
}

export default ViewStatics
