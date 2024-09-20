import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "UI/Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Default Tag",
  },
};

export const ColoredTag: Story = {
  args: {
    color: "blue",
    children: "Blue Tag",
  },
};

export const ClosableTag: Story = {
  args: {
    closable: true,
    onClose: () => console.log("Tag closed"),
    children: "Closable Tag",
  },
};

export const CustomIcon: Story = {
  args: {
    icon: "🚀",
    children: "Tag with Icon",
  },
};

export const PresetColorTag: Story = {
  args: {
    color: "success",
    children: "Success Tag",
  },
};

export const MultipleColors: Story = {
  render: () => (
    <>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </>
  ),
};
