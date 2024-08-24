import { ThemeToggle } from "@/components/theme-toggle/ThemeToggle";
import { Avatar } from "@/sdk/ui/data-display/Avatar";
import { Dropdown } from "@/sdk/ui/navigation/Dropdown";
import { Flex, MenuProps, theme, Typography } from "antd";
import { User } from "lucide-react";

type DashboardHeaderProps = {};

export const DashboardHeader = ({}: DashboardHeaderProps) => {
  const { token } = theme.useToken();

  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">Paramètres</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">Profil</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Typography.Paragraph type="danger" className="!mb-0">
          Déconnexion
        </Typography.Paragraph>
      ),
      key: "2",
    },
  ];

  return (
    <Flex gap={8} justify="flex-end" align="center" className="h-full">
      <ThemeToggle />
      <Dropdown menu={{ items }} trigger={["click"]} overlayClassName="!w-48">
        <Avatar
          size={32}
          icon={<User />}
          style={{ backgroundColor: token.colorPrimary }}
        />
      </Dropdown>
    </Flex>
  );
};
