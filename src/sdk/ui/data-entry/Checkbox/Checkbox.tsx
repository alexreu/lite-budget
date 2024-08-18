import {
  Checkbox as AntdCheckbox,
  CheckboxProps as AntdCheckboxProps,
} from "antd";
import { FC } from "react";

const { Group: AntdCheckboxGroup } = AntdCheckbox;

export interface CheckboxProps extends AntdCheckboxProps {}

export const Checkbox: FC<CheckboxProps> = (props) => {
  return <AntdCheckbox {...props} />;
};

Checkbox.Group = AntdCheckbox.Group;
