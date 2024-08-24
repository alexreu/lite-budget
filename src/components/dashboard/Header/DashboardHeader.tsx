import { Avatar } from "@/sdk/ui/data-display/Avatar";
import { Dropdown } from "@/sdk/ui/navigation/Dropdown";
import { Flex, MenuProps, theme } from "antd";
import { User } from "lucide-react";
import styled from "styled-components";

type DashboardHeaderProps = {};

const StyledDropdown = styled(Dropdown)`
  width: 200px;
`;

export const DashboardHeader = ({ ...props }: DashboardHeaderProps) => {
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
      label: "Déconnexion",
      key: "2",
    },
  ];

  return (
    <Flex justify="flex-end" align="center" className="h-full">
      <StyledDropdown
        menu={{ items }}
        trigger={["click"]}
        overlayClassName="!w-48"
      >
        <Avatar
          size={32}
          icon={<User />}
          style={{ backgroundColor: token.colorPrimary }}
        />
      </StyledDropdown>
    </Flex>
  );
};
