import { Table as AntdTable, TableProps as AntdTableProps } from "antd";
import { FC } from "react";

export type TableProps = AntdTableProps;

/**
 * Table component
 *
 * This component is a wrapper around Ant Design's Table component, providing
 * a customizable and feature-rich table for displaying data.
 *
 * @component
 * @see https://ant.design/components/table For the Ant Design Table documentation
 *
 * @example
 * ```jsx
 * import { Table } from 'your-library-name';
 *
 * const columns = [
 *   { title: 'Name', dataIndex: 'name', key: 'name' },
 *   { title: 'Age', dataIndex: 'age', key: 'age' },
 * ];
 *
 * const data = [
 *   { key: 1, name: 'John Brown', age: 32 },
 *   { key: 2, name: 'Jim Green', age: 42 },
 * ];
 *
 * <Table columns={columns} dataSource={data} />
 * ```
 *
 * @typedef {import('antd').TableProps} TableProps - The props type for the Table component
 * @extends {FC<TableProps>}
 */

export const Table: FC<TableProps> = (props) => {
  return <AntdTable {...props} />;
};
