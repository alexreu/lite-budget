import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../general/Button/Button";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "UI/Data Display/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  args: {
    content: <div>Popover content</div>,
    title: "Popover Title",
    children: <Button>Hover me</Button>,
  },
};

export const Placement: Story = {
  args: {
    content: <div>Popover content</div>,
    title: "Popover Title",
    placement: "right",
    children: <Button>Click me</Button>,
  },
};

export const Trigger: Story = {
  args: {
    content: <div>Popover content</div>,
    title: "Popover Title",
    trigger: "click",
    children: <Button>Click me</Button>,
  },
};

export const CustomContent: Story = {
  args: {
    content: (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    ),
    title: "Popover Title",
    children: <Button>Hover me</Button>,
  },
};

export const WithArrow: Story = {
  args: {
    content: <div>Popover content</div>,
    title: "Popover Title",
    arrow: true,
    children: <Button>Hover me</Button>,
  },
};
