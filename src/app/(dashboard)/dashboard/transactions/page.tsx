import { Flex } from "antd";
import { TransactionTable } from "./_components/transactions-table";

export default function TransactionsPage() {
  return (
    <Flex vertical>
      <h1>Transactions</h1>
      <TransactionTable />
    </Flex>
  );
}
