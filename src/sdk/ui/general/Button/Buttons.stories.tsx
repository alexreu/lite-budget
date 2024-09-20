import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "antd";
import { Search } from "lucide-react";
import { Button } from "./";

const meta: Meta<typeof Button> = {
  title: "UI/General/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Type: Story = {
  render: (args) => (
    <Flex gap="small">
      <Button {...args} type="primary">
        Primary
      </Button>
      <Button {...args}>Default</Button>
      <Button {...args} type="dashed">
        Dashed
      </Button>
      <Button {...args} type="link">
        Link
      </Button>
    </Flex>
  ),
};

export const Icon: Story = {
  render: (args) => (
    <Flex gap="small" vertical>
      <Flex gap="small" wrap>
        <Button type="primary" shape="circle" icon={<Search size={14} />} />
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<Search size={14} />}>
          Search
        </Button>
      </Flex>
      <Flex gap="small" wrap>
        <Button shape="circle" icon={<Search size={14} />} />
        <Button shape="circle">A</Button>
        <Button icon={<Search size={14} />}>Search</Button>
      </Flex>
      <Flex gap="small" wrap>
        <Button type="dashed" shape="circle" icon={<Search size={14} />} />
        <Button type="dashed" shape="circle">
          A
        </Button>
        <Button type="dashed" icon={<Search size={14} />}>
          Search
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Flex gap="small">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args}>Default</Button>
      <Button {...args} size="large">
        Large
      </Button>
    </Flex>
  ),
};

export const GhostButton: Story = {
  args: {
    children: "Button",
  },
  render: (args) => (
    <Flex gap="small">
      <Button {...args} type="primary" ghost />
      <Button {...args} ghost />
      <Button {...args} type="dashed" ghost />
      <Button {...args} danger ghost />
    </Flex>
  ),
};

export const Danger: Story = {
  render: (args) => (
    <Flex wrap gap="small">
      <Button {...args} type="primary" danger>
        Primary
      </Button>
      <Button {...args} danger>
        Default
      </Button>
      <Button {...args} type="dashed" danger>
        Dashed
      </Button>
      <Button {...args} type="text" danger>
        Text
      </Button>
      <Button {...args} type="link" danger>
        Link
      </Button>
    </Flex>
  ),
};
