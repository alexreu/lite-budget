import {
  Checkbox as AntdCheckbox,
  CheckboxProps as AntdCheckboxProps,
} from "antd";
import { CheckboxGroupProps as AntdCheckboxGroupProps } from "antd/lib/checkbox";
import { FC } from "react";

interface CheckboxProps extends AntdCheckboxProps {}
interface CheckboxGroupProps extends AntdCheckboxGroupProps {}

/**
 * Checkbox component that extends Ant Design's Checkbox functionality.
 *
 * This component combines properties from Ant Design's Checkbox types:
 * - Standard Checkbox
 * - Checkbox Group
 *
 * It provides a unified interface for both checkbox types, allowing for flexible usage.
 *
 * The component includes:
 * - Checkbox: For individual checkbox selection
 * - Checkbox.Group: For grouping multiple checkboxes
 *
 * Each sub-component maintains its specific props type for type safety and autocompletion.
 */

export const Checkbox: FC<CheckboxProps> & {
  Group: FC<CheckboxGroupProps>;
} = (props) => {
  return <AntdCheckbox {...props} />;
};

Checkbox.Group = AntdCheckbox.Group;
