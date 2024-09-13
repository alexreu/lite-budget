"use client";

import { Route } from "@/sdk/utils/Route";
import { MenuProps } from "antd";
import {
  BookMarked,
  CreditCard,
  HandCoins,
  Home,
  Pencil,
  Tags,
} from "lucide-react";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

export const getDashboardMenuItems = (): MenuItem[] => [
  {
    label: <Link href={Route.DASHBOARD}>Accueil</Link>,
    icon: <Home size={14} />,
    key: "home",
  },
  {
    label: <Link href={Route.BUDGETS}>Budgets</Link>,
    icon: <HandCoins size={14} />,
    key: "budgets",
  },
  {
    label: <Link href={Route.ACCOUNTS}>Comptes</Link>,
    icon: <BookMarked size={14} />,
    key: "accounts",
  },
  {
    label: <Link href={Route.TRANSACTIONS}>Transactions</Link>,
    icon: <CreditCard size={14} />,
    key: "transactions",
  },
  {
    label: <Link href={Route.CATEGORIES}>Catégories</Link>,
    icon: <Pencil size={14} />,
    key: "categories",
  },
  {
    label: <Link href={Route.TAGS}>Tags</Link>,
    icon: <Tags size={14} />,
    key: "tags",
  },
];
