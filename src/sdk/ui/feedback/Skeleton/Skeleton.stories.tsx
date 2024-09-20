import { Meta, StoryFn } from "@storybook/react";
import { Skeleton } from "./Skeleton";

export default {
  title: "UI/Feedback/Skeleton",
  tags: ["autodocs"],
  component: Skeleton,
  argTypes: {
    active: { control: "boolean" },
    avatar: { control: "boolean" },
    loading: { control: "boolean" },
    paragraph: { control: "object" },
    title: { control: "boolean" },
  },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  active: true,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  avatar: true,
  paragraph: { rows: 4 },
};

export const CustomParagraph = Template.bind({});
CustomParagraph.args = {
  paragraph: { rows: 6, width: [100, 200, 300, 400, 500, 600] },
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: true,
  paragraph: { rows: 3 },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  children: <div>Content loaded!</div>,
};

export const ComplexSkeleton = Template.bind({});
ComplexSkeleton.args = {
  active: true,
  avatar: true,
  title: true,
  paragraph: { rows: 4, width: [300, 400, 500, 600] },
};
