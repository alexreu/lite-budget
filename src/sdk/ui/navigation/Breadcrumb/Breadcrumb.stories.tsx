import { Meta, StoryObj } from "@storybook/react";
import { Home, User } from "lucide-react";
import { Breadcrumb } from "./";

const meta: Meta<typeof Breadcrumb> = {
  title: "UI/Navigation/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Home",
      },
      {
        title: "Application Center",
      },
      {
        title: "Application List",
      },
      {
        title: "An Application",
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        href: "/",
        title: <Home size={14} />,
      },
      {
        href: "/user",
        title: (
          <>
            <User size={14} />
            <span>User Profile</span>
          </>
        ),
      },
      {
        title: "Current Page",
      },
    ],
  },
};

export const WithSeparator: Story = {
  args: {
    separator: ">",
    items: [
      {
        title: "Home",
      },
      {
        title: "Category",
      },
      {
        title: "Sub-category",
      },
      {
        title: "Product",
      },
    ],
  },
};
