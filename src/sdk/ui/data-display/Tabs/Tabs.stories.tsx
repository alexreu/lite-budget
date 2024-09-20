import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Data Display/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultActiveKey: "1",
    items: [
      { label: "Tab 1", key: "1", children: "Content of Tab 1" },
      { label: "Tab 2", key: "2", children: "Content of Tab 2" },
      { label: "Tab 3", key: "3", children: "Content of Tab 3" },
    ],
  },
};

export const Centered: Story = {
  args: {
    ...Default.args,
    centered: true,
  },
};

export const RightPosition: Story = {
  args: {
    ...Default.args,
    tabPosition: "right",
  },
};

export const CardType: Story = {
  args: {
    ...Default.args,
    type: "card",
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: "large",
  },
};

export const WithDisabledTab: Story = {
  args: {
    defaultActiveKey: "1",
    items: [
      { label: "Tab 1", key: "1", children: "Content of Tab 1" },
      { label: "Tab 2", key: "2", children: "Content of Tab 2" },
      {
        label: "Disabled",
        key: "3",
        children: "Content of Tab 3",
        disabled: true,
      },
    ],
  },
};
