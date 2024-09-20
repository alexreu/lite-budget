"use client";

import { Card } from "@/sdk/ui/data-display/Card";
import { Statistic } from "@/sdk/ui/data-display/Statistic";
import { theme } from "antd";

const { useToken } = theme;

type BudgetCardProps = {
  title?: string;
  icon?: React.ReactNode;
  amount: number;
  suffix: string;
};

export const BudgetCard = ({ title, amount, suffix }: BudgetCardProps) => {
  const { token } = useToken();
  return (
    <Card>
      <Statistic
        title={title}
        value={amount}
        suffix={suffix}
        valueStyle={{
          color: amount > 0 ? token.colorPrimary : token.colorError,
        }}
      />
    </Card>
  );
};
