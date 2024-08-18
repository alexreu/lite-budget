import {
  Dropdown as AntdDropdown,
  DropdownProps as AntdDropdownProps,
} from "antd";
import { FC } from "react";

interface DropdownProps extends AntdDropdownProps {}
/**
 * Dropdown Component
 *
 * This component is a wrapper around Ant Design's Dropdown component.
 * It provides a way to display a dropdown menu triggered by clicking or hovering over an element.
 *
 * The Dropdown component inherits all properties from Ant Design's DropdownProps.
 *
 * Usage:
 * import { Dropdown } from './Dropdown';
 *
 * <Dropdown menu={menuItems} placement="bottomLeft">
 *   <Button>Hover me</Button>
 * </Dropdown>
 *
 * For more details, refer to Ant Design's Dropdown documentation:
 * @see https://ant.design/components/dropdown/
 */

export const Dropdown: FC<DropdownProps> = (props) => {
  return <AntdDropdown {...props} />;
};
