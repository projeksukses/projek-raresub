export const earningsChartConfig = {
  type: "radialBar",
  header: {
    title: "Earnings",
    showExport: false,
  },
  options: {
    chart: {
      sparkline: {
        enabled: false,
      },
      height: 300,
    },
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "30%",
        },
        track: {
          background: "#f0f0f0",
          strokeWidth: "100%",
          margin: 10,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    colors: ["#000000", "#A4E603", "#82C6D8"], // sales, profit, growth
    labels: ["Sales", "Profit", "Growth"],
    legend: {
      show: true,
      position: "bottom",
      fontSize: "14px",
      markers: {
        width: 10,
        height: 10,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 4,
      },
    },
  },
};

export const salesAnalyticsConfig = {
  type: "line",
  header: {
    title: "Sales Analytics",
    showExport: false,
  },
  options: {
    chart: {
      height: 250,
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#9A7FF0", "#B3F603"], // offline, online
    markers: {
      size: 5,
      strokeWidth: 2,
      hover: { size: 7 }
    },
    grid: {
      borderColor: "#e9ecef",
      strokeDashArray: 4,
    },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
      labels: {
        style: {
          colors: "#94a3b8",
          fontSize: "12px"
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: "#94a3b8",
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      markers: {
        width: 10,
        height: 10,
        radius: 12,
      },
      itemMargin: {
        horizontal: 12,
        vertical: 0,
      },
    },
    tooltip: {
      y: {
        formatter: (v) => `$${v}`,
      },
      theme: "dark",
    },
  },
};

