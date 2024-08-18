import {
  AutoComplete as AntdAutoComplete,
  AutoCompleteProps as AntdAutoCompleteProps,
} from "antd";
import { FC } from "react";

export type AutoCompleteProps = AntdAutoCompleteProps;

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  return <AntdAutoComplete {...props} />;
};
