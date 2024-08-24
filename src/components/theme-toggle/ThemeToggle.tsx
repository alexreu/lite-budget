"use client";

import { useTheme } from "@/sdk/context/ThemeContext";
import { Button } from "@/sdk/ui/general/Button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      shape="circle"
      size="small"
      icon={theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
      onClick={toggleTheme}
    />
  );
};
