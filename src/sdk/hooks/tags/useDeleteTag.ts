import {
  DeleteTagSchema,
  TagResourceSchema,
} from "@/app/(dashboard)/dashboard/tags/_schema/tag.schema";
import { APIRoutes } from "@/sdk/utils/APIRoutes";
import axios from "axios";
import { useMutation } from "react-query";

const deleteTag = async (data: DeleteTagSchema) => {
  const response = await axios.delete<TagResourceSchema>(APIRoutes.TAGS, {
    data,
  });
  return response.data;
};

export function useDeleteTag() {
  return useMutation({
    mutationFn: deleteTag,
  });
}
