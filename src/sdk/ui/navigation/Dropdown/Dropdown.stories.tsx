import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "antd";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "UI/Navigation/Dropdown",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const menuItems = [
  { key: "1", label: "Option 1" },
  { key: "2", label: "Option 2" },
  { key: "3", label: "Option 3" },
];

export const Basic: Story = {
  args: {
    menu: { items: menuItems },
    children: <Button>Hover me</Button>,
  },
};

export const ClickTrigger: Story = {
  args: {
    ...Basic.args,
    trigger: ["click"],
  },
};

export const RightPlacement: Story = {
  args: {
    ...Basic.args,
    placement: "bottomRight",
  },
};

export const DisabledDropdown: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};

export const CustomArrow: Story = {
  args: {
    ...Basic.args,
    arrow: { pointAtCenter: true },
  },
};
