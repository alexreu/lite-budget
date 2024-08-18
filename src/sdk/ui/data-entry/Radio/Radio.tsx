import {
  Radio as AntdRadio,
  RadioGroupProps as AntdRadioGroupProps,
  RadioProps as AntdRadioProps,
} from "antd";
import { RadioButtonProps as AntdRadioButtonProps } from "antd/es/radio/radioButton";
import { FC } from "react";

interface RadioProps extends AntdRadioProps {}
interface RadioGroupProps extends AntdRadioGroupProps {}
interface RadioButtonProps extends AntdRadioButtonProps {}

/**
 * Radio Component
 *
 * This component is a wrapper around Ant Design's Radio component.
 * It provides a customizable radio button for selecting a single option from a list.
 *
 * The Radio component includes three sub-components:
 * - Radio: The basic radio button
 * - Radio.Group: A group of radio buttons
 * - Radio.Button: A radio button styled as a button
 *
 * Usage:
 * import { Radio } from './Radio';
 *
 * <Radio>Option</Radio>
 * <Radio.Group options={['A', 'B', 'C']} />
 * <Radio.Button value="option">Option</Radio.Button>
 *
 * The Radio component and its sub-components inherit all properties from their respective Ant Design counterparts.
 *
 * For more details, refer to Ant Design's Radio documentation:
 * @see https://ant.design/components/radio/
 */

export const Radio: FC<RadioProps> & {
  Group: FC<RadioGroupProps>;
  Button: FC<RadioButtonProps>;
} = (props) => {
  return <AntdRadio {...props} />;
};

Radio.Group = AntdRadio.Group;
Radio.Button = AntdRadio.Button;
