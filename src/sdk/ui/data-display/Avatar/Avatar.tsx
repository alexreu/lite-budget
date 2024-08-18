import { Avatar as AntdAvatar, AvatarProps as AntdAvatarProps } from "antd";
import { GroupProps as AntdAvatarGroupProps } from "antd/es/avatar";
import { FC } from "react";

interface AvatarProps extends AntdAvatarProps {}
interface AvatarGroupProps extends AntdAvatarGroupProps {}

/**
 * Avatar Component
 *
 * This component is a wrapper around Ant Design's Avatar component.
 * It provides a customizable avatar for displaying user profile pictures or icons.
 *
 * Key features:
 * - Supports image, icon, or text content
 * - Customizable size (large, default, small, or custom number)
 * - Shape options (circle or square)
 * - Fallback mechanism when image loading fails
 *
 * The Avatar component inherits all properties from Ant Design's Avatar component,
 * allowing for various configurations such as custom colors, sizes, and more.
 *
 * Usage:
 * import { Avatar } from './Avatar';
 *
 * <Avatar src="https://example.com/avatar.jpg" />
 * <Avatar icon={<UserOutlined />} />
 * <Avatar>U</Avatar>
 *
 * For more details on available props and usage, refer to Ant Design's Avatar documentation:
 * @see https://ant.design/components/avatar/
 */

export const Avatar: FC<AvatarProps> & {
  Group: FC<AvatarGroupProps>;
} = (props: AvatarProps) => {
  return <AntdAvatar {...props} />;
};

Avatar.Group = AntdAvatar.Group;
