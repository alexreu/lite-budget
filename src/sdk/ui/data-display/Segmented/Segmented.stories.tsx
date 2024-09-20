import { Meta, StoryObj } from "@storybook/react";
import { Segmented } from "./Segmented";

const meta: Meta<typeof Segmented> = {
  title: "UI/Data Display/Segmented",
  component: Segmented,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Segmented>;

export const Basic: Story = {
  args: {
    options: ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
    defaultValue: "Weekly",
  },
};

export const Disabled: Story = {
  args: {
    options: ["Daily", "Weekly", "Monthly"],
    disabled: true,
  },
};

export const WithBlock: Story = {
  args: {
    options: ["Daily", "Weekly", "Monthly"],
    block: true,
  },
};

export const WithCustomRendering: Story = {
  args: {
    options: [
      { label: "Daily", value: "daily", icon: "📅" },
      { label: "Weekly", value: "weekly", icon: "📆" },
      { label: "Monthly", value: "monthly", icon: "📅" },
    ],
  },
};
