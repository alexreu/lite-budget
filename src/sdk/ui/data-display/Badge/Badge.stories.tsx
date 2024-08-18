import { Meta, StoryObj } from "@storybook/react";
import { Card } from "antd";
import { MessageCircle } from "lucide-react";
import { Avatar } from "../Avatar/Avatar";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    count: 5,
    children: <Avatar shape="square" size="large" />,
  },
};

export const Dot: Story = {
  args: {
    dot: true,
    children: <MessageCircle />,
  },
};

export const CustomColor: Story = {
  args: {
    count: 5,
    color: "blue",
    children: <Avatar shape="square" size="large" />,
  },
};

export const Standalone: Story = {
  args: {
    count: 25,
    showZero: true,
  },
};

export const OverflowCount: Story = {
  args: {
    count: 100,
    overflowCount: 99,
    children: <Avatar shape="square" size="large" />,
  },
};

export const Status: Story = {
  args: {
    status: "success",
    text: "Success",
  },
};

export const SmallSize: Story = {
  args: {
    size: "small",
    count: 5,
    children: <Avatar shape="square" size="default" />,
  },
};

export const Ribbon: Story = {
  args: {
    children: (
      <Badge.Ribbon text="Ribbon">
        <Card title="Card title" size="small">
          Card content
        </Card>
      </Badge.Ribbon>
    ),
  },
};
