import {
  Checkbox as AntdCheckbox,
  CheckboxProps as AntdCheckboxProps,
} from "antd";
import { CheckboxGroupProps as AntdCheckboxGroupProps } from "antd/lib/checkbox";
import { FC } from "react";

const { Group: AntdCheckboxGroup } = AntdCheckbox;

interface CheckboxProps extends AntdCheckboxProps {}
interface CheckboxGroupProps extends AntdCheckboxGroupProps {}

export const Checkbox: FC<CheckboxProps> & {
  Group: FC<CheckboxGroupProps>;
} = (props) => {
  return <AntdCheckbox {...props} />;
};

Checkbox.Group = AntdCheckbox.Group;
