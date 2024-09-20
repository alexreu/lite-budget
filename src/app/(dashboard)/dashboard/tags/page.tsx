"use client";

import { Card } from "@/sdk/ui/data-display/Card";
import { Flex } from "antd";
import { CreateTagForm } from "./_components/create-tag-form";
import { TagsList } from "./_components/tags-list";

export default function TagsPage() {
  return (
    <Flex align="center" className="w-full h-full">
      <Card className="w-full">
        <div className="flex flex-col gap-4">
          <CreateTagForm />
          <TagsList />
        </div>
      </Card>
    </Flex>
  );
}
