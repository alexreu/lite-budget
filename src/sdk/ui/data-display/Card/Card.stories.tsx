import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI/Data Display/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Default Card",
    children: "This is the content of the card.",
  },
};

export const WithCover: Story = {
  args: {
    // eslint-disable-next-line @next/next/no-img-element
    cover: <img alt="example" src="https://via.placeholder.com/300x200" />,
    title: "Card with Cover",
    children: "This card has a cover image.",
  },
};

export const WithMeta: Story = {
  args: {
    title: "Card with Meta",
    children: (
      <Card.Meta
        title="Card Meta Title"
        description="This is the description of the card meta"
      />
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: "Card with Actions",
    actions: [
      <span key="setting">Setting</span>,
      <span key="edit">Edit</span>,
      <span key="ellipsis">More</span>,
    ],
    children: "This card has action buttons at the bottom.",
  },
};

export const WithGrid: Story = {
  args: {
    title: "Card with Grid",
    children: (
      <>
        <Card.Grid style={{ width: "25%", textAlign: "center" }}>
          Content
        </Card.Grid>
        <Card.Grid style={{ width: "25%", textAlign: "center" }}>
          Content
        </Card.Grid>
        <Card.Grid style={{ width: "25%", textAlign: "center" }}>
          Content
        </Card.Grid>
        <Card.Grid style={{ width: "25%", textAlign: "center" }}>
          Content
        </Card.Grid>
      </>
    ),
  },
};
