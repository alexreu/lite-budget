import { Empty as AntdEmpty, EmptyProps as AntdEmptyProps } from "antd";
import { FC } from "react";

interface EmptyProps extends AntdEmptyProps {}

/**
 * Empty component
 *
 * This component is a wrapper around Ant Design's Empty component.
 * It's used to display an empty state when there is no data to show.
 *
 * @component
 * @param {EmptyProps} props - The properties that can be passed to the Empty component.
 * @returns {JSX.Element} The rendered Empty component.
 *
 * @see https://ant.design/components/empty For more information about the Ant Design Empty component.
 */

export const Empty: FC<EmptyProps> = (props) => {
  return <AntdEmpty {...props} />;
};
