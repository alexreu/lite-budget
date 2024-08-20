import {
  Progress as AntdProgress,
  ProgressProps as AntdProgressProps,
} from "antd";
import { FC } from "react";

export type ProgressProps = AntdProgressProps;

/**
 * Progress component
 *
 * This component is a wrapper around Ant Design's Progress component.
 * It displays a progress bar or circle to indicate the completion status of an operation.
 *
 * @component
 * @example
 * ```tsx
 * <Progress percent={75} />
 * ```
 *
 * @example
 * ```tsx
 * <Progress type="circle" percent={30} />
 * ```
 *
 * @example
 * ```tsx
 * <Progress type="dashboard" percent={90} />
 * ```
 *
 * @see {@link https://ant.design/components/progress Ant Design Progress} for more details on available props and usage.
 */

export const Progress: FC<ProgressProps> = (props) => {
  return <AntdProgress {...props} />;
};
