import { Alert as AntdAlert, AlertProps as AntdAlertProps } from "antd";
import { FC } from "react";

interface AlertProps extends AntdAlertProps {}

/**
 * Alert component
 *
 * This component is a wrapper around Ant Design's Alert component, providing a way to display
 * important messages or feedback to users.
 *
 * @component
 * @example
 * ```jsx
 * <Alert message="Success" type="success" />
 * <Alert message="Warning" type="warning" showIcon />
 * <Alert message="Error" description="Detailed error description" type="error" />
 * ```
 *
 * @typedef {import('antd').AlertProps} AlertProps - The props type for the Alert component
 *
 * @param {AlertProps} props - The properties passed to the component
 * @param {React.ReactNode} props.message - The content of the Alert
 * @param {React.ReactNode} [props.description] - Additional details about the Alert
 * @param {string} [props.type] - The type of Alert (success, info, warning, error)
 * @param {boolean} [props.showIcon] - Whether to show an icon
 * @param {boolean} [props.closable] - Whether the Alert can be closed
 * @param {Function} [props.onClose] - Callback when the close button is clicked
 * @param {React.ReactNode} [props.icon] - Custom icon
 * @param {string} [props.closeText] - Custom close text
 *
 * @returns {React.ReactElement} The rendered Alert component
 *
 * @see https://ant.design/components/alert For more information about Ant Design Alert component
 */

export const Alert: FC<AlertProps> = (props) => {
  return <AntdAlert {...props} />;
};
