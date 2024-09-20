import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";
import { FC } from "react";

interface ButtonProps extends AntdButtonProps {}

/**
 * Button component that wraps Ant Design's Button.
 * It accepts all props that Ant Design's Button accepts.
 */
export const Button: FC<ButtonProps> = (props) => {
  return <AntdButton {...props} />;
};
