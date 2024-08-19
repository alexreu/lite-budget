import { Meta, StoryObj } from "@storybook/react";
import { Statistic } from "./Statistic";

const meta: Meta<typeof Statistic> = {
  title: "UI/Data Display/Statistic",
  component: Statistic,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Statistic>;

export const Basic: Story = {
  args: {
    title: "Active Users",
    value: 112893,
  },
};

export const WithPrefix: Story = {
  args: {
    title: "Feedback",
    value: 1128,
    prefix: "👍",
  },
};

export const WithSuffix: Story = {
  args: {
    title: "Account Balance",
    value: 3000,
    precision: 2,
    suffix: "USD",
  },
};

export const WithCustomFormatter: Story = {
  args: {
    title: "Sale Progress",
    value: 0.78,
    precision: 2,
    formatter: (value) => `${((value as number) * 100).toFixed(2)}%`,
  },
};

export const WithGroupSeparator: Story = {
  args: {
    title: "Total Downloads",
    value: 1234567890,
    groupSeparator: ",",
  },
};

export const Loading: Story = {
  args: {
    title: "Active Users",
    value: 112893,
    loading: true,
  },
};
