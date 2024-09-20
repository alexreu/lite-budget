import {
  Popconfirm as AntdPopconfirm,
  PopconfirmProps as AntdPopconfirmProps,
} from "antd";
import { FC } from "react";

interface PopconfirmProps extends AntdPopconfirmProps {}

/**
 * Popconfirm component
 *
 * This component is a wrapper around Ant Design's Popconfirm component.
 * It provides a confirmation popup before executing a potentially dangerous action.
 *
 * @component
 * @example
 * ```tsx
 * <Popconfirm
 *   title="Are you sure you want to delete this item?"
 *   onConfirm={handleDelete}
 *   okText="Yes"
 *   cancelText="No"
 * >
 *   <Button danger>Delete</Button>
 * </Popconfirm>
 * ```
 *
 * @see {@link https://ant.design/components/popconfirm Ant Design Popconfirm} for more details on available props and usage.
 */

export const Popconfirm: FC<PopconfirmProps> = (props) => {
  return <AntdPopconfirm {...props} />;
};
