import { Button } from "@/sdk/ui/general/Button";
import { Meta, StoryObj } from "@storybook/react";
import { Empty } from "./Empty";

const meta: Meta<typeof Empty> = {
  title: "UI/Data Display/Empty",
  component: Empty,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: {},
};

export const WithDescription: Story = {
  args: {
    description: "No data available",
  },
};

export const WithCustomImage: Story = {
  args: {
    image: "https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",
    imageStyle: {
      height: 60,
    },
    description: "Custom image",
  },
};

export const WithoutImage: Story = {
  args: {
    image: null,
    description: "No image",
  },
};

export const WithCustomContent: Story = {
  args: {
    description: "Customized content",
    children: (
      <Button type="primary" style={{ marginTop: 16 }}>
        Create Now
      </Button>
    ),
  },
};
