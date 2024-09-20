import {
  Pagination as AntdPagination,
  PaginationProps as AntdPaginationProps,
} from "antd";
import { FC } from "react";

interface PaginationProps extends AntdPaginationProps {}

/**
 * Pagination Component
 *
 * This component is a wrapper around Ant Design's Pagination component.
 * It provides a way to handle long lists of content across multiple pages.
 *
 * The Pagination component inherits all properties from Ant Design's PaginationProps.
 *
 * Usage:
 * import { Pagination } from './Pagination';
 *
 * <Pagination
 *   total={100}
 *   current={1}
 *   pageSize={10}
 *   onChange={(page) => console.log(page)}
 * />
 *
 * For more details, refer to Ant Design's Pagination documentation:
 * @see https://ant.design/components/pagination/
 */

export const Pagination: FC<PaginationProps> = (props) => {
  return <AntdPagination {...props} />;
};
