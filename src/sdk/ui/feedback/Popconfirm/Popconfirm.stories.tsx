import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../general/Button";
import { Popconfirm } from "./Popconfirm";

export default {
  title: "UI/Feedback/Popconfirm",
  tags: ["autodocs"],
  component: Popconfirm,
  argTypes: {
    title: { control: "text" },
    okText: { control: "text" },
    cancelText: { control: "text" },
    placement: {
      control: "select",
      options: [
        "top",
        "left",
        "right",
        "bottom",
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight",
        "leftTop",
        "leftBottom",
        "rightTop",
        "rightBottom",
      ],
    },
  },
} as Meta<typeof Popconfirm>;

const Template: StoryFn<typeof Popconfirm> = (args) => {
  const [visible, setVisible] = useState(false);

  const handleConfirm = () => {
    console.log("Confirmed");
    setVisible(false);
  };

  const handleCancel = () => {
    console.log("Cancelled");
    setVisible(false);
  };

  return (
    <Popconfirm
      {...args}
      visible={visible}
      onVisibleChange={setVisible}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    >
      <Button onClick={() => setVisible(true)}>Delete</Button>
    </Popconfirm>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Are you sure you want to delete this item?",
  okText: "Yes",
  cancelText: "No",
};

export const CustomPlacement = Template.bind({});
CustomPlacement.args = {
  ...Default.args,
  placement: "topRight",
};

export const DangerConfirmation = Template.bind({});
DangerConfirmation.args = {
  ...Default.args,
  okText: "Delete",
  okType: "danger",
};

export const LongContent = Template.bind({});
LongContent.args = {
  title:
    "Are you absolutely certain you want to permanently delete this important item? This action cannot be undone.",
  okText: "Yes, I understand",
  cancelText: "Cancel",
};
