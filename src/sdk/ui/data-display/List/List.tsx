import { List as AntdList, ListProps as AntdListProps } from "antd";
import {
  ListItemMetaProps as AntdListItemMetaProps,
  ListItemProps as AntdListItemProps,
} from "antd/es/list/Item";
import { FC } from "react";

interface ListProps<T> extends AntdListProps<T> {}
interface ListItemProps extends AntdListItemProps {}
interface ListItemMetaProps extends AntdListItemMetaProps {}

/**
 * List Component
 *
 * A flexible and powerful component for displaying lists of items.
 * This component is a wrapper around Ant Design's List component, providing all its functionality.
 *
 * @component
 * @example
 * <List
 *   dataSource={data}
 *   renderItem={(item) => (
 *     <List.Item>
 *       <List.Item.Meta
 *         avatar={<Avatar src={item.avatar} />}
 *         title={item.title}
 *         description={item.description}
 *       />
 *     </List.Item>
 *   )}
 * />
 *
 * @typedef {Object} ListProps
 * @extends {AntdListProps<T>}
 *
 * @typedef {Object} ListItemProps
 * @extends {AntdListItemProps}
 *
 * @typedef {Object} ListItemMetaProps
 * @extends {AntdListItemMetaProps}
 *
 * @see https://ant.design/components/list For more information about Ant Design List component
 */

export const List: FC<ListProps<any>> & {
  Item: FC<ListItemProps> & {
    Meta: FC<ListItemMetaProps>;
  };
} = Object.assign((props: ListProps<any>) => {
  return <AntdList {...props} />;
});

List.Item = AntdList.Item;
List.Item.Meta = AntdList.Item.Meta;
