import { Meta, StoryFn } from "@storybook/react";
import { Spin } from "./Spin";

export default {
  title: "UI/Feedback/Spin",
  tags: ["autodocs"],
  component: Spin,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "default", "large"] },
    },
    spinning: { control: "boolean" },
    tip: { control: "text" },
    delay: { control: "number" },
  },
} as Meta<typeof Spin>;

const Template: StoryFn<typeof Spin> = (args) => <Spin {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const WithTip = Template.bind({});
WithTip.args = {
  tip: "Loading...",
};

export const WithDelay = Template.bind({});
WithDelay.args = {
  delay: 1000,
};

export const WithContent: StoryFn<typeof Spin> = (args) => (
  <Spin {...args}>
    <div style={{ padding: "20px", background: "#f0f0f0" }}>
      Content inside the Spin component
    </div>
  </Spin>
);
WithContent.args = {
  spinning: true,
};

export const CustomIndicator: StoryFn<typeof Spin> = (args) => (
  <Spin
    {...args}
    indicator={<div style={{ fontSize: "24px", color: "blue" }}>⟳</div>}
  />
);
CustomIndicator.args = {};
