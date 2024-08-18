import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "UI/Data Entry/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    style: { width: 120 },
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    mode: "multiple",
    style: { width: 300 },
  },
};

export const Tags: Story = {
  args: {
    ...Default.args,
    mode: "tags",
    style: { width: 300 },
  },
};

export const CustomPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: "Select an option",
  },
};
