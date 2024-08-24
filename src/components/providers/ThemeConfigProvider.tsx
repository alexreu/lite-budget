"use client";

import { getThemeConfig } from "@/sdk/config/theme";
import { useTheme } from "@/sdk/context/ThemeContext";
import { ConfigProvider } from "antd";

export function ThemeConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const currentTheme = getThemeConfig(theme);

  return <ConfigProvider theme={currentTheme}>{children}</ConfigProvider>;
}
