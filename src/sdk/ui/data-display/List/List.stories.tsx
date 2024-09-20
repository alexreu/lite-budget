import { Avatar } from "@/sdk/ui/data-display/Avatar";
import { Empty } from "@/sdk/ui/data-display/Empty";
import { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";

const meta: Meta<typeof List> = {
  title: "UI/Data Display/List",
  component: List,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof List>;

const data = [
  {
    title: "Ant Design Title 1",
    description: "Ant Design Description 1",
  },
  {
    title: "Ant Design Title 2",
    description: "Ant Design Description 2",
  },
  {
    title: "Ant Design Title 3",
    description: "Ant Design Description 3",
  },
  {
    title: "Ant Design Title 4",
    description: "Ant Design Description 4",
  },
];

export const Default: Story = {
  args: {
    dataSource: data,
    renderItem: (item: any) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title={item.title}
          description={item.description}
        />
      </List.Item>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    ...Default.args,
    header: <div>Header</div>,
    footer: <div>Footer</div>,
  },
};

export const WithPagination: Story = {
  args: {
    ...Default.args,
    pagination: {
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    },
  },
};

export const WithLoadMore: Story = {
  args: {
    ...Default.args,
    loadMore: (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        Loading more
      </div>
    ),
  },
};

export const EmptyList: Story = {
  args: {
    dataSource: [],
    renderItem: () => null,
    locale: {
      emptyText: <Empty description="No data" />,
    },
  },
};
