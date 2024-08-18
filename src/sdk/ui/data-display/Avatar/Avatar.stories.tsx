import { Meta, StoryObj } from "@storybook/react";
import { User } from "lucide-react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://example.com/avatar.jpg",
    children: "A",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <User />,
  },
};

export const WithText: Story = {
  args: {
    children: "U",
  },
};

export const CustomSize: Story = {
  args: {
    size: 64,
    children: "Custom",
  },
};

export const Square: Story = {
  args: {
    shape: "square",
    src: "https://example.com/avatar.jpg",
    children: "A",
  },
};

export const WithFallback: Story = {
  args: {
    src: "https://broken-link.jpg",
    children: "A",
  },
};

export const Group: Story = {
  render: () => (
    <Avatar.Group>
      <Avatar src="https://example.com/avatar1.jpg">A</Avatar>
      <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
      <Avatar style={{ backgroundColor: "#87d068" }} icon={<User />} />
    </Avatar.Group>
  ),
};
