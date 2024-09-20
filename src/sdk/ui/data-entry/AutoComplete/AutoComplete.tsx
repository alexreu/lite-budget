import {
  AutoComplete as AntdAutoComplete,
  AutoCompleteProps as AntdAutoCompleteProps,
} from "antd";
import { FC } from "react";

interface AutoCompleteProps extends AntdAutoCompleteProps {}

/**
 * AutoComplete component that extends Ant Design's AutoComplete functionality.
 *
 * This component wraps the Ant Design AutoComplete component, providing all its
 * features and props while allowing for potential future customization.
 *
 * Key features:
 * - Provides suggestions based on user input
 * - Supports custom rendering of input and dropdown menu
 * - Allows for flexible data sources (array of strings or objects)
 * - Customizable filtering and sorting of options
 *
 * The component maintains type safety by extending the original Ant Design
 * AutoCompleteProps, ensuring full compatibility and proper TypeScript support.
 */

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  return <AntdAutoComplete {...props} />;
};
