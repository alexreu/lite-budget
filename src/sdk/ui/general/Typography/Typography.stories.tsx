import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const { Title, Text, Link, Paragraph } = Typography;

const meta: Meta<typeof Typography> = {
  title: "UI/General/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => (
    <>
      <Title>Introduction to Typography</Title>
      <Paragraph>
        This is a paragraph demonstrating the Typography component from Ant
        Design.
      </Paragraph>
      <Text>This is regular text.</Text>
      <br />
      <Text strong>This is strong text.</Text>
      <br />
      <Link href="https://ant.design/components/typography/" target="_blank">
        Learn more about Ant Design Typography
      </Link>
    </>
  ),
};

export const TitleLevels: Story = {
  render: () => (
    <>
      <Title level={1}>h1. Ant Design</Title>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>
    </>
  ),
};

export const TextTypes: Story = {
  render: () => (
    <>
      <Text>Default Text</Text>
      <br />
      <Text type="secondary">Secondary Text</Text>
      <br />
      <Text type="success">Success Text</Text>
      <br />
      <Text type="warning">Warning Text</Text>
      <br />
      <Text type="danger">Danger Text</Text>
      <br />
      <Text disabled>Disabled Text</Text>
      <br />
      <Text mark>Marked Text</Text>
      <br />
      <Text code>Code Text</Text>
      <br />
      <Text keyboard>Keyboard Text</Text>
      <br />
      <Text underline>Underlined Text</Text>
      <br />
      <Text delete>Deleted Text</Text>
      <br />
      <Text strong>Strong Text</Text>
      <br />
      <Text italic>Italic Text</Text>
    </>
  ),
};

export const Paragraphs: Story = {
  render: () => (
    <>
      <Paragraph>
        This is a default paragraph. Ant Design, a design language for
        background applications, is refined by Ant UED Team.
      </Paragraph>
      <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. This is a very long paragraph that will be truncated after
        two rows. You can click &apos;more&apos; to expand it.
      </Paragraph>
    </>
  ),
};
