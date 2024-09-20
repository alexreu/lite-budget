import { Spin as AntdSpin, SpinProps as AntdSpinProps } from "antd";
import { FC } from "react";

export type SpinProps = AntdSpinProps;

/**
 * Spin component
 *
 * This component is a wrapper around Ant Design's Spin component.
 * It is used to display a loading state or provide a visual cue that a process is ongoing.
 *
 * @component
 * @example
 * ```tsx
 * <Spin />
 * ```
 *
 * @example
 * ```tsx
 * <Spin tip="Loading...">
 *   <div>Content</div>
 * </Spin>
 * ```
 *
 * @example
 * ```tsx
 * <Spin size="large" />
 * ```
 *
 * The Spin component supports various props to customize its appearance and behavior:
 * - `size`: Sets the size of the spinner (small, default, large)
 * - `spinning`: Specifies whether the spinner is visible
 * - `tip`: Customizes the loading text beneath the spinner
 * - `delay`: Sets a delay in milliseconds before the loading indicator appears
 * - `indicator`: Provides a custom spinner indicator
 *
 * @see {@link https://ant.design/components/spin Ant Design Spin} for more details on available props and usage.
 */

export const Spin: FC<SpinProps> = (props) => {
  return <AntdSpin {...props} />;
};
