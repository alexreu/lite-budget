import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Data Entry/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Default input",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithPrefix: Story = {
  args: {
    placeholder: "Input with prefix",
    prefix: "@",
  },
};

export const WithSuffix: Story = {
  args: {
    placeholder: "Input with suffix",
    suffix: ".com",
  },
};

export const Search: Story = {
  args: {
    placeholder: "Search input",
  },
  render: (args) => <Input.Search {...args} />,
};

export const TextArea: Story = {
  args: {
    placeholder: "TextArea input",
  },
  render: (args) => <Input.TextArea rows={4} />,
};

export const Password: Story = {
  args: {
    placeholder: "Password input",
  },
  render: (args) => <Input.Password {...args} />,
};

export const OTP: Story = {
  render: (args) => <Input.OTP length={6} />,
};
