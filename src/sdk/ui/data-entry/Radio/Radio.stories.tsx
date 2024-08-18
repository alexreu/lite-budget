import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "UI/Data Entry/Radio",
  component: Radio,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    children: "Radio",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Radio",
  },
};

export const Group: Story = {
  render: () => (
    <Radio.Group>
      <Radio value={1}>Option 1</Radio>
      <Radio value={2}>Option 2</Radio>
      <Radio value={3}>Option 3</Radio>
    </Radio.Group>
  ),
};

export const GroupWithOptions: Story = {
  render: () => (
    <Radio.Group
      options={[
        { label: "Apple", value: "apple" },
        { label: "Pear", value: "pear" },
        { label: "Orange", value: "orange" },
      ]}
    />
  ),
};

export const Button: Story = {
  render: () => (
    <Radio.Group>
      <Radio.Button value="a">London</Radio.Button>
      <Radio.Button value="b">New York</Radio.Button>
      <Radio.Button value="c">Paris</Radio.Button>
      <Radio.Button value="d">Tokyo</Radio.Button>
    </Radio.Group>
  ),
};
