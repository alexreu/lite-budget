"use client";

import { MenuProps } from "antd";
import {
  BookMarked,
  CreditCard,
  HandCoins,
  Home,
  Pencil,
  Tags,
} from "lucide-react";

type MenuItem = Required<MenuProps>["items"][number];

export const getDashboardMenuItems = (): MenuItem[] => [
  {
    label: "Accueil",
    icon: <Home size={14} />,
    key: "home",
  },
  {
    label: "Budgets",
    icon: <HandCoins size={14} />,
    key: "budgets",
  },
  {
    label: "Comptes",
    icon: <BookMarked size={14} />,
    key: "accounts",
  },
  {
    label: "Transactions",
    icon: <CreditCard size={14} />,
    key: "transactions",
  },
  {
    label: "Catégories",
    icon: <Pencil size={14} />,
    key: "categories",
  },
  {
    label: "Tags",
    icon: <Tags size={14} />,
    key: "tags",
  },
];
