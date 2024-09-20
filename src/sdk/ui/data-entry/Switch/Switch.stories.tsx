import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "UI/Data Entry/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const WithText: Story = {
  args: {
    checkedChildren: "ON",
    unCheckedChildren: "OFF",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const CustomColors: Story = {
  args: {
    defaultChecked: true,
    checkedChildren: "1",
    unCheckedChildren: "0",
    style: { backgroundColor: "#52c41a" },
  },
};
