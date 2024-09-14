"use client";
import { useDeleteTag } from "@/sdk/hooks/tags/useDeleteTag";
import { useQueryTags } from "@/sdk/hooks/tags/useQueryTags";
import { Empty } from "@/sdk/ui/data-display/Empty";
import { Tag } from "@/sdk/ui/data-display/Tag";
import { message, Spin } from "antd";

export const TagsList = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { data: tags, isLoading } = useQueryTags();
  const { mutate: deleteTag, isLoading: isDeleting } = useDeleteTag();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Tag supprimé avec succès",
    });
  };

  const handleClose = (id: string) => {
    deleteTag(id, {
      onSuccess: () => success(),
    });
  };

  if (!isLoading && (!tags || (tags && tags.length === 0))) return <Empty />;

  return (
    <>
      {contextHolder}
      <Spin spinning={isLoading || isDeleting} wrapperClassName="min-h-10">
        <ul className="flex h-full items-center gap-2 flex-wrap">
          {tags?.map((tag) => (
            <li key={tag.id}>
              <Tag
                color={tag.color}
                className="!m-0"
                onClose={() => handleClose(tag.id)}
                closable
              >
                {tag.name}
              </Tag>
            </li>
          ))}
        </ul>
      </Spin>
    </>
  );
};
