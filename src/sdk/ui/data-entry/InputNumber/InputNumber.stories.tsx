import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "antd";
import { InputNumber } from "./InputNumber";

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
  title: "UI/Data Entry/InputNumber",
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    defaultValue: { control: "number" },
    disabled: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["large", "middle", "small"],
    },
    addonBefore: { control: "text" },
    addonAfter: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {
    min: 1,
    max: 10,
    defaultValue: 3,
  },
};

export const WithStep: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 30,
  },
};

export const Disabled: Story = {
  args: {
    min: 1,
    max: 10,
    defaultValue: 5,
    disabled: true,
  },
};

export const WithSizes: Story = {
  render: () => (
    <Flex gap="small" vertical>
      <InputNumber size="large" min={1} max={100000} defaultValue={3} />
      <InputNumber min={1} max={100000} defaultValue={3} />
      <InputNumber size="small" min={1} max={100000} defaultValue={3} />
    </Flex>
  ),
};

export const WithAddons: Story = {
  args: {
    min: 1,
    max: 100,
    defaultValue: 50,
    addonBefore: "$",
    addonAfter: ".00",
  },
};
