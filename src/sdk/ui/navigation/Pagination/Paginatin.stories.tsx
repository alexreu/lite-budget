import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "UI/Navigation/Pagination",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  args: {
    total: 50,
    defaultCurrent: 1,
  },
};

export const WithSizeChanger: Story = {
  args: {
    ...Basic.args,
    showSizeChanger: true,
  },
};

export const WithQuickJumper: Story = {
  args: {
    ...Basic.args,
    showQuickJumper: true,
  },
};

export const WithTotalDisplay: Story = {
  args: {
    ...Basic.args,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  },
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};

export const CustomPageSize: Story = {
  args: {
    ...Basic.args,
    defaultPageSize: 20,
    total: 200,
  },
};

export const SimpleMode: Story = {
  args: {
    ...Basic.args,
    simple: true,
  },
};
