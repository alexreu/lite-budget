import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "UI/Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    message: "This is an informational alert",
    type: "info",
  },
};

export const Success: Story = {
  args: {
    message: "Operation completed successfully",
    type: "success",
    showIcon: true,
  },
};

export const Warning: Story = {
  args: {
    message: "Warning: This action cannot be undone",
    type: "warning",
    showIcon: true,
  },
};

export const Error: Story = {
  args: {
    message: "An error occurred",
    description: "Please try again later or contact support.",
    type: "error",
    showIcon: true,
  },
};

export const Closable: Story = {
  args: {
    message: "This alert can be closed",
    type: "info",
    closable: true,
    onClose: () => console.log("Alert closed"),
  },
};

export const CustomIcon: Story = {
  args: {
    message: "Alert with custom icon",
    icon: (
      <span role="img" aria-label="bell">
        🔔
      </span>
    ),
    type: "info",
  },
};

export const CustomCloseText: Story = {
  args: {
    message: "Alert with custom close text",
    type: "info",
    closable: true,
    closeText: "Dismiss",
  },
};

export const Banner: Story = {
  args: {
    message: "This is a banner alert",
    banner: true,
  },
};
