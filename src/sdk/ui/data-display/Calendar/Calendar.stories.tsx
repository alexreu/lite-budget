import { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "UI/Data Display/Calendar",
  component: Calendar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};

export const WithSelectedDate: Story = {
  args: {
    value: dayjs("2024-03-15"),
  },
};

export const WithDisabledDates: Story = {
  args: {
    disabledDate: (current) => {
      return current && current < dayjs().endOf("day");
    },
  },
};

export const CustomCellRender: Story = {
  args: {
    cellRender: (date) => {
      if (date.date() === 1) {
        return <div style={{ color: "red" }}>1st</div>;
      }
      return date.date();
    },
  },
};

export const YearMode: Story = {
  args: {
    mode: "year",
  },
};

export const MonthMode: Story = {
  args: {
    mode: "month",
  },
};

export const WithOnSelect: Story = {
  args: {
    onSelect: (date) => {
      console.log("Selected date:", date.format("YYYY-MM-DD"));
    },
  },
};

export const WithOnPanelChange: Story = {
  args: {
    onPanelChange: (date, mode) => {
      console.log("Panel changed:", date.format("YYYY-MM-DD"), mode);
    },
  },
};
