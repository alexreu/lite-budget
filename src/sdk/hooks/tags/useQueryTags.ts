import { TagResourceSchema } from "@/app/(dashboard)/dashboard/tags/_schema/tag.schema";
import { APIRoutes } from "@/sdk/utils/APIRoutes";
import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";

const fetchTags = async () => {
  const response = await axios.get<TagResourceSchema[]>(APIRoutes.TAGS);
  return response.data;
};

export const useQueryTags = (): UseQueryResult<TagResourceSchema[], Error> => {
  return useQuery<TagResourceSchema[], Error>({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};
