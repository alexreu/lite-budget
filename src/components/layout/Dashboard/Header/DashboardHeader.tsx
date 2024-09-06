import { signOutAction } from "@/app/signin/sign-in.action";
import { ThemeToggle } from "@/components/theme-toggle/ThemeToggle";
import { Avatar } from "@/sdk/ui/data-display/Avatar";
import { Dropdown } from "@/sdk/ui/navigation/Dropdown";
import { Flex, MenuProps, theme, Typography } from "antd";
import { User } from "lucide-react";
import { signOut } from "next-auth/react";

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
        <Typography.Text
          type="danger"
          className="!mb-0"
          onClick={signOutAction}
        >
          Déconnexion
        </Typography.Text>
      ),
      key: "2",
      onClick: () => signOut(),
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
