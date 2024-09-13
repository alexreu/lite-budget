import axios from "axios";
import { useQuery } from "react-query";

const fetchTransactions = async () => {
  const response = await axios.get("/api/transactions");
  return response.data;
};

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
}
