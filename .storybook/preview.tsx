import type { Preview } from "@storybook/react";
import { ConfigProvider } from "antd";
import React from "react";
import { themeConfig } from "../src/sdk/config/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider theme={themeConfig}>
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default preview;
