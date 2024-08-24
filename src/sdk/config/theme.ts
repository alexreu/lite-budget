import { ThemeConfig } from "antd";

export const lightTheme: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: "#4A90E2",
    colorSuccess: "#27AE60",
    colorError: "#E74C3C",
    colorBgBase: "#F5F5F5",
    borderRadius: 8,
  },
};

export const darkTheme: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: "#4A90E2",
    colorSuccess: "#27AE60",
    colorError: "#E74C3C",
    colorBgBase: "#1f1f1f",
    colorTextBase: "#ffffff",
    borderRadius: 8,
  },
};
// export const themeConfig = {
//   cssVar: true,
//   token: {
//     colorPrimary: "#4A90E2",
//     colorSuccess: "#27AE60",
//     colorError: "#E74C3C",
//     colorBgBase: "#F5F5F5",
//     borderRadius: 8,
//   },
// };
export const getThemeConfig = (theme: "light" | "dark"): ThemeConfig => {
  return theme === "light" ? lightTheme : darkTheme;
};
