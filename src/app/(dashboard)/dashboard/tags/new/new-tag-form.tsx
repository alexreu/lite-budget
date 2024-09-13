"use client";

import { Input } from "@/sdk/ui/data-entry/Input";
import { Button } from "@/sdk/ui/general/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, Form } from "antd";
import { useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { newTagSchema, NewTagSchema } from "../_schema/new-tag.schema";

export const NewTagForm = () => {
  const { data: session } = useSession();
  console.log({ session });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTagSchema>({ resolver: zodResolver(newTagSchema) });

  const userId = session?.user?.id as string;

  const onSubmit = (data: NewTagSchema) => {
    console.log(data);
  };

  return (
    <Flex vertical>
      <div className="container mx-auto">
        <Form
          name="new-tag"
          layout="horizontal"
          onFinish={handleSubmit(onSubmit)}
          className="flex w-full gap-4 items-start"
        >
          <Form.Item
            name="name"
            label="Tag"
            help={errors.name?.message}
            validateStatus={errors.name ? "error" : ""}
            className="!mb-0 flex-1"
          >
            <Controller
              control={control}
              name="name"
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item name="userId" className="hidden">
            <Controller
              control={control}
              name="userId"
              render={({ field }) => (
                <Input
                  type="hidden"
                  className="hidden"
                  {...field}
                  value={userId}
                />
              )}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Créer
          </Button>
        </Form>
      </div>
    </Flex>
  );
};
