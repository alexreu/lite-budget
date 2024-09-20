import { Switch as AntdSwitch, SwitchProps as AntdSwitchProps } from "antd";
import { FC } from "react";

interface SwitchProps extends AntdSwitchProps {}

/**
 * Switch Component
 *
 * This component is a wrapper around Ant Design's Switch component.
 * It provides a toggle switch for switching between two states.
 *
 * Key features:
 * - Simple on/off states
 * - Customizable checked and unchecked text/icons
 * - Loading state
 * - Disabled state
 * - Size variants (default and small)
 *
 * The Switch component inherits all properties from Ant Design's Switch component,
 * allowing for various configurations such as custom colors, loading state, and more.
 *
 * Usage:
 * import { Switch } from './Switch';
 *
 * <Switch defaultChecked />
 *
 * For more details on available props and usage, refer to Ant Design's Switch documentation:
 * @see https://ant.design/components/switch/
 */

export const Switch: FC<SwitchProps> = (props) => {
  return <AntdSwitch {...props} />;
};
