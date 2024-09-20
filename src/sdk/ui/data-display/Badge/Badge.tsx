import { Badge as AntdBadge, BadgeProps as AntdBadgeProps } from "antd";
import { RibbonProps as AntdBadgeRibbonProps } from "antd/es/badge/Ribbon";
import { FC } from "react";

interface BadgeProps extends AntdBadgeProps {}
interface BadgeRibbonProps extends AntdBadgeRibbonProps {}

/**
 * Badge Component
 *
 * This component is a wrapper around Ant Design's Badge component.
 * It provides a way to add status indicators or counters to other UI elements.
 *
 * Key features:
 * - Can display numbers, dots, or custom content
 * - Supports preset status colors and custom colors
 * - Configurable size (default or small)
 * - Can be standalone or wrap other components
 * - Includes a Ribbon subcomponent for corner ribbons
 *
 * The Badge component inherits all properties from Ant Design's Badge component,
 * allowing for various configurations such as custom styles, overflow count, and more.
 *
 * Usage:
 * import { Badge } from './Badge';
 *
 * <Badge count={5}>
 *   <Avatar shape="square" size="large" />
 * </Badge>
 *
 * <Badge dot>
 *   <NotificationOutlined style={{ fontSize: 16 }} />
 * </Badge>
 *
 * <Badge.Ribbon text="Ribbon">
 *   <Card title="Card title" size="small">Card content</Card>
 * </Badge.Ribbon>
 *
 * For more details on available props and usage, refer to Ant Design's Badge documentation:
 * @see https://ant.design/components/badge/
 */

export const Badge: FC<BadgeProps> & {
  Ribbon: FC<BadgeRibbonProps>;
} = (props: BadgeProps) => {
  return <AntdBadge {...props} />;
};

Badge.Ribbon = AntdBadge.Ribbon;
