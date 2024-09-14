import { NewTagSchema } from "@/app/(dashboard)/dashboard/tags/_schema/new-tag.schema";
import { APIRoutes } from "@/sdk/utils/APIRoutes";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const createTag = async ({ name, color, userId }: NewTagSchema) => {
  const response = await axios.post<NewTagSchema>(APIRoutes.TAGS, {
    name,
    color,
    userId,
  });

  return response.data;
};

export const useCreateTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};
