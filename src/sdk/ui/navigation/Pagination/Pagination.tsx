import {
  Pagination as AntdPagination,
  PaginationProps as AntdPaginationProps,
} from "antd";
import { FC } from "react";

interface PaginationProps extends AntdPaginationProps {}

export const Pagination: FC<PaginationProps> = (props) => {
  return <AntdPagination {...props} />;
};
