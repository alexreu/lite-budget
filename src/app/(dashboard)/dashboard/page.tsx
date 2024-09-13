"use client";

import { BudgetCard } from "@/components/budget-card";
import { BarChart } from "@/components/charts/BarChart";
import { DoughnutChart } from "@/components/charts/DoughnutChart";
import { Col, Row } from "antd";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

export default function Dashboard() {
  const doughnutData: ChartData<"doughnut"> = {
    labels: ["Plaisirs", "Obligatoire"],
    datasets: [
      {
        label: "Montant en €",
        data: [300, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const barData: ChartData<"bar"> = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const barOptions: ChartOptions<"bar"> = {
    plugins: {
      title: {
        display: true,
        text: "Dépenses",
      },
    },
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    plugins: {
      title: {
        display: true,
        text: "Répartition des dépenses",
      },
    },
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <BudgetCard title="Revenus" amount={1000} suffix="€" />
        </Col>
        <Col span={6}>
          <BudgetCard title="Dépenses" amount={1000} suffix="€" />
        </Col>
        <Col span={6}>
          <BudgetCard title="Prélèvements" amount={1000} suffix="€" />
        </Col>
        <Col span={6}>
          <BudgetCard title="Montant épargné" amount={1000} suffix="€" />
        </Col>
        <Col span={6}>
          <DoughnutChart data={doughnutData} options={doughnutOptions} />
        </Col>
        <Col span={6}>
          <BarChart data={barData} options={barOptions} />
        </Col>
        <Col span={6}>
          <BarChart data={barData} options={barOptions} />
        </Col>
        <Col span={6}>
          <BarChart data={barData} options={barOptions} />
        </Col>
      </Row>
      <Row gutter={16}></Row>
    </>
  );
}
