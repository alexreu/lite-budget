import { Select as AntdSelect, SelectProps as AntdSelectProps } from "antd";
import { FC } from "react";

interface SelectProps extends AntdSelectProps {}

/**
 * Select Component
 *
 * This component is a wrapper around Ant Design's Select component.
 * It provides a dropdown menu for selecting one or multiple values from a list of options.
 *
 * Key features:
 * - Single and multiple selection modes
 * - Customizable options
 * - Search functionality
 * - Loading state
 * - Disabled state
 * - Placeholder text
 * - Clear selection option
 *
 * The Select component inherits all properties from Ant Design's Select component,
 * allowing for various configurations such as custom rendering of selected items,
 * option groups, and more.
 *
 * Usage:
 * import { Select } from './Select';
 *
 * <Select
 *   options={[
 *     { value: 'option1', label: 'Option 1' },
 *     { value: 'option2', label: 'Option 2' },
 *   ]}
 * />
 *
 * For more details on available props and usage, refer to Ant Design's Select documentation:
 * @see https://ant.design/components/select/
 */

export const Select: FC<SelectProps> = (props: SelectProps) => {
  return <AntdSelect {...props} />;
};
