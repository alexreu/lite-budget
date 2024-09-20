import { Menu as AntdMenu, MenuProps as AntdMenuProps } from "antd";
import { FC } from "react";

interface MenuProps extends AntdMenuProps {}
export type MenuItem = Required<MenuProps>["items"][number];

/**
 * Menu Component
 *
 * This component is a wrapper around Ant Design's Menu component.
 * It provides a way to display a menu with various items and sub-menus.
 *
 * The Menu component inherits all properties from Ant Design's MenuProps.
 *
 * Usage:
 * import { Menu } from './Menu';
 *
 * <Menu items={menuItems} mode="horizontal" />
 *
 * For more details, refer to Ant Design's Menu documentation:
 * @see https://ant.design/components/menu/
 */
export const Menu: FC<MenuProps> = (props) => {
  return <AntdMenu {...props} />;
};
