import { Input as AntdInput } from "antd";
import { OTPProps as AntdOTPProps } from "antd/es/input/OTP";
import {
  InputProps as AntdInputProps,
  PasswordProps as AntdPasswordProps,
  SearchProps as AntdSearchProps,
  TextAreaProps as AntdTextAreaProps,
} from "antd/lib/input";
import { FC } from "react";

interface InputProps extends AntdInputProps {}
interface SearchProps extends AntdSearchProps {}
interface TextAreaProps extends AntdTextAreaProps {}
interface PasswordProps extends AntdPasswordProps {}
interface OTPProps extends AntdOTPProps {}

/**
 * Input component that extends Ant Design's Input functionality.
 *
 * This component combines properties from various Ant Design input types:
 * - Standard Input
 * - Search Input
 * - TextArea
 * - Password Input
 * - OTP (One-Time Password) Input
 *
 * It provides a unified interface for all these input types, allowing for flexible usage.
 */

export const Input: FC<InputProps> & {
  TextArea: FC<TextAreaProps>;
  Search: FC<SearchProps>;
  Password: FC<PasswordProps>;
  OTP: FC<OTPProps>;
} = (props) => {
  return <AntdInput {...props} />;
};

Input.TextArea = AntdInput.TextArea;
Input.Search = AntdInput.Search;
Input.Password = AntdInput.Password;
Input.OTP = AntdInput.OTP;
