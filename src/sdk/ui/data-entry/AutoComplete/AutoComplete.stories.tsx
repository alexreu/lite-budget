import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete } from "./AutoComplete";

const meta: Meta<typeof AutoComplete> = {
  component: AutoComplete,
  title: "UI/Data Entry/AutoComplete",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

export const Basic: Story = {
  args: {
    options: [{ value: "Apple" }, { value: "Banana" }, { value: "Cherry" }],
    style: { width: 200 },
    placeholder: 'Try typing "a"',
  },
};

export const CustomValue: Story = {
  args: {
    ...Basic.args,
    options: [
      { value: "Apple", label: "🍎 Apple" },
      { value: "Banana", label: "🍌 Banana" },
      { value: "Cherry", label: "🍒 Cherry" },
    ],
  },
};

export const DisabledOption: Story = {
  args: {
    ...Basic.args,
    options: [
      { value: "Apple" },
      { value: "Banana", disabled: true },
      { value: "Cherry" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};

export const CustomizeInput: Story = {
  args: {
    ...Basic.args,
    children: <textarea style={{ height: 50 }} />,
  },
};

export const LimitedOptions: Story = {
  args: {
    ...Basic.args,
    options: Array.from({ length: 100 }, (_, i) => ({ value: `Option ${i}` })),
    filterOption: (inputValue, option) =>
      option?.value
        ?.toString()
        .toUpperCase()
        .indexOf(inputValue.toUpperCase()) !== -1,
    style: { width: 200 },
  },
};
