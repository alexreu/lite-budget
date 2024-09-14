import { TagResource } from "@/sdk/types/tagResource";
import { APIRoutes } from "@/sdk/utils/APIRoutes";
import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";

const fetchTags = async () => {
  const response = await axios.get<TagResource[]>(APIRoutes.TAGS);
  return response.data;
};

export const useQueryTags = (): UseQueryResult<TagResource[], Error> => {
  return useQuery<TagResource[], Error>({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};
