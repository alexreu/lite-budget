"use client";

import { Card } from "@/sdk/ui/data-display/Card";
import { Flex } from "antd";
import { NewTagForm } from "./_components/new-tag-form";
import { TagsList } from "./_components/tags-list";

export default function TagsPage() {
  return (
    <Flex align="center" className="w-full h-full">
      <Card className="w-full">
        {/* Tags: <Link href={Route.TAGS_NEW}>Créer un tag</Link> */}
        <div className="flex flex-col gap-4">
          <NewTagForm />
          <TagsList />
        </div>
      </Card>
    </Flex>
  );
}
