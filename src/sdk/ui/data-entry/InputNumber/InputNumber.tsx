import {
  InputNumber as AntdInputNumber,
  InputNumberProps as AntdInputNumberProps,
} from "antd";
import { FC } from "react";

interface InputNumberProps extends AntdInputNumberProps {}

/**
 * InputNumber Component
 *
 * This component is a wrapper around Ant Design's InputNumber component.
 * It provides a numeric input field that allows users to enter a number or use up/down buttons to adjust the value.
 *
 * The InputNumber component inherits all properties from Ant Design's InputNumberProps.
 *
 * Usage:
 * import { InputNumber } from './InputNumber';
 *
 * <InputNumber
 *   min={1}
 *   max={10}
 *   defaultValue={3}
 *   onChange={(value) => console.log(value)}
 * />
 *
 * For more details, refer to Ant Design's InputNumber documentation:
 * @see https://ant.design/components/input-number/
 */

export const InputNumber: FC<InputNumberProps> = (props) => {
  return <AntdInputNumber {...props} />;
};
