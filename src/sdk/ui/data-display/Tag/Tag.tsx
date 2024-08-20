import { Tag as AntdTag, TagProps as AntdTagProps } from "antd";

interface TagProps extends AntdTagProps {}

/**
 * Tag component
 *
 * This component is a wrapper around Ant Design's Tag component, providing a way to add tags
 * for categorizing or marking items.
 *
 * @component
 * @example
 * ```jsx
 * <Tag>Default Tag</Tag>
 * <Tag color="blue">Blue Tag</Tag>
 * <Tag closable onClose={() => console.log('Tag closed')}>Closable Tag</Tag>
 * ```
 *
 * @typedef {import('antd').TagProps} TagProps - The props type for the Tag component
 *
 * @param {TagProps} props - The properties passed to the component
 * @param {React.ReactNode} props.children - The content of the tag
 * @param {string} [props.color] - The color of the tag
 * @param {boolean} [props.closable] - Whether the Tag can be closed
 * @param {Function} [props.onClose] - Callback executed when tag is closed
 * @param {boolean} [props.visible] - Whether the Tag is visible
 * @param {string} [props.icon] - Custom icon for the tag
 *
 * @returns {React.ReactElement} The rendered Tag component
 *
 * @see https://ant.design/components/tag For more information about Ant Design Tag component
 */

export const Tag = (props: TagProps) => {
  return <AntdTag {...props} />;
};
