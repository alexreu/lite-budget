import { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "UI/Data Entry/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  args: {},
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: dayjs("2023-03-15"),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCustomFormat: Story = {
  args: {
    format: "YYYY/MM/DD",
  },
};

export const RangePicker: Story = {
  render: () => <DatePicker.RangePicker />,
};

export const MonthPicker: Story = {
  render: () => <DatePicker.MonthPicker />,
};

export const WeekPicker: Story = {
  render: () => <DatePicker.WeekPicker />,
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: "Select date",
  },
};

export const WithAllowClear: Story = {
  args: {
    allowClear: true,
  },
};
