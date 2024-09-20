import { Modal as AntdModal, ModalProps as AntdModalProps } from "antd";
import { FC } from "react";

interface ModalProps extends AntdModalProps {}

/**
 * Modal component
 *
 * This component is a wrapper around Ant Design's Modal component.
 * It provides a customizable modal dialog for displaying content that requires user interaction.
 *
 * @component
 * @example
 * ```tsx
 * <Modal
 *   title="Example Modal"
 *   open={isModalOpen}
 *   onOk={handleOk}
 *   onCancel={handleCancel}
 * >
 *   <p>Modal content goes here</p>
 * </Modal>
 * ```
 *
 * @see {@link https://ant.design/components/modal Ant Design Modal} for more details on available props and usage.
 */

export const Modal: FC<ModalProps> = (props) => {
  return <AntdModal {...props} />;
};
