import { Result as AntdResult, ResultProps as AntdResultProps } from "antd";
import { FC } from "react";

export type ResultProps = AntdResultProps;

/**
 * Result component
 *
 * This component is a wrapper around Ant Design's Result component.
 * It is used to display a result page for feedback after completing a series of operations.
 *
 * @component
 * @example
 * ```tsx
 * <Result
 *   status="success"
 *   title="Successfully Purchased Cloud Server ECS!"
 *   subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
 *   extra={[
 *     <Button type="primary" key="console">
 *       Go Console
 *     </Button>,
 *     <Button key="buy">Buy Again</Button>,
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Result
 *   status="error"
 *   title="Submission Failed"
 *   subTitle="Please check and modify the following information before resubmitting."
 *   extra={[
 *     <Button type="primary" key="console">
 *       Go Console
 *     </Button>,
 *     <Button key="buy">Buy Again</Button>,
 *   ]}
 * >
 *   <div>
 *     <Paragraph>
 *       <Text
 *         strong
 *         style={{
 *           fontSize: 16,
 *         }}
 *       >
 *         The content you submitted has the following error:
 *       </Text>
 *     </Paragraph>
 *     <Paragraph>
 *       <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been frozen
 *       <a>Thaw immediately &gt;</a>
 *     </Paragraph>
 *     <Paragraph>
 *       <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet eligible to apply
 *       <a>Apply Unlock &gt;</a>
 *     </Paragraph>
 *   </div>
 * </Result>
 * ```
 *
 * @see {@link https://ant.design/components/result Ant Design Result} for more details on available props and usage.
 */

export const Result: FC<ResultProps> = (props) => {
  return <AntdResult {...props} />;
};
