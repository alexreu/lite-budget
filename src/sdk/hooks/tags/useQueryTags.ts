import { Tag } from "@/sdk/types/tag";
import { APIRoutes } from "@/sdk/utils/APIRoutes";
import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";

const fetchTags = async () => {
  const response = await axios.get<Tag[]>(APIRoutes.TAGS);
  return response.data;
};

export const useQueryTags = (): UseQueryResult<Tag[], Error> => {
  return useQuery<Tag[], Error>({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};
