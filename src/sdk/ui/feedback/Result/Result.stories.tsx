import { Meta, StoryFn } from "@storybook/react";
import { Button } from "antd";
import { Result } from "./Result";

export default {
  title: "UI/Feedback/Result",
  tags: ["autodocs"],
  component: Result,
  argTypes: {
    status: {
      control: "select",
      options: ["success", "error", "info", "warning", "404", "403", "500"],
    },
    title: { control: "text" },
    subTitle: { control: "text" },
  },
} as Meta<typeof Result>;

const Template: StoryFn<typeof Result> = (args) => <Result {...args} />;

export const Success = Template.bind({});
Success.args = {
  status: "success",
  title: "Successfully Purchased Cloud Server ECS!",
  subTitle:
    "Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.",
  extra: [
    <Button type="primary" key="console">
      Go Console
    </Button>,
    <Button key="buy">Buy Again</Button>,
  ],
};

export const Error = Template.bind({});
Error.args = {
  status: "error",
  title: "Submission Failed",
  subTitle:
    "Please check and modify the following information before resubmitting.",
  extra: [
    <Button type="primary" key="console">
      Go Console
    </Button>,
    <Button key="buy">Buy Again</Button>,
  ],
};

export const Info = Template.bind({});
Info.args = {
  status: "info",
  title: "Your operation has been executed",
  subTitle: "Please check the details below",
};

export const Warning = Template.bind({});
Warning.args = {
  status: "warning",
  title: "There are some problems with your operation",
  subTitle: "Please review and try again",
};

export const NotFound = Template.bind({});
NotFound.args = {
  status: "404",
  title: "404",
  subTitle: "Sorry, the page you visited does not exist.",
  extra: <Button type="primary">Back Home</Button>,
};

export const Forbidden = Template.bind({});
Forbidden.args = {
  status: "403",
  title: "403",
  subTitle: "Sorry, you are not authorized to access this page.",
  extra: <Button type="primary">Back Home</Button>,
};

export const ServerError = Template.bind({});
ServerError.args = {
  status: "500",
  title: "500",
  subTitle: "Sorry, something went wrong on our server.",
  extra: <Button type="primary">Back Home</Button>,
};
