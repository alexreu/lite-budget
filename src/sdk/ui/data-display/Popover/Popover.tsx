import { Popover as AntdPopover, PopoverProps as AntdPopoverProps } from "antd";
import { FC } from "react";

interface PopoverProps extends AntdPopoverProps {}

/**
 * Popover Component
 *
 * A component that creates a small overlay content when hovering or clicking on a trigger element.
 * This component is a wrapper around Ant Design's Popover component, providing all its functionality.
 *
 * @component
 * @example
 * <Popover content={<div>Popover content</div>} title="Popover Title">
 *   <Button>Hover me</Button>
 * </Popover>
 *
 * @typedef {Object} PopoverProps
 * @extends {AntdPopoverProps}
 *
 * @see https://ant.design/components/popover For more information about Ant Design Popover component
 */

export const Popover: FC<PopoverProps> = (props) => {
  return <AntdPopover {...props} />;
};
