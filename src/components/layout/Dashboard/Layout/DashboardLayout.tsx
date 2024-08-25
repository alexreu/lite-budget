"use client";

import { DashboardHeader } from "@/components/layout/Dashboard/Header";
import { DashboardSider } from "@/components/layout/Dashboard/Sider";
import { getDashboardMenuItems } from "@/components/layout/Dashboard/utils/getDashboardMenuItems";
import { getThemeConfig } from "@/sdk/config/theme";
import { useTheme } from "@/sdk/context/ThemeContext";
import { useCurrentSelectedKeys } from "@/sdk/hooks/useCurrentSelectedKeys";
import { MenuItem } from "@/sdk/ui/navigation/Menu";
import { ConfigProvider, Layout, theme } from "antd";
import { useMemo, useState } from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const { Sider, Header, Content, Footer } = Layout;
const { useToken } = theme;

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { token } = useToken();
  const [collapsed, setCollapsed] = useState(false);
  const selectedKeys = useCurrentSelectedKeys();
  const { theme: themeMode } = useTheme();

  const themeConfig = getThemeConfig(themeMode);

  const items: MenuItem[] = useMemo(() => getDashboardMenuItems(), []);

  const theme = {
    ...themeConfig,
    components: {
      Layout: {
        siderBg: token.colorBgBase,
        headerBg: token.colorBgBase,
      },
      Typography: {
        titleMarginBottom: 0,
      },
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ height: "100vh" }}>
        <Sider width={"230px"} collapsed={collapsed}>
          <DashboardSider
            menuItems={items}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            selectedKeys={selectedKeys}
          />
        </Sider>
        <Layout>
          <Header>
            <DashboardHeader />
          </Header>
          <Content className="p-8">{children}</Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
