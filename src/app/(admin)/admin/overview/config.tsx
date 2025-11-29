import Image from "next/image";

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
          size: "28%",
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
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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

import { TableConfig } from "@/components/admin/table/types";
import { Product } from "@/types/product/product";

export const productsTableConf: TableConfig<Product> = {

  className: "bg-transparent",
  theadClassName: "text-sm",
  tbodyClassName: "text-md text-gray-700",
  headerStyle: {
    bgColor: "bg-transparent",
    textColor: "text-gray-400",
    fontWeight: "font-semibold",
    py: "py-3",
    textAlign: "text-center",
  },
  cellStyle: {
    py: "py-3",
    textAlign: "text-center",
    textColor: "text-gray-700",
    fontWeight: "font-semibold",
    rowHover: "hover:bg-gray-50",
    rowTransition: "transition-all duration-150",
    borderBottom: "border-t border-gray-200",
  },

  columns: [
    {
      key: "product_name",
      label: "Product Name",
      headerClassName: "text-left",
      cellClassName: "text-left",
      render: (value, row) => {
        return (
          <div className="flex items-center gap-3">
            <div className="relative overflow-hidden aspect-square size-10 rounded-md bg-gray-200">
              <Image
                src={row.image}
                alt={`${value} image`}
                fill
              />

            </div>
            {value}
          </div>
        );
      },
    },
    {
      key: "sold",
      label: "Sold",
      headerClassName: "text-left",
      cellClassName: "text-left",
      render: (value) => {
        return <span>{value} Pcs</span>
      }
    },
    {
      key: "total_sales",
      label: "Total Sales",
      headerClassName: "text-left",
      cellClassName: "text-left",
      render: (value) => {
        return <span>${value}</span>
      }
    },
    {
      key: "stock_status",
      label: "Stock Status",
      headerClassName: "text-left",
      cellClassName: "text-left",
    },
    {
      key: "actions",
      label: "Action",
      headerClassName: "text-center",
      cellClassName: "text-center",
    },
  ],
};