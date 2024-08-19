import {
  Statistic as AntdStatistic,
  StatisticProps as AntdStatisticProps,
} from "antd";
import { FC } from "react";

interface StatisticProps extends AntdStatisticProps {}

/**
 * Statistic Component
 *
 * A component that displays statistical information.
 * This component is a wrapper around Ant Design's Statistic component, providing all its functionality.
 *
 * @component
 * @example
 * <Statistic title="Active Users" value={112893} />
 *
 * @typedef {Object} StatisticProps
 * @extends {AntdStatisticProps}
 *
 * @see https://ant.design/components/statistic For more information about Ant Design Statistic component
 */

export const Statistic: FC<StatisticProps> = (props) => {
  return <AntdStatistic {...props} />;
};
