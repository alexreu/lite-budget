import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "UI/Navigation/Menu",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Menu>;

const items = [
  { key: "1", label: "Home" },
  { key: "2", label: "About" },
  { key: "3", label: "Contact" },
];

export const Basic: Story = {
  args: {
    items: items,
    mode: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    ...Basic.args,
    mode: "vertical",
    style: { width: 256 },
  },
};

export const SubMenu: Story = {
  args: {
    style: { width: 256 },
    items: [
      ...items,
      {
        key: "4",
        label: "Services",
        children: [
          { key: "4-1", label: "Service 1" },
          { key: "4-2", label: "Service 2" },
        ],
      },
    ],
  },
};

export const SelectedKeys: Story = {
  args: {
    ...Basic.args,
    selectedKeys: ["2"],
  },
};

export const Disabled: Story = {
  args: {
    items: [...items, { key: "4", label: "Disabled", disabled: true }],
  },
};
