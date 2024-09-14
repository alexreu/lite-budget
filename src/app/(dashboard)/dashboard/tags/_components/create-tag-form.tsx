"use client";

import { useCreateTag } from "@/sdk/hooks/tags/useCreateTag";
import { Input } from "@/sdk/ui/data-entry/Input";
import { Button } from "@/sdk/ui/general/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ColorPicker, Flex, Form, message } from "antd";
import { useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { createTagSchema, CreateTagSchema } from "../_schema/tag.schema";

export const CreateTagForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { data: session } = useSession();

  const successMessage = () => {
    messageApi.open({
      type: "success",
      content: "Tag créé avec succès",
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTagSchema>({
    resolver: zodResolver(createTagSchema),
    defaultValues: {
      color: "#4A90E2",
      userId: session?.user?.id as string,
    },
  });

  const { mutate, isLoading, isSuccess, isError, error } = useCreateTag();

  const onSubmit = async (data: CreateTagSchema) => {
    await mutate(data);

    if (isSuccess && !isLoading) {
      successMessage();
    }
  };

  return (
    <>
      {contextHolder}
      <Flex vertical>
        <div>
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
                render={({ field: { ref, ...field } }) => (
                  <Input disabled={isLoading} {...field} />
                )}
              />
            </Form.Item>
            <Form.Item
              name="color"
              label="Color"
              help={errors.color?.message}
              validateStatus={errors.color ? "error" : ""}
              className="!mb-0"
            >
              <Controller
                control={control}
                name="color"
                render={({ field: { ref, onChange, ...field } }) => (
                  <ColorPicker
                    {...field}
                    defaultFormat="hex"
                    onChange={(value) => {
                      const hexColor = value.toHexString();
                      onChange(hexColor);
                    }}
                    disabled={isLoading}
                  />
                )}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Créer
            </Button>
          </Form>
        </div>
      </Flex>
    </>
  );
};
