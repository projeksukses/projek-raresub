 "use client"

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { ApexOptions } from "apexcharts";

interface ChartProps {
  config: {
    type: ApexOptions["chart"]["type"];
    options: ApexOptions;
    header?: {
      title?: string;
      showExport?: boolean;
    };
  };
  data: any[];
  height?: number;
  width?: string;
  onPointClick?: (dataPointIndex: number, seriesIndex: number) => void;
  onLegendClick?: (config: any) => void;
  plain?: boolean;
  className?: string;
}

const ChartView = ({
  config,
  data,
  height = 320,
  width = "100%",
  onPointClick,
  onLegendClick,
  plain = false,
  className = "",
}: ChartProps) => {
  if (!config) {
    console.warn("ChartView membutuhkan prop `config`");
    return <div>Tidak ada konfigurasi chart</div>;
  }

  const { type, options, header } = config;

  const mergedOptions: ApexOptions = {
    ...options,
    chart: {
      ...options.chart,
      events: {
        dataPointSelection: (_, __, { dataPointIndex, seriesIndex }) => {
          onPointClick?.(dataPointIndex, seriesIndex);
        },
        legendClick: (_, __, cfg) => {
          onLegendClick?.(cfg);
        },
      },
    },
  };

  const chartElement = (
    <Chart
      type={type}
      options={mergedOptions}
      series={data}
      height={height}
      width={width}
    />
  );

  if (plain) return chartElement;

  return (
    <div className={className}>
      {header?.title && (
        <div className="flex justify-between items-center mb-3">
          <h2 className={`text-xl font-semibold`}>
            {header.title}
          </h2>
          {header.showExport && (
            <button
              onClick={() => console.log("export")}
              className="text-sm text-blue-600 hover:underline"
            >
              Export
            </button>
          )}
        </div>
      )}

      {chartElement}
    </div>
  );
};

export default ChartView;