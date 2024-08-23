"use client";

import { themeConfig } from "@/sdk/config/theme";
import { Button } from "@/sdk/ui/general/Button";
import { Menu } from "@/sdk/ui/navigation/Menu";
import { MenuItems } from "@/sdk/utils/getMenuItems";
import {
  ConfigProvider,
  Flex,
  Layout,
  MenuProps,
  theme as antdTheme,
} from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const { Header, Footer, Sider, Content } = Layout;
const { useToken } = antdTheme;

type MenuItem = Required<MenuProps>["items"][number];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useToken();
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = useMemo(() => MenuItems, []);

  const theme = {
    ...themeConfig,
    components: {
      Layout: {
        siderBg: token.colorBgBase,
        headerBg: token.colorBgBase,
      },
    },
  };

  console.log({ collapsed });

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ height: "100vh" }}>
        <Sider width={"230px"} collapsed={collapsed}>
          <Flex style={{ height: "100%" }} justify="space-between" vertical>
            <Menu
              mode="inline"
              theme="light"
              items={items}
              inlineCollapsed={collapsed}
            />
            <Button
              style={{
                borderRadius: 0,
                borderRight: 0,
                borderLeft: 0,
                borderBottom: 0,
              }}
              onClick={() => setCollapsed(!collapsed)}
              block
            >
              {collapsed ? (
                <ChevronLeft size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </Button>
          </Flex>
        </Sider>
        <Layout>
          <Header></Header>
          <Content>{children}</Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
