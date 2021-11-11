import React from 'react'
import Chart from 'react-apexcharts'

function CryptoChart() {
  const chartOptions = {
    options: {
      chart: {
        id: "line",
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        // this needs to be populated with dates
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        // this needs to be populated with values
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

  return (
    <div className="mixed-chart">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        width="900"
        height="300"
      />
    </div>
  )
}

export default CryptoChart
