import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../general/Button";
import { Modal } from "./Modal";

export default {
  title: "UI/Feedback/Modal",
  tags: ["autodocs"],
  component: Modal,
  argTypes: {
    title: { control: "text" },
    open: { control: "boolean" },
    okText: { control: "text" },
    cancelText: { control: "text" },
    width: { control: "number" },
    centered: { control: "boolean" },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Open Modal</Button>
      <Modal
        {...args}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>This is the content of the modal</p>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Default Modal",
  okText: "OK",
  cancelText: "Cancel",
};

export const CustomizedModal = Template.bind({});
CustomizedModal.args = {
  title: "Customized Modal",
  okText: "Confirm",
  cancelText: "Close",
  width: 600,
  centered: true,
};

export const ConfirmationModal = Template.bind({});
ConfirmationModal.args = {
  title: "Confirm Action",
  okText: "Yes, proceed",
  cancelText: "No, cancel",
  okType: "danger",
};
