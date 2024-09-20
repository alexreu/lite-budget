import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: ChartData<"doughnut">;
  options?: ChartOptions<"doughnut">;
}

export const DoughnutChart = ({ data, options }: DoughnutChartProps) => {
  const defaultOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: true,
        text: "Chart title",
      },
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return <Doughnut data={data} options={mergedOptions} />;
};
