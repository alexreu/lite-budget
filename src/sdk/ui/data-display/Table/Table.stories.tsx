import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "UI/Data Display/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data for the table
const dataSource = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Bridge Street",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 York Street",
  },
];

// Sample columns for the table
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

// Basic Table story
export const Basic: Story = {
  args: {
    dataSource: dataSource,
    columns: columns,
  },
};

// Table with pagination
export const WithPagination: Story = {
  args: {
    ...Basic.args,
    pagination: { pageSize: 2 },
  },
};

// Table with sorting
export const WithSorting: Story = {
  args: {
    ...Basic.args,
    columns: columns.map((col) => ({
      ...col,
      sorter: (a: any, b: any) => {
        if (typeof a[col.dataIndex] === "string") {
          return a[col.dataIndex].localeCompare(b[col.dataIndex]);
        }
        return a[col.dataIndex] - b[col.dataIndex];
      },
    })),
  },
};

// Table with custom rendering
export const WithCustomRendering: Story = {
  args: {
    ...Basic.args,
    columns: [
      ...columns,
      {
        title: "Action",
        key: "action",
        render: (_: any, record: any) => <a>Delete {record.name}</a>,
      },
    ],
  },
};

// Table with loading state
export const Loading: Story = {
  args: {
    ...Basic.args,
    loading: true,
  },
};

// Table with selection
export const WithSelection: Story = {
  args: {
    ...Basic.args,
    rowSelection: {
      type: "checkbox",
    },
  },
};
