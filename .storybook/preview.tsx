import type { Preview } from "@storybook/react";
import { ConfigProvider } from "antd";
import React from "react";
import { lightTheme } from "../src/sdk/config/theme";

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
      <ConfigProvider theme={lightTheme}>
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default preview;
