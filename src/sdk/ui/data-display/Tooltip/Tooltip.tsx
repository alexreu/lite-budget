import { Tooltip as AntdTooltip, TooltipProps as AntdTooltipProps } from "antd";
import { FC } from "react";

type TooltipProps = AntdTooltipProps;

/**
 * Tooltip component
 *
 * This component is a wrapper around Ant Design's Tooltip component, providing a way to display
 * informative text when users hover over, focus on, or tap an element.
 *
 * @component
 * @example
 * ```jsx
 * <Tooltip title="This is a tooltip">
 *   <span>Hover me</span>
 * </Tooltip>
 * ```
 *
 * @typedef {import('antd').TooltipProps} TooltipProps - The props type for the Tooltip component
 *
 * @param {TooltipProps} props - The properties passed to the component
 * @param {React.ReactNode} props.title - The content of the tooltip
 * @param {React.ReactNode} props.children - The element that triggers the tooltip
 * @param {string} [props.placement] - The position of the tooltip relative to the target
 * @param {boolean} [props.open] - Whether the tooltip is visible
 * @param {Function} [props.onOpenChange] - Callback when visibility of the tooltip is changed
 * @param {string} [props.color] - The background color of the tooltip
 * @param {object} [props.overlayInnerStyle] - The style object to customize tooltip content
 *
 * @returns {React.ReactElement} The rendered Tooltip component
 *
 * @see https://ant.design/components/tooltip For more information about Ant Design Tooltip component
 */

export const Tooltip: FC<TooltipProps> = (props) => {
  return <AntdTooltip {...props} />;
};
