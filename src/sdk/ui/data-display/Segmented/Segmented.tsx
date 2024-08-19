import {
  Segmented as AntdSegmented,
  SegmentedProps as AntdSegmentedProps,
} from "antd";
import { FC } from "react";

interface SegmentedProps extends AntdSegmentedProps {}

/**
 * Segmented Component
 *
 * A component that provides a set of mutually exclusive options for users to select from.
 * This component is a wrapper around Ant Design's Segmented component, providing all its functionality.
 *
 * @component
 * @example
 * <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
 *
 * @typedef {Object} SegmentedProps
 * @extends {AntdSegmentedProps}
 *
 * @see https://ant.design/components/segmented For more information about Ant Design Segmented component
 */

export const Segmented: FC<SegmentedProps> = (props) => {
  return <AntdSegmented {...props} />;
};
