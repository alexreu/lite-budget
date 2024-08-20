import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../general/Button/Button";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Data Display/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: "This is a tooltip",
    children: <span>Hover me</span>,
  },
};

export const WithButton: Story = {
  args: {
    title: "Tooltip on a button",
    children: <Button>Hover for tooltip</Button>,
  },
};

export const CustomPlacement: Story = {
  args: {
    title: "Tooltip on top",
    placement: "top",
    children: <span>Hover for top tooltip</span>,
  },
};

export const ColoredTooltip: Story = {
  args: {
    title: "Colored tooltip",
    color: "blue",
    children: <span>Hover for blue tooltip</span>,
  },
};

export const CustomStyle: Story = {
  args: {
    title: "Custom styled tooltip",
    overlayInnerStyle: { padding: "10px", fontSize: "16px" },
    children: <span>Hover for custom styled tooltip</span>,
  },
};

export const ControlledVisibility: Story = {
  args: {
    title: "Controlled tooltip",
    open: true,
    children: <span>This tooltip is always visible</span>,
  },
};

export const WithCallback: Story = {
  args: {
    title: "Tooltip with callback",
    onOpenChange: (open) =>
      console.log(`Tooltip is ${open ? "open" : "closed"}`),
    children: <span>Hover to trigger callback</span>,
  },
};
