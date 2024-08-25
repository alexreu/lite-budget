import { BudgetCard } from "@/components/budget-card";
import { Col, Row } from "antd";

export default function Dashboard() {
  return (
    <>
      <Row gutter={16}>
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
      </Row>
    </>
  );
}
