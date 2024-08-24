"use client";

import { Button } from "@/sdk/ui/general/Button";
import { Menu, MenuItem } from "@/sdk/ui/navigation/Menu";
import { Flex, Typography } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  border: none;
`;

const MenuTitle = styled(Typography.Title)`
  display: inline-flex;
  justify-content: center;
  padding: var(--ant-padding-xxs);
  padding-left: var(--ant-padding-lg);
  margin: var(--ant-margin-xxs);
`;

export const DashboardSider = ({
  menuItems,
  collapsed,
  setCollapsed,
  selectedKeys,
}: {
  menuItems: MenuItem[];
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  selectedKeys: string[];
}) => {
  return (
    <Flex style={{ height: "100%" }} justify="space-between" vertical>
      <Flex justify="center" vertical>
        <MenuTitle
          level={3}
          className="inline-flex items-center pl-6 px-2 !m-1"
        >
          {collapsed ? "LB" : "LiteBudget"}
        </MenuTitle>
        <StyledMenu
          mode="inline"
          theme="light"
          items={menuItems}
          selectedKeys={selectedKeys}
        />
      </Flex>
      <Button
        type="primary"
        onClick={() => setCollapsed(!collapsed)}
        className="!rounded-none"
        block
      >
        {collapsed ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </Button>
    </Flex>
  );
};
