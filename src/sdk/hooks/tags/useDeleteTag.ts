import { TagResource } from "@/sdk/types/tagResource";
import { APIRoutes } from "@/sdk/utils/APIRoutes";
import axios from "axios";
import { useMutation } from "react-query";

const deleteTag = async (id: string) => {
  const response = await axios.delete<TagResource>(APIRoutes.TAGS, {
    data: { id },
  });
  return response.data;
};

export function useDeleteTag() {
  return useMutation({
    mutationFn: deleteTag,
  });
}
