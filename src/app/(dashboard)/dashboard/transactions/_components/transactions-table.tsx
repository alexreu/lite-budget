"use client";

import { useTransactions } from "@/sdk/hooks/useTransactions";
import { Table, TableProps } from "@/sdk/ui/data-display/Table";

type DataType = {
  key: string;
  amount: number;
  description?: string;
  type: "income" | "expense";
  tag: string;
  category: string;
  account: string;
  date: Date;
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Montant",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Tag",
    dataIndex: "tag",
    key: "tag",
  },
  {
    title: "Catégorie",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Compte",
    dataIndex: "account",
    key: "account",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

export const TransactionTable = () => {
  const { data, isLoading, error } = useTransactions();

  if (error) return <div>Error: {error.message}</div>;

  return <Table columns={columns} data={data} loading={isLoading} />;
};
