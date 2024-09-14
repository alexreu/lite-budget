"use client";
import { useQueryTags } from "@/sdk/hooks/tags/useQueryTags";
import { Empty } from "@/sdk/ui/data-display/Empty";
import { Tag } from "@/sdk/ui/data-display/Tag";
import { Spin } from "antd";

export const TagsList = () => {
  const { data: tags, isLoading } = useQueryTags();

  const handleClose = (id: string) => {
    console.log(id);
  };

  if (!isLoading && (!tags || (tags && tags.length === 0))) return <Empty />;

  return (
    <Spin spinning={isLoading} wrapperClassName="min-h-10">
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
  );
};
