import { Meta, StoryFn } from "@storybook/react";
import { Progress } from "./Progress";

export default {
  title: "UI/Feedback/Progress",
  tags: ["autodocs"],
  component: Progress,
  argTypes: {
    percent: { control: "number" },
    type: {
      control: "select",
      options: ["line", "circle", "dashboard"],
    },
    status: {
      control: "select",
      options: ["success", "exception", "normal", "active"],
    },
    showInfo: { control: "boolean" },
    strokeLinecap: {
      control: "select",
      options: ["round", "square"],
    },
  },
} as Meta<typeof Progress>;

const Template: StoryFn<typeof Progress> = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  percent: 30,
};

export const CircleProgress = Template.bind({});
CircleProgress.args = {
  percent: 75,
  type: "circle",
};

export const DashboardProgress = Template.bind({});
DashboardProgress.args = {
  percent: 90,
  type: "dashboard",
};

export const SuccessStatus = Template.bind({});
SuccessStatus.args = {
  percent: 100,
  status: "success",
};

export const ExceptionStatus = Template.bind({});
ExceptionStatus.args = {
  percent: 70,
  status: "exception",
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  percent: 50,
  strokeColor: {
    "0%": "#108ee9",
    "100%": "#87d068",
  },
};

export const WithoutInfo = Template.bind({});
WithoutInfo.args = {
  percent: 60,
  showInfo: false,
};

export const CustomStrokeLinecap = Template.bind({});
CustomStrokeLinecap.args = {
  percent: 80,
  strokeLinecap: "square",
};
